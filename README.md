# LinkedIn Profile Scraper Chrome Extension + NodeJS-Express-Sequelize Backend

This project is a full-stack application that consists of:

- A **Chrome extension** to scrape LinkedIn profile data.
- A **Node.js + Express + Sequelize** backend server to store the scraped data into an SQLite database.

---

### Chrome Extension Setup

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (top right corner)
3. Click **Load unpacked** and select the `client` folder inside this project.
4. Open LinkedIn and **log in manually**.
5. Click the extension icon and hit the **Scrape** button.
6. The extension will open LinkedIn profiles one by one, scrape the data, and send it to the backend.

---

## Scraped Data Includes

- Name  
- Current URL  
- Location  
- About  
- Bio/Headline  
- Follower Count  
- Connection Count

---

## Database

This project uses **SQLite** for easier table viewing and management during demo.  
You can inspect the `database.sqlite` file using any SQLite browser.

---

## Tech Stack

- **Frontend:** Chrome Extension (HTML + TailwindCSS + JS)  
- **Backend:** NodeJS, Express  
- **ORM:** Sequelize  
- **Database:** SQLite

---

### Server Setup

  1. Navigate to the server folder:
  
     ```bash
     cd server

  2. Install dependencies:
  
     ```bash
     npm install

  3. Start the backend server:
  
     ```bash
     npx nodemon app.js
     

## Folder Structure

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
