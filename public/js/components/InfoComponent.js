import Component from "./Component.js";

class InfoComponent extends Component {
  totalMarkedGentlemen;

  constructor(parentElement, htmlTag, totalMarkedGentlemen) {
    super(parentElement, "info", htmlTag);

    this.totalMarkedGentlemen = totalMarkedGentlemen;
    this.generateHTML();
  }

  generateHTML() {
    this.element.textContent = `${this.totalMarkedGentlemen} señores que te apuntan con el dedo marcados`;
  }
}

export default InfoComponent;
