# Google Sheets Integration Setup Guide

This guide will help you set up automatic data collection from your website contact form to Google Sheets in your Drive folder.

## 📋 Overview

When customers submit the contact form, their details will be:
1. ✅ Saved to Google Sheets in your Drive folder
2. ✅ Sent to your WhatsApp (+91 8610511096)
3. ✅ Form stays on the same page (no redirect)

---

## 🔧 Step-by-Step Setup

### Step 1: Create Google Sheet

1. Open your Google Drive folder: https://drive.google.com/drive/folders/1zIDIHVrNzn05xRe_cr5u7SBOXIaW10Aq?usp=sharing

2. Click **"New"** → **"Google Sheets"** → **"Blank spreadsheet"**

3. Name it: **"Studio Blend - Contact Form Submissions"**

4. In Row 1, create these column headers:
   ```
   | Timestamp | Name | Email | Mobile | Service Needed | Message |
   ```

5. Keep this Google Sheet tab open - you'll need it in Step 2.

---

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**

2. Delete any existing code in the editor

3. **Copy and paste this complete script:**

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Create a new row with the data
    var row = [
      data.timestamp || new Date().toLocaleString(),
      data.name || '',
      data.email || '',
      data.mobile || '',
      data.service || '',
      data.message || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(row);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Studio Blend Contact Form API is running!');
}
```

4. Click **Save** (💾 icon) and name the project: **"Studio Blend Contact Form"**

---

### Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**

2. Click the ⚙️ gear icon next to "Select type" → Choose **"Web app"**

3. Configure the deployment:
   - **Description:** Studio Blend Contact Form API
   - **Execute as:** Me (studioblend0@gmail.com)
   - **Who has access:** Anyone

4. Click **Deploy**

5. **Important:** You'll see an authorization screen:
   - Click **"Review permissions"**
   - Select your Google account (studioblend0@gmail.com)
   - Click **"Advanced"** → **"Go to Studio Blend Contact Form (unsafe)"**
   - Click **"Allow"**

6. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXX/exec
   ```

---

### Step 4: Update Your Website

1. Open the file: `/components/Contact.tsx`

2. Find this line (near the top):
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";
   ```

3. Replace it with your actual URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXX/exec";
   ```

4. Save the file

---

## ✅ Testing

1. Go to your website
2. Fill out the contact form:
   - **Name:** Test Customer
   - **Email:** test@example.com
   - **Mobile:** +91 9876543210
   - **Service:** Graphic Design
   - **Message:** This is a test message

3. Click **"Send Message"**

4. Check your Google Sheet - you should see a new row with the data!

5. WhatsApp should also open with the pre-filled message

---

## 📊 What Gets Saved

Every form submission saves these fields to your Google Sheet:

| Column | Data |
|--------|------|
| **Timestamp** | Date and time of submission |
| **Name** | Customer's name |
| **Email** | Customer's email address |
| **Mobile** | Customer's mobile number |
| **Service Needed** | Selected service (Video Editing, Graphic Design, etc.) |
| **Message** | Customer's message/project details |

---

## 🎨 Form Fields

Your contact form now includes:

1. **Name** (Required)
2. **Email** (Required)
3. **Mobile Number** (Required) - New field added
4. **Service Needed** (Required) - New dropdown with options:
   - Video Editing
   - Graphic Design
   - Social Media Marketing
   - Branding & Content Strategy
   - Multiple Services
   - Other
5. **Message** (Required)

---

## 🔄 How It Works

1. Customer fills the form on your website
2. Clicks "Send Message"
3. **Data is automatically saved to Google Sheets** in your Drive folder
4. **WhatsApp opens** with pre-filled message (customer sends it to complete)
5. **Success message appears** - form stays on same page
6. Form clears and is ready for next customer
7. **You receive the inquiry via WhatsApp**
8. **All data is backed up in Google Sheets** for your records

---

## 📱 WhatsApp Message Format

When customers submit, WhatsApp opens with this format:

```
*New Customer Inquiry*

*Name:* John Doe
*Email:* john@example.com
*Mobile:* +91 9876543210
*Service Needed:* Graphic Design
*Message:* I need help with my brand identity
```

---

## 🔒 Privacy & Security

- Google Sheets is stored in your personal Drive folder
- Only you (studioblend0@gmail.com) have access
- Data is transmitted securely via HTTPS
- Customer must complete WhatsApp send to finalize inquiry
- No data is stored on third-party servers

---

## 🛠️ Troubleshooting

### Form submits but no data in Google Sheet?

1. Check that you copied the correct Web App URL
2. Make sure the script is deployed as "Anyone" can access
3. Verify the Google Sheet has the correct column headers

### WhatsApp not opening?

- Check that the customer has WhatsApp installed
- Desktop users will use WhatsApp Web
- Mobile users will use WhatsApp app

### Getting errors?

1. Open Google Sheet → Extensions → Apps Script
2. Click **"Executions"** to see error logs
3. Check if the script has proper permissions

---

## 📞 Contact Information Being Used

✅ **Email:** studioblend0@gmail.com  
✅ **WhatsApp:** +91 8610511096  
✅ **Google Drive Folder:** https://drive.google.com/drive/folders/1zIDIHVrNzn05xRe_cr5u7SBOXIaW10Aq

---

## 🎯 Benefits

✅ **No page redirect** - Better user experience  
✅ **Automatic backup** - All data saved to Google Sheets  
✅ **WhatsApp integration** - Direct communication  
✅ **Service tracking** - Know what customers need  
✅ **Mobile numbers** - Better contact options  
✅ **Organized data** - Easy to manage and export  

---

**Studio Blend** - Creative Digital Marketing Agency

Need help? The form data will be in your Google Drive folder after setup!
