class CarGridComponent {
  constructor() {
    this.htmlElement = document.createElement("article");
    this.state = {
      cars: [],
    };
    this.init();
  }

  init = () => {
    this.htmlElement = document.createElement("article");
    this.htmlElement.className = "row g-3";
  };
}
