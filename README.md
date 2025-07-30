# LinkedIn Profile Scraper Chrome Extension + NodeJS-Express-Sequelize Backend

This project is a full-stack application that consists of:

- A **Chrome extension** to scrape LinkedIn profile data.
- A **Node.js + Express + Sequelize** backend server to store the scraped data into an SQLite database.

---

## 📁 Folder Structure

```bash
Extension_Assignment/
│
├── client/ # Chrome Extension code
│ ├── popup.html # UI for the extension
│ ├── popup.js # Main logic to open profiles and send data
│ ├── background.js # Background script handling scraping
│ ├── style.css # Custom styling
│ └── manifest.json # Extension configuration
│
├── server/ # Backend code
│ ├── config/
│ │ └── config.json # DB configuration
│ ├── models/
│ │ ├── index.js # Sequelize initialization
│ │ └── profile.js # Profile model schema
│ ├── database.sqlite # SQLite DB file (auto-created)
│ └── app.js # Express backend server
| └── .env
| └── package.json
