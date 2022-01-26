import Component from "./Component.js";

class GentlemanComponent extends Component {
  gentleman;

  actionOnClick;

  constructor(parentElement, htmlTag, gentleman, actionOnClick) {
    super(parentElement, "gentleman", htmlTag);

    this.gentleman = gentleman;
    this.actionOnClick = actionOnClick;

    this.generateHTML();

    this.addListeners();
  }

  getInitial() {
    const { name } = this.gentleman;
    const nameParts = name.split(" ");
    if (nameParts[0].length < 3) {
      return nameParts[1].charAt(0).toUpperCase();
    }
    return nameParts[0].charAt(0).toUpperCase();
  }

  generateHTML() {
    this.element.innerHTML = `
    <div class="gentleman__avatar-container">
              <img
                class="gentleman__avatar"
                src="img/${this.gentleman.picture}"
                alt="${this.gentleman.name} apuntándote con el dedo"
              />
              <span class="gentleman__initial">${this.getInitial()}</span>
            </div>
            <div class="gentleman__data-container">
              <h2 class="gentleman__name">${this.gentleman.name}</h2>
              <ul class="gentleman__data-list">
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Profesión:</span>
                  ${this.gentleman.profession}
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Estado:</span> ${
                    this.gentleman.status
                  }
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Twitter:</span> ${
                    this.gentleman.twitter
                  }
                </li>
              </ul>
            </div>
            <i class="icon gentleman__icon fas fa-check"></i>
    `;

    if (this.gentleman.selected) {
      this.element.classList.add("selected");
    } else {
      this.element.classList.remove("selected");
    }
  }

  addListeners() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default GentlemanComponent;
