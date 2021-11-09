class CarGridComponent {
  constructor() {
    this.htmlElement = document.createElement("article");
    this.state = {
      cars: [],
    };
    this.init();
  }

  getCars = () => API.fetchCars(this.saveCars, this.showError);

  saveCars = (cars) => {
    this.state.cars = cars;

    this.render();
  };

  showError = (error) => {
    alert(error);
  };

  init = () => {
    this.getCars();

    this.render();
  };

  render = () => {
    if (this.state.cars.length === 0) {
      this.htmlElement.innerHTML = `siunčiama...`;
    } else {
      this.htmlElement.innerHTML = `parsiusta`;
    }
  };
}
