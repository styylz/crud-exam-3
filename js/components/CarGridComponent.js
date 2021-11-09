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
      this.htmlElement.innerHTML = `<div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
    }
  };
}
