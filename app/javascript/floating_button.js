export function setupDropdownToggle(mainButtonId, dropdownId) {
  const mainButton = document.getElementById(mainButtonId);
  const dropdownButtons = document.getElementById(dropdownId);

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

    document.addEventListener("click", (event) => {
      if (!mainButton.contains(event.target) && !dropdownButtons.contains(event.target)) {
        dropdownButtons.classList.add("hidden");
        dropdownButtons.classList.remove("animate-pop-up");
      }
    });
  }
}