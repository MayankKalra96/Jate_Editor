const installerButton = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    installerButton.classList.toggle('hidden', false);
});
installerButton.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    installerButton.classList.toggle('hidden', true);
});
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
}); 