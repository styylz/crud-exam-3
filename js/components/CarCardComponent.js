class CarCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init = () => {
    const { brand, model, year, fuelTypes, price, imgSrc } = this.props;

    this.htmlElement = document.createElement("div");
    this.htmlElement.className = "card shadow position-relative";
    this.htmlElement.innerHTML = `
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">${brand}</h5>
      <ul>
        <li>${model}</li>
        <li>${year}</li>
        <li>${fuelTypes}</li>
        <li>${price.amount}</li>
     </ul>
      <img src="${imgSrc}" />
    </div>
  </div>`;
  };
}
