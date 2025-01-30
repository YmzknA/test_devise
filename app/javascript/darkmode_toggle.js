export function setupDarkmodeToggle() {
  // テーマ切り替えボタンの設定
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });
  }
}
