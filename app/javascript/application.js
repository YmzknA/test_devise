// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { setupDropdownToggle } from './floating_button'
import { setupPostsShowDelay } from './posts_show_delay'
import './window_reload'
import { mobileButtonToggleHidden } from "./mobile_button_toggle_hidden"

document.addEventListener("turbo:load", function () {
  setupDropdownToggle("main-button", "dropdown-buttons");
  setupPostsShowDelay("#login-histories .animate-ease_in");
  mobileButtonToggleHidden();
});