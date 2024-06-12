import React from 'react';
import ReactDOM from 'react-dom';
import { LitElement, html } from 'lit';
import './styles.css';

class LitHost extends LitElement {
  constructor() {
    super();
    this.data = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      // Add more data as needed
    ];
  }

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
      ReactDOM.render(<ReactTable data={this.data}/>, container);
    });
  }
}

customElements.define('lit-host', LitHost);
