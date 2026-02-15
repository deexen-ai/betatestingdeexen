# Deexen AI — Waitlist / Early Access Page

A modern, premium single-page Next.js marketing site for Deexen AI's waitlist and Founding Beta Tester Program.

## Features & Design

-   **Typography**: Premium pairing of **Outfit** (Modern Sans) and **Joti One** (Display/Script).
-   **Beta Page**: Dedicated landing page (`/beta`) for the "Founding 50" cohort with unique branding.
-   **Visuals**: Dark mode aesthetic with orange accents, glassmorphism, and custom SVG icons.
-   **Dynamic UI**: High-fidelity IDE mockups, terminal simulations, and interactive hover effects.

## Tech Stack

-   **Next.js 15** (App Router, TypeScript)
-   **Tailwind CSS v4** (with `@theme` configuration)
-   **Framer Motion** (Animations)
-   **Google Sheets** (via Apps Script for email collection)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Google Sheets Setup

### 1. Create a Google Sheet

Create a new Google Sheet with two columns: `Email` and `Timestamp`.

### 2. Add the Apps Script

Go to **Extensions → Apps Script** in your Google Sheet and paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Check for duplicate emails
  var emails = sheet.getRange("A:A").getValues().flat();
  if (emails.includes(data.email)) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "duplicate" }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  sheet.appendRow([data.email, data.timestamp || new Date().toISOString()]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 3. Deploy as Web App

1. Click **Deploy → New deployment**
2. Select **Web app** as the type
3. Set **Execute as**: Me
4. Set **Who has access**: Anyone
5. Click **Deploy** and copy the Web App URL

### 4. Set the Environment Variable

Copy `.env.example` to `.env.local` and paste your Web App URL:

```bash
GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Project Structure

```
app/
├── api/waitlist/route.ts   # POST endpoint for email submissions
├── beta/page.tsx           # Dedicated Beta Program landing page
├── globals.css             # Tailwind config + design tokens
├── layout.tsx              # Root layout with SEO metadata and Fonts
└── page.tsx                # Main page (all sections)
components/
├── Navbar.tsx              # Sticky nav with scroll blur
├── Hero.tsx                # Hero section with email form
├── WaitlistForm.tsx        # Reusable email capture form
├── Features.tsx            # 5 AI modes showcase
├── IDEShowcase.tsx         # IDE features + code mockup
├── BetaProgram.tsx         # Beta tester program details (embedded in Home)
├── Roadmap.tsx             # Coming soon features
├── FinalCTA.tsx            # Bottom email capture
└── Footer.tsx              # Minimal footer
```
