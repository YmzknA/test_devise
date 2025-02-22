export function setupDarkmodeToggle() {
  // テーマ切り替えボタンの設定
  const themeToggle = document.getElementsByClassName('theme-toggle');
  const deleteThemebutton = document.querySelector('.theme-delete-button');

  const now = new Date();
  const hours = now.getHours();
  const darkMode = hours < 6 || hours >= 18;

  if (themeToggle) {
    Array.prototype.forEach.call(themeToggle, (toggle) => {
      toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
          localStorage.setItem('theme', 'dark');
          return;
        }
        if (!document.documentElement.classList.contains('dark')) {
          localStorage.setItem('theme', 'light');
          return;
        }
      });
    });
  }
  if (deleteThemebutton) {
    deleteThemebutton.addEventListener('click', () => {
      localStorage.setItem('theme', 'none');
      deleteThemebutton.classList.add('rotate-[360deg]', 'transition-transform', 'duration-300');
      setTimeout(() => {
        deleteThemebutton.classList.remove('rotate-[360deg]', 'transition-transform', 'duration-300');
      }, 300);

      if (darkMode === true) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      };

      return;
    });
  }
}
