import gentlemenAPI from "../../data/gentlemen.js";
import ButtonComponent from "./ButtonComponent.js";
import Component from "./Component.js";
import GentlemanComponent from "./GentlemanComponent.js";
import InfoComponent from "./InfoComponent.js";

class PageComponent extends Component {
  gentlemen = gentlemenAPI;

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
        </ul>
      </main>
    </div>
    `;

    this.renderControlsContainer();
    this.renderGentlemenList();
  }

  renderControlsContainer() {
    this.renderInfoComponent();
    this.renderButtonComponent();
  }

  renderButtonComponent() {
    const controls = this.element.querySelector(".controls");
    controls.querySelector(".button")?.remove();
    new ButtonComponent(controls, "button button--select", "Marcar todos", () =>
      this.selectAllGentlemen()
    );
  }

  renderInfoComponent() {
    const controls = this.element.querySelector(".controls");
    controls.querySelector(".info")?.remove();
    const totalSelectedGentlemen = this.gentlemen.filter(
      (gentleman) => gentleman.selected
    ).length;

    new InfoComponent(controls, "p", totalSelectedGentlemen);
  }

  renderGentlemenList() {
    const gentlemenContainer = this.element.querySelector(".gentlemen");
    gentlemenContainer.innerHTML = "";
    this.gentlemen.forEach((gentleman) => {
      new GentlemanComponent(gentlemenContainer, "li", gentleman, () =>
        this.toggleGentleman(gentleman.id)
      );
    });
  }

  toggleGentleman(id) {
    const gentlemanFound = this.gentlemen.find(
      (gentleman) => gentleman.id === id
    );
    gentlemanFound.selected = !gentlemanFound.selected;
    this.renderGentlemenList();
    this.renderControlsContainer();
  }

  selectAllGentlemen() {
    this.gentlemen = this.gentlemen.map((gentleman) => ({
      ...gentleman,
      selected: true,
    }));
    this.renderGentlemenList();
    this.renderControlsContainer();
  }
}

export default PageComponent;
