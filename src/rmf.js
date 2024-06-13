import React from 'react';
import ReactDOM from 'react-dom';
import { LitElement, html } from 'lit';
import './styles.css';

const empData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  // Add more data as needed
];

class RMFElement extends LitElement {
  render() {
    return html`
      <div id="react-microfrontend"></div>
    `;
  }

  firstUpdated() {
    // Dynamically load the React microfrontend
    import('remoteApp/Table').then((module) => {
      const ReactTable = module.default;
      const container = this.shadowRoot.getElementById('react-microfrontend');
      ReactDOM.render(<ReactTable data={empData}/>, container);
    });
  }
}

customElements.define('rmf-element', RMFElement);
