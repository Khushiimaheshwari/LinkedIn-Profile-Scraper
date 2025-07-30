chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed and background service worker registered.");
});

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// console.log("Start");
//   if (message.action === "scrape") {
//     console.log("Got scrape message!");
//     chrome.scripting.executeScript({
//       target: { tabId: message.tabId },
//       func: () => {
//         try {
//           const name = document.querySelector('h1')?.innerText || '';
//           const location = document.querySelector('.text-body-small.inline')?.innerText || '';
//           const about = document.querySelector('[id*=about] p')?.innerText || '';
//           const bio = document.querySelector('.text-body-medium.break-words')?.innerText || '';
//           const followerCount = parseInt(document.body.innerText.match(/followers?\s+(\d+)/)?.[1] || 0);
//           const connectionCount = parseInt(document.body.innerText.match(/connections?\s+(\d+)/)?.[1] || 0);

//           const payload = {
//             name,
//             url: window.location.href,
//             location,
//             about,
//             bio,
//             followerCount,
//             connectionCount
//           };

//           console.log("Scraped profile:", payload);

//           fetch("http://localhost:5000/profile", {
//             method: "POST",
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(payload)
//           }).then(res => console.log("Posted to backend"))
//             .catch(err => console.error("Fetch failed:", err));
//         } catch (err) {
//           console.error("Scraping failed", err);
//         }
//       }
//     });
//   }
// });


// function scrapeAndSendProfile() {
//   try {
//     const name = document.querySelector('h1')?.innerText || '';
//     const location = document.querySelector('.text-body-small.inline')?.innerText || '';
//     const about = document.querySelector('[id*=about] p')?.innerText || '';
//     const bio = document.querySelector('.text-body-medium.break-words')?.innerText || '';
//     const followerCount = parseInt(document.body.innerText.match(/followers?\s+(\d+)/)?.[1] || 0);
//     const connectionCount = parseInt(document.body.innerText.match(/connections?\s+(\d+)/)?.[1] || 0);

//     const payload = {
//       name,
//       url: window.location.href,
//       location,
//       about,
//       bio,
//       followerCount,
//       connectionCount
//     };
//     console.log("Scraped profile:", payload);

//     fetch("http://localhost:5000/profile", {
//       method: "POST",
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload)
//     });
//   } catch (err) {
//     console.error("Scraping failed", err);
//   }
// };
