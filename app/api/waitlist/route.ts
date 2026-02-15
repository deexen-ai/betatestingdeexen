import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        const notionApiKey = process.env.NOTION_API_KEY;
        const databaseId = process.env.NOTION_DATABASE_ID;

        console.error(`### DEBUG ### Key: ${notionApiKey ? 'YES' : 'NO'}, DB: ${databaseId ? 'YES' : 'NO'}`);

        // If configured, save to Notion
        if (notionApiKey && databaseId) {
            const notion = new Client({ auth: notionApiKey });

            try {
                await notion.pages.create({
                    parent: { database_id: databaseId },
                    properties: {
                        Name: {
                            title: [
                                {
                                    text: {
                                        content: email,
                                    },
                                },
                            ],
                        },
                        // Status removed to avoid validation errors
                        Date: {
                            date: {
                                start: new Date().toISOString(),
                            },
                        },
                    },
                });
                console.log(`[Waitlist] Saved to Notion: ${email}`);
            } catch (notionError) {
                console.error("[Waitlist] Notion Error:", notionError);
                // Don't fail the request if Notion fails, just log it
            }
        } else {
            console.log(`[Waitlist] Email received (Notion not configured): ${email}`);
        }

        return NextResponse.json({
            success: true,
            message: "You've been added to the waitlist!",
        });
    } catch (error) {
        console.error("[Waitlist] Error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
