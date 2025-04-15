import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="title-update"
export default class extends Controller {
  static targets = ["title"]

  connect() {
    console.log("TitleUpdateController connected")

    this.element.addEventListener("turbo:load", this.updateTitle.bind(this))
  }

  updateTitle() {
    const titleElement = document.querySelector("[data-title]")
    const newTitle = titleElement?.dataset?.title
    console.log("Updating title to:", newTitle)

    if (newTitle) {
      document.title = newTitle
      console.log("Title updated to:", document.title)
    }else {
      document.title = "本日も！"
    }
  }
}
