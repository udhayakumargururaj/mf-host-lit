import { LitElement, html, css } from 'lit';

import './rmf.js';
import './rwc.js';
import './rwcp.js';

class TabContainer extends LitElement {
  static styles = css`
    .tabs {
      display: flex;
      border-bottom: 2px solid #ccc;
    }
    .tab {
      padding: 10px 20px;
      cursor: pointer;
      border: 1px solid #fff;
      border-bottom: none;
      background: #f4f4f4;
      margin-right: 2px;
    }
    .tab[selected] {
      background: #1D24CA;
      color: white;
    }
    .content {
      padding: 20px;
      border: 1px solid #ccc;
    }
  `;

  static properties = {
    selectedTab: { type: Number },
  };

  constructor() {
    super();
    this.selectedTab = 0;
  }

  render() {
    return html`
      <div class="tabs">
        <div class="tab" ?selected="${this.selectedTab === 0}" @click="${() => this.selectTab(0)}">React - MF</div>
        <div class="tab" ?selected="${this.selectedTab === 1}" @click="${() => this.selectTab(1)}">WebComponent - MF </div>
        <div class="tab" ?selected="${this.selectedTab === 2}" @click="${() => this.selectTab(2)}">WebComponent - Package</div>
      </div>
      <div class="content">
        ${this.selectedTab === 0 ? html`<rmf-element></rmf-element>` : ''}
        ${this.selectedTab === 1 ? html`<rwc-element></rwc-element>` : ''}
        ${this.selectedTab === 2 ? html`<rwcp-element></rwcp-element>` : ''}
      </div>
    `;
  }

  selectTab(index) {
    this.selectedTab = index;
  }
}

customElements.define('lit-host', TabContainer);
