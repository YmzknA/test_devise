export function setupDarkmodeToggle() {
  // テーマ切り替えボタンの設定
  const themeToggle = document.getElementsByClassName('theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') document.documentElement.classList.add('dark');

  if (themeToggle) {
    Array.prototype.forEach.call(themeToggle, (toggle) => {
      toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
          localStorage.setItem('theme', 'dark');
          return;
        }
        localStorage.setItem('theme', 'light');
      });
    });
  }
}
