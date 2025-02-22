export function setupSettingShow() {
  const settingButton = document.getElementsByClassName('setting-button');
  const setting = document.querySelector('#setting');

  if (settingButton) {
    Array.prototype.forEach.call(settingButton, (toggle) => {
      toggle.addEventListener('click', (event) => {
        if (event.target.closest('#out-setting-button') === null) {
          setting.classList.toggle('hidden');
        }
      });
    });
  }
}
