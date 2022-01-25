import ButtonComponent from "./ButtonComponent.js";
import Component from "./Component.js";
import InfoComponent from "./InfoComponent.js";

class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "page");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <div class="container">
      <header class="main-header">
        <h1 class="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section class="controls">
      </section>
      <main class="main">
        <ul class="gentlemen">
          <li class="gentleman">
            <div class="gentleman__avatar-container">
              <img
                class="gentleman__avatar"
                src="img/fary.jpg"
                alt="El Fary apuntándote con el dedo"
              />
              <span class="gentleman__initial">F</span>
            </div>
            <div class="gentleman__data-container">
              <h2 class="gentleman__name">El Fary</h2>
              <ul class="gentleman__data-list">
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Profesión:</span>
                  Influencer
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Estado:</span> RIP
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Twitter:</span> pendiente
                </li>
              </ul>
            </div>
            <i class="icon gentleman__icon fas fa-check"></i>
          </li>
          <li class="gentleman">
            <div class="gentleman__avatar-container">
              <img
                class="gentleman__avatar"
                src="img/fary.jpg"
                alt="El Fary apuntándote con el dedo"
              />
              <span class="gentleman__initial">F</span>
            </div>
            <div class="gentleman__data-container">
              <h2 class="gentleman__name">El Fary</h2>
              <ul class="gentleman__data-list">
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Profesión:</span>
                  Influencer
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Estado:</span> RIP
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Twitter:</span> pendiente
                </li>
              </ul>
            </div>
            <i class="icon gentleman__icon fas fa-check"></i>
          </li>
          <li class="gentleman">
            <div class="gentleman__avatar-container">
              <img
                class="gentleman__avatar"
                src="img/fary.jpg"
                alt="El Fary apuntándote con el dedo"
              />
              <span class="gentleman__initial">F</span>
            </div>
            <div class="gentleman__data-container">
              <h2 class="gentleman__name">El Fary</h2>
              <ul class="gentleman__data-list">
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Profesión:</span>
                  Influencer
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Estado:</span> RIP
                </li>
                <li class="gentleman__data">
                  <span class="gentleman__data-label">Twitter:</span> pendiente
                </li>
              </ul>
            </div>
            <i class="icon gentleman__icon fas fa-check"></i>
          </li>
        </ul>
      </main>
    </div>
    `;

    const controls = this.element.querySelector(".controls");
    new InfoComponent(controls, "p", 0);
    new ButtonComponent(controls, "button button--select", "Marcar todos");
  }
}

export default PageComponent;
