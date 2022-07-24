const installBtn = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (e) => {
  window.deferredPrompt = e;
  installBtn.classList.toggle('hidden', false);
});

installBtn.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  installBtn.classList.toggle('hidden', true);
  promptEvent.prompt();
  window.deferredPrompt = null;
});

window.addEventListener('appinstalled', (e) => {
  window.deferredPrompt = null;
});