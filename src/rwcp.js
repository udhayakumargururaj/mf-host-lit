import { LitElement, html, css } from 'lit';
import 'remote-app/dist/main.js'; // Importing the React Web Component

class MyLitApp extends LitElement {
  render() {
    return html`
    <table-web-component></table-web-component>
    `;
  }
  firstUpdated() {
    // Set properties directly on the custom element
    const tableComponent = this.shadowRoot.querySelector('table-web-component');
    tableComponent.title = 'React Table As Package';
    tableComponent.data = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ];
  }
}

customElements.define('rwcp-element', MyLitApp);
