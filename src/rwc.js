import { LitElement, html } from 'lit';
import './styles.css';
const empData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  // Add more data as needed
];

class RWCElement extends LitElement {

  render() {
    return html`<div id="table-container"></div>`;
  }

  firstUpdated() {
      import('remoteApp/TableComponent').then(() => {
        const tableComponent = document.createElement('table-web-component');
        tableComponent.data = empData;
        tableComponent.title = 'React Table As Webcomponent';
        this.shadowRoot.getElementById('table-container').appendChild(tableComponent);
      });
  }
}

customElements.define('rwc-element', RWCElement);
