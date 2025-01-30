// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { setupDropdownToggle } from './floating_button'
import { setupPostsShowDelay } from './posts_show_delay'
import './window_reload'
import { mobileButtonToggleHidden } from "./mobile_button_toggle_hidden"
import { setupDarkmodeToggle } from "./darkmode_toggle"

document.addEventListener("turbo:load", function() {
  setupDropdownToggle("main-button", "dropdown-buttons");
  setupPostsShowDelay("#login-histories .animate-ease_in");
  mobileButtonToggleHidden();
  setupDarkmodeToggle();
});


document.addEventListener('DOMContentLoaded', () => {
  // システムの設定を確認
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }
});
