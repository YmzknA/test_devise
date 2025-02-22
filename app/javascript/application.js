// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { setupDropdownToggle } from './floating_button'
import { setupPostsShowDelay } from './posts_show_delay'
import './window_reload'
import { setmobileButtonToggleHidden } from "./mobile_button_toggle_hidden"
import { setupDarkmodeToggle } from "./darkmode_toggle"
import { setupSettingShow } from "./setting_button_show"

document.addEventListener("turbo:load", function() {
  setupDropdownToggle();
  setupPostsShowDelay();
  setmobileButtonToggleHidden();
  setupDarkmodeToggle();
  setupSettingShow();
});


document.addEventListener('DOMContentLoaded', () => {
  // システムの設定を確認
  // 6:00 - 18:00 はライトモード
  // 18:00 - 6:00 はダークモード
  // 日本時間に変換して判定
  // html に dark または light クラスを追加
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    return;
  }
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    return;
  }

  const html = document.querySelector('html');
  const now = new Date();
  const hours = now.getHours();
  const darkMode = hours < 6 || hours >= 18;
  html.classList.add(darkMode ? 'dark' : 'light');

});
