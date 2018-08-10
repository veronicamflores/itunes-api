import ItunesController from "./app/components/itunes/itunes-controller.js";


class App {
  constructor() {
    this.controllers = {
      itunesCtrl: new ItunesController()
    }
  }
}

window.app = new App()