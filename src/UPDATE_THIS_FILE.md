# 📝 After Completing Apps Script Setup

## What You Need to Do

After you complete the Google Apps Script setup and get your Web App URL, you need to update **ONE LINE** in the code.

---

## 🎯 The File to Update

**File:** `/components/Contact.tsx`

**Line Number:** 24

---

## 📋 Current Code (Line 24)

```typescript
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";
```

---

## ✅ Update to This

Replace `"YOUR_GOOGLE_SCRIPT_URL_HERE"` with your actual Google Apps Script Web App URL:

```typescript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby...YOUR_ACTUAL_ID.../exec";
```

---

## 🔗 Example

If your Web App URL from Apps Script is:
```
https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
```

Then line 24 should look like:
```typescript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec";
```

---

## ⚠️ Important

- Keep the quotes `""`
- Keep the semicolon `;` at the end
- Make sure the URL ends with `/exec`
- Don't change anything else in the file

---

## 🚀 After Updating

1. Save the file
2. Test your form
3. Check that data appears in your Google Sheet
4. Done! ✅

---

**For complete setup instructions, see:** `FINAL_SETUP_STEPS.md`
