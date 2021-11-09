class CarCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  static USD_EUR = 1.16;

  currConverted = (curr, amount) => {
    let convertedPrice;
    let pricePlaceHolder = "";
    switch (curr) {
      case "$":
        convertedPrice = amount * CarCardComponent.USD_EUR;
        pricePlaceHolder = `${convertedPrice} € `;
        break;
      case "€":
        return (pricePlaceHolder = `${amount} €`);
    }
    return `<div>
        <span>${pricePlaceHolder}</span>
    </div>`;
  };

  init = () => {
    const { brand, model, year, fuelTypes, price, imgSrc, onDelete } =
      this.props;

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
        <li>Price:${this.currConverted(price.currency, price.amount)}</li>
     </ul>
      <img src="${imgSrc}" />
    </div>
    <button class="btn btn-sm btn-danger w-25 del-btn"> X </button>
  </div>`;

    this.htmlElement
      .querySelector(".del-btn")
      .addEventListener("click", onDelete);
  };
}
