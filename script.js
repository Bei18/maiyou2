const APP_CONFIG = {
  appName: "麦友",
  appDesc: "免费使用的聊天软件",
  appIcon: "./app-icon-512.png",
  downloadUrl: "./maiyou.v1.1.5.apk",
  version: "v1.1.5",
  pageTitle: "麦友 - 下载"
};

function isWeChat() {
  return /micromessenger/i.test(navigator.userAgent);
}

function initPage() {
  document.title = APP_CONFIG.pageTitle;

  const appIcon = document.getElementById("appIcon");
  if (appIcon) appIcon.src = APP_CONFIG.appIcon;

  const appName = document.getElementById("appName");
  if (appName) appName.textContent = APP_CONFIG.appName;

  const appDesc = document.getElementById("appDesc");
  if (appDesc) appDesc.textContent = APP_CONFIG.appDesc;

  const downloadBtn = document.getElementById("downloadBtn");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function (e) {
      e.preventDefault();
      
      if (isWeChat()) {
        const overlay = document.getElementById("wechatOverlay");
        if (overlay) overlay.style.display = "block";
      } else {
        // 浏览器环境下，点击后没有任何反应，不触发下载
      }
    });
  }

  const appVersion = document.getElementById("appVersion");
  if (appVersion) appVersion.textContent = APP_CONFIG.version;

  if (isWeChat()) {
    const overlay = document.getElementById("wechatOverlay");
    if (overlay) overlay.style.display = "block";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}
