# Privacy Policy for StealthGeo

**Last Updated: February 4, 2026**

## Introduction

StealthGeo ("we", "our", or "the extension") is committed to protecting your privacy. This Privacy Policy explains how our Chrome extension handles information when you use our location spoofing service.

## Information We Collect

### Information We DO NOT Collect

StealthGeo is designed with privacy as a core principle. **We do not collect, store, transmit, or share any personal information or user data.** Specifically:

- ❌ We do NOT collect your browsing history
- ❌ We do NOT collect your real geolocation data
- ❌ We do NOT collect personally identifiable information (PII)
- ❌ We do NOT track your online activity
- ❌ We do NOT use analytics or tracking services
- ❌ We do NOT share any data with third parties
- ❌ We do NOT store data on remote servers

### Information Stored Locally

The extension stores the following information **locally on your device only** using Chrome's storage API:

1. **Saved Location Preferences**
   - Latitude and longitude coordinates you choose to spoof
   - Location names/labels you create
   - Timezone settings
   - Locale preferences

2. **Extension Settings**
   - User interface preferences
   - Feature toggles and configuration

**Important:** All data is stored locally in your browser using Chrome's `chrome.storage.local` API. This data:
- Never leaves your device
- Is not transmitted to any server
- Is not accessible to us or any third party
- Can be cleared at any time by removing the extension

## How We Use Permissions

StealthGeo requires certain permissions to function. Here's exactly why each permission is needed:

### Required Permissions

| Permission | Purpose | Data Access |
|------------|---------|-------------|
| `debugger` | Required to use Chrome DevTools Protocol for advanced location spoofing that bypasses standard browser APIs | No data collected |
| `geolocation` | Required to override the browser's Geolocation API with your chosen coordinates | No real location data collected |
| `storage` | Required to save your location preferences and settings locally on your device | Data stays on your device only |
| `privacy` | Required to modify privacy-related browser settings for effective location spoofing | No data collected |
| `<all_urls>` | Required to inject location spoofing scripts on websites you visit | No browsing data collected |

### How Location Spoofing Works

1. You select a location (coordinates or address) in the extension
2. The extension uses the Chrome DevTools Protocol to override location data
3. Websites receive your chosen fake location instead of your real location
4. **Your real location is never accessed, collected, or transmitted**

## Data Storage and Security

- **Local Storage Only:** All data is stored using Chrome's secure local storage API
- **No Cloud Sync:** We do not sync your data to any cloud service
- **No Remote Servers:** The extension operates entirely within your browser
- **No Network Requests:** The extension does not make any network requests to external servers

## Third-Party Services

StealthGeo does **not** use any third-party services, including:
- No analytics services (e.g., Google Analytics)
- No advertising networks
- No crash reporting services
- No external APIs or servers

## Data Sharing

We do not share any data with third parties because **we do not collect any data in the first place.**

## Children's Privacy

StealthGeo does not knowingly collect any information from anyone, including children under the age of 13. The extension is designed to be privacy-preserving for all users.

## Your Rights and Controls

You have complete control over your data:

### View Your Data
All stored data is in Chrome's local storage. To view it:
1. Open Chrome DevTools (F12)
2. Go to Application → Storage → Local Storage
3. Find the StealthGeo extension

### Delete Your Data
You can delete all extension data by:
1. Removing the extension from Chrome
2. Clearing extension data in `chrome://extensions/`

### Export Your Data
Since all data is stored locally, you can:
1. Access it through Chrome DevTools
2. Export saved locations manually from the extension interface

## Changes to Location Spoofing

The extension modifies how websites perceive your location by:
- Overriding the Geolocation API
- Modifying timezone information
- Adjusting locale settings

This is done **entirely locally** within your browser. No data is sent to external servers.

## Updates to This Privacy Policy

We may update this Privacy Policy from time to time. When we do:
- The "Last Updated" date at the top will be changed
- Significant changes will be communicated through the extension's update notes
- Continued use of the extension after changes constitutes acceptance of the new policy

## Compliance

This privacy policy complies with:
- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Other applicable privacy regulations

## Open Source

StealthGeo is open source. You can review our code to verify our privacy claims:
- **GitHub Repository:** [https://github.com/RahulBisht/location-spoofer](https://github.com/RahulBisht/location-spoofer)
- **Source Code:** All code is publicly available for audit

## Contact Information

If you have questions about this Privacy Policy or the extension's privacy practices:

- **GitHub Issues:** [https://github.com/RahulBisht/location-spoofer/issues](https://github.com/RahulBisht/location-spoofer/issues)
- **Email:** [Your contact email here]

## Legal Disclaimer

StealthGeo is provided "as is" for legitimate purposes such as:
- Testing location-based features during development
- Privacy protection
- Accessing geo-restricted content you have rights to access

**Users are responsible for ensuring their use of location spoofing complies with:**
- Terms of service of websites they visit
- Local laws and regulations
- Applicable privacy and data protection laws

We do not endorse or encourage any illegal or unauthorized use of this extension.

## Summary

**In Plain English:**
- ✅ We don't collect any data about you
- ✅ Everything stays on your device
- ✅ No tracking, no analytics, no third parties
- ✅ You can delete all data by removing the extension
- ✅ Open source code you can verify yourself

---

**Your privacy is our priority. If you have any concerns, please contact us.**
