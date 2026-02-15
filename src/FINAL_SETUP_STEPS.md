# Final Setup Steps - Connect Your Google Sheet

Your Google Sheet: https://docs.google.com/spreadsheets/d/1Vcctm9XB445AiX8mKAMciNbpQycKPvNP406FvMrzG_k/edit?usp=sharing

## ⚡ Quick Setup (5 minutes)

### Step 1: Prepare Your Google Sheet

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1Vcctm9XB445AiX8mKAMciNbpQycKPvNP406FvMrzG_k/edit?usp=sharing

2. In **Row 1** (first row), add these exact column headers:

   ```
   A1: Timestamp
   B1: Name
   C1: Email
   D1: Mobile
   E1: Service Needed
   F1: Message
   ```

3. Keep this tab open for the next step

---

### Step 2: Create the Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**

2. Delete everything in the code editor

3. **Copy and paste this EXACT code:**

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Create a new row with the data
    var row = [
      data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
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

4. Click **💾 Save** (or Ctrl+S / Cmd+S)

5. Name your project: **"Studio Blend Contact Form"**

---

### Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**

2. Click the **⚙️ gear icon** next to "Select type"

3. Choose **"Web app"**

4. Fill in these settings:
   - **Description:** Contact Form API
   - **Execute as:** Me (your email)
   - **Who has access:** **Anyone**

5. Click **Deploy**

6. **IMPORTANT - Authorization:**
   - You'll see a warning screen
   - Click **"Review permissions"**
   - Select your Google account (studioblend0@gmail.com)
   - Click **"Advanced"** (bottom left)
   - Click **"Go to Studio Blend Contact Form (unsafe)"**
   - Click **"Allow"**

7. **COPY THE WEB APP URL**
   - It looks like: `https://script.google.com/macros/s/AKfycby...LONG_ID.../exec`
   - Keep this URL - you'll need it in the next step!

---

### Step 4: Update Your Website Code

1. **Copy the Web App URL** from Step 3

2. Find this line in `/components/Contact.tsx` (line 24):
   ```typescript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";
   ```

3. Replace it with your actual URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec";
   ```

4. Save the file

---

### Step 5: Test It! 🎉

1. Go to your website

2. Fill out the contact form:
   - Name: Test Customer
   - Email: test@example.com  
   - Mobile: +91 9876543210
   - Service: Graphic Design
   - Message: Testing the form

3. Click **"Send Message"**

4. Check your Google Sheet - you should see a new row with all the data!

5. WhatsApp should also open with the pre-filled message

---

## 🎯 What Will Happen

When a customer submits the form:

1. ✅ Data automatically saves to your Google Sheet
2. ✅ WhatsApp opens with customer details
3. ✅ Success message appears
4. ✅ Form clears and stays on same page
5. ✅ Customer sends the WhatsApp message to complete

---

## 📊 Your Google Sheet Will Show

| Timestamp | Name | Email | Mobile | Service Needed | Message |
|-----------|------|-------|--------|---------------|---------|
| 02/11/2025, 10:30:00 AM | John Doe | john@email.com | +91 9876543210 | Graphic Design | Need help with branding |

---

## 🔍 Troubleshooting

### Form submits but no data appears?

**Check:**
- Did you paste the Web App URL correctly in Contact.tsx?
- Is the URL complete with `/exec` at the end?
- Did you deploy with "Who has access: Anyone"?

**Fix:**
1. Go back to Apps Script
2. Click **Deploy** → **Manage deployments**
3. Click **Edit** (pencil icon)
4. Make sure "Who has access" is set to **"Anyone"**
5. Click **Deploy**
6. Copy the NEW URL and update Contact.tsx

### Getting permission errors?

1. Go to Apps Script → **Deploy** → **Manage deployments**
2. Click **Archive** to remove old deployment
3. Create a **New deployment** and go through authorization again

### WhatsApp not opening?

- This is normal - WhatsApp integration works fine
- The form still saves to Google Sheets
- Customer can manually contact you on +91 8610511096

---

## ✅ Checklist

Before going live, make sure:

- [ ] Google Sheet has column headers (Timestamp, Name, Email, Mobile, Service Needed, Message)
- [ ] Apps Script is deployed as Web App
- [ ] "Who has access" is set to "Anyone"
- [ ] Web App URL is copied correctly
- [ ] Contact.tsx has the correct URL (with /exec at end)
- [ ] You've tested with a sample submission
- [ ] Sample data appears in your Google Sheet

---

## 📞 Your Contact Info

✅ **Email:** studioblend0@gmail.com  
✅ **WhatsApp:** +91 8610511096  
✅ **Google Sheet:** https://docs.google.com/spreadsheets/d/1Vcctm9XB445AiX8mKAMciNbpQycKPvNP406FvMrzG_k/edit

---

## 🚀 Once Setup is Complete

Your website will automatically:
- Save every form submission to Google Sheets
- Send customer details to your WhatsApp
- Keep form on same page (no redirect)
- Clear form after successful submission
- Store all data for your records

**You're all set! 🎉**

---

## Need the Complete Code?

The Google Apps Script code is in the box above in **Step 2**.

Just copy-paste it exactly as shown - it's ready to use!
