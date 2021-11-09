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
    setTimeout(this.getCars(), 2000);

    this.render();
  };

  render = () => {
    if (this.state.cars.length === 0) {
      this.htmlElement.innerHTML = `<div class ="text-center">
      <img src ="assets/loading.gif" /> </div>`;
    } else {
      this.htmlElement.innerHTML = ``;
      const cars = this.state.cars
        .map(
          ({ id, ...carsProps }) =>
            new CarCardComponent({
              ...carsProps,
              //   onDelete: () => this.deleteCar(id)
            })
        )
        .map((x) => x.htmlElement);

      this.htmlElement.append(...cars);
    }
  };
}
