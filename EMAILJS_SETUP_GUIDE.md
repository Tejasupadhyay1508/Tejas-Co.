# EmailJS Setup Guide for Contact Form

This guide helps you connect your portfolio contact form to send emails directly to your inbox.

## Quick Setup (3 minutes)

### 1. Create EmailJS Account
- Go to [EmailJS](https://www.emailjs.com/)
- Sign up for free (no credit card required)
- Verify your email

### 2. Connect Your Email Service

#### Option A: Gmail (Recommended)
1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add Service** → Select **Gmail**
3. Click **Connect with Gmail**
4. Login to your Gmail account and authorize
5. Name it anything (e.g., "Gmail Service")
6. Click **Create Service**
7. Your Service ID will appear (looks like `service_xxxxxxxxxxxxx`)

#### Option B: Other Email Provider
- EmailJS supports Outlook, Yahoo, SendGrid, AWS SES, and more
- Follow similar steps in the Dashboard

### 3. Create Email Template

1. Go to **Email Templates** in the Dashboard
2. Click **Create New Template**
3. Name it anything (e.g., "Portfolio Contact Form")
4. **From Name:** `{{from_name}}`
5. **To Email:** Your email address (or use `{{to_email}}`)
6. **Subject:** `New Portfolio Message from {{from_name}}`
7. **Content:** Use this template:

```
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}
Message:
{{message}}

---
Reply to: {{reply_to}}
```

8. Click **Save**
9. Your Template ID will appear (looks like `template_xxxxxxxxxxxxx`)

### 4. Get Your Public Key

1. Go to **Account** in Dashboard (top right)
2. You'll see your **Public Key** (looks like `xxxxxxxxxxxxxxxxxxxx`)

### 5. Update Environment Variables

In your `.env.local` file, replace:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID_HERE
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID_HERE
```

### 6. Test It!

1. Save the `.env.local` file
2. Restart your development server: `npm run dev`
3. Go to your portfolio website
4. Fill the contact form and submit
5. Check your inbox for the email!

## How It Works

- Form submission → EmailJS API → Your Email Service → Your Inbox
- No backend server needed
- Works on free tier (up to 200 emails/month)
- Emails include sender's email for easy reply

## Troubleshooting

### "Message failed to send"
- Check that all 3 environment variables are correctly set
- Restart the dev server after changing `.env.local`
- Verify your EmailJS service is active in the Dashboard

### Email not receiving
- Check spam/junk folder
- Verify your email service is connected in EmailJS
- Test sending via EmailJS Dashboard first

### Rate Limiting
- Free tier: 200 emails/month
- Upgrade plan if needed: [EmailJS Pricing](https://www.emailjs.com/pricing)

## What Gets Sent to You

```
Subject: New Portfolio Message from [Name]

Name: [User's Name]
Email: [User's Email]
Message:
[User's Message]

---
Reply to: [User's Email]
```

## Additional Features

You can modify the template in [src/components/Contact.tsx](../src/components/Contact.tsx) to add:
- Phone number field
- Subject field
- File attachments (pro feature)
- Auto-reply to sender

---

For more help, visit [EmailJS Docs](https://www.emailjs.com/docs/)
