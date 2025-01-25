// app/javascript/floating_button.js
document.addEventListener("DOMContentLoaded", function () {
  // 要素の存在を確認してからイベントリスナーを追加
  const mainButton = document.getElementById("main-button");
  const dropdownButtons = document.getElementById("dropdown-buttons");
  
  if (mainButton && dropdownButtons) {
    mainButton.addEventListener("click", (event) => {
      event.stopPropagation();
      dropdownButtons.classList.toggle("hidden");
      
      if (!dropdownButtons.classList.contains("hidden")) {
        dropdownButtons.classList.remove("animate-hide-up");
        dropdownButtons.classList.add("animate-pop-up");
      } else {
        dropdownButtons.classList.remove("animate-pop-up");
        dropdownButtons.classList.add("animate-hide-up");
      }
    });

    // 外側クリックでドロップダウンを閉じる
    document.addEventListener("click", (event) => {
      if (!mainButton.contains(event.target) && !dropdownButtons.contains(event.target)) {
        dropdownButtons.classList.add("hidden");
        dropdownButtons.classList.remove("animate-pop-up");
      }
    });
  }
});