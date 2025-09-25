// Extended PranX UI Bundle: Additional Components & Features

// Enhanced Tooltip with positioning support
class PranxTooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    this.tooltipText = this.getAttribute('text') || 'Tooltip info';
    this.position = this.getAttribute('position') || 'top';

    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'tooltip-wrapper');
    wrapper.setAttribute('tabindex', '0');

    const slot = document.createElement('slot');
    wrapper.appendChild(slot);

    const tooltip = document.createElement('span');
    tooltip.setAttribute('class', 'tooltip-text');
    tooltip.textContent = this.tooltipText;

    this.shadowRoot.appendChild(wrapper);
    this.shadowRoot.appendChild(tooltip);

    const style = document.createElement('style');
    style.textContent = `
      .tooltip-wrapper {
        position: relative;
        cursor: help;
        display: inline-block;
      }
      .tooltip-text {
        visibility: hidden;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        padding: 5px 8px;
        position: absolute;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s;
        white-space: nowrap;
        font-size: 14px;
        bottom: 125%; /* default top */
        left: 50%;
        transform: translateX(-50%);
      }
      .tooltip-wrapper:hover + .tooltip-text,
      .tooltip-wrapper:focus + .tooltip-text {
        visibility: visible;
        opacity: 1;
      }

      /* Arrows for each position */
      .tooltip-text::after {
        content: "";
        position: absolute;
        border-width: 5px;
        border-style: solid;
      }
      .top.tooltip-text::after {
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-color: #333 transparent transparent transparent;
      }
      .bottom.tooltip-text {
        top: auto;
        bottom: 125%;
      }
      .bottom.tooltip-text::after {
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-color: transparent transparent #333 transparent;
      }
      .left.tooltip-text {
        bottom: auto;
        top: 50%;
        right: 100%;
        margin-top: -7px;
        left: auto;
        transform: none;
      }
      .left.tooltip-text::after {
        top: 50%;
        left: 100%;
        margin-top: -5px;
        border-color: transparent transparent transparent #333;
      }
      .right.tooltip-text {
        bottom: auto;
        top: 50%;
        left: 100%;
        margin-top: -7px;
        transform: none;
      }
      .right.tooltip-text::after {
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-color: transparent #333 transparent transparent;
      }
    `;
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    const tooltipEl = this.shadowRoot.querySelector('.tooltip-text');
    tooltipEl.classList.add(this.position);
  }
}
customElements.define('pranx-tooltip', PranxTooltip);

// Additional Loader Variants
class PranxLoader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.variant = this.getAttribute('variant') || 'spinner'; // spinner or dots

    const container = document.createElement('div');
    container.className = 'loader-container';

    const style = document.createElement('style');
    let innerHTML = '';

    if(this.variant === 'dots'){
      innerHTML = `
        <div class="dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      `;
      style.textContent = `
        .dots {
          display: flex;
          gap: 6px;
          justify-content: center;
        }
        .dot {
          width: 10px;
          height: 10px;
          background: var(--primary-color, #007bff);
          border-radius: 50%;
          animation: blink 1.4s infinite ease-in-out both;
        }
        .dot:nth-child(1) { animation-delay: -0.32s; }
        .dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
      `;
    } else {
      innerHTML = `<div class="spinner"></div>`;
      style.textContent = `
        .spinner {
          border: 6px solid #f3f3f3;
          border-top: 6px solid var(--primary-color, #007bff);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          animation: spin 1s linear infinite;
          margin: auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `;
    }
    container.innerHTML = innerHTML;
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
  }
}
customElements.define('pranx-loader', PranxLoader);

// Pagination: Add page numbers and jump to page input
class PranxPagination extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.currentPage = Number(this.getAttribute('current')) || 1;
    this.totalPages = Number(this.getAttribute('total')) || 1;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .pagination {
          display: flex;
          justify-content: center;
          gap: 6px;
          font-family: Arial, sans-serif;
          align-items: center;
        }
        button {
          padding: 6px 12px;
          font-size: 14px;
          border: 1px solid var(--primary-color, #007bff);
          background: white;
          color: var(--primary-color, #007bff);
          border-radius: 4px;
          cursor: pointer;
          user-select: none;
        }
        button:disabled {
          border-color: #ccc;
          color: #ccc;
          cursor: not-allowed;
        }
        input {
          width: 40px;
          font-size: 14px;
          border-radius: 4px;
          border: 1px solid #ccc;
          padding: 4px 6px;
          text-align: center;
          margin-left: 10px;
        }
      </style>
      <div class="pagination">
        <button id="prev" ${this.currentPage === 1?'disabled':''}>Prev</button>
        ${this._getPageButtonsHtml()}
        <button id="next" ${this.currentPage === this.totalPages?'disabled':''}>Next</button>
        <label>Jump to: <input id="jump-input" type="number" min="1" max="${this.totalPages}" value="${this.currentPage}"></label>
      </div>
    `;
    this.shadowRoot.querySelector('#prev').onclick = () => this.changePage(this.currentPage - 1);
    this.shadowRoot.querySelector('#next').onclick = () => this.changePage(this.currentPage + 1);
    this.shadowRoot.querySelector('#jump-input').onchange = e => {
      const val = Number(e.target.value);
      if(val>=1 && val<=this.totalPages) this.changePage(val);
      else e.target.value = this.currentPage;
    };
  }

  _getPageButtonsHtml() {
    let html = '';
    for(let i=1; i<=this.totalPages; i++){
      html += `<button class="page-btn" ${i === this.currentPage?'disabled':''} data-page="${i}">${i}</button>`;
    }
    return html;
  }

  changePage(page) {
    if(page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.render();
    this.dispatchEvent(new CustomEvent('pranx-page-change', { detail: { page: this.currentPage }, bubbles:true, composed:true }));
  }

  static get observedAttributes() {
    return ['current', 'total'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if(name === 'current') this.currentPage = Number(newVal) || 1;
    if(name === 'total') this.totalPages = Number(newVal) || 1;
    this.render();
  }
}
customElements.define('pranx-pagination', PranxPagination);

// Table with sorting support (simple)
class PranxTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.columns = [];
    this.data = [];
    this.sortKey = null;
    this.sortAsc = true;
  }
  connectedCallback() {
    this._loadData();
  }
  _loadData() {
    try {
      this.columns = JSON.parse(this.getAttribute('columns') || '[]');
      this.data = JSON.parse(this.getAttribute('data') || '[]');
    } catch(e){
      this.columns = [];
      this.data = [];
    }
    this.render();
  }
  render() {
    const style = `
      <style>
        table {
          font-family: Arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
          cursor: pointer;
        }
        th {
          background-color: var(--primary-color, #007bff);
          color: white;
          user-select:none;
        }
        th.sort-asc::after {
          content: ' ▲';
        }
        th.sort-desc::after {
          content: ' ▼';
        }
        tr:nth-child(even) {background-color: #f9f9f9;}
      </style>
    `;
    let thead = `<thead><tr>`;
    this.columns.forEach(col => {
      let cls = '';
      if(this.sortKey === col){
        cls = this.sortAsc ? 'sort-asc' : 'sort-desc';
      }
      thead += `<th class="${cls}" data-col="${col}">${col}</th>`;
    });
    thead += `</tr></thead>`;

    let tbody = `<tbody>`;
    const sortedData = this.sortKey ? this._getSortedData() : this.data;
    sortedData.forEach(row => {
      tbody += `<tr>`;
      this.columns.forEach(col => {
        tbody += `<td>${row[col] !== undefined ? row[col] : ''}</td>`;
      });
      tbody += `</tr>`;
    });
    tbody += `</tbody>`;

    this.shadowRoot.innerHTML = `${style}<table>${thead}${tbody}</table>`;

    this.shadowRoot.querySelectorAll('th').forEach(th => {
      th.addEventListener('click', () => this._handleSort(th.getAttribute('data-col')));
    });
  }

  _handleSort(col) {
    if(this.sortKey === col){
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = col;
      this.sortAsc = true;
    }
    this.render();
  }

  _getSortedData() {
    const data = [...this.data];
    data.sort((a,b) => {
      if(a[this.sortKey] > b[this.sortKey]) return this.sortAsc ? 1 : -1;
      if(a[this.sortKey] < b[this.sortKey]) return this.sortAsc ? -1 : 1;
      return 0;
    });
    return data;
  }

  static get observedAttributes() {
    return ['columns', 'data'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if(name === 'columns'){
      try {
        this.columns = JSON.parse(newVal);
      } catch {}
    }
    if(name === 'data'){
      try {
        this.data = JSON.parse(newVal);
      } catch {}
    }
    this.render();
  }
}
customElements.define('pranx-table', PranxTable);

// Form validation: More detailed wrapper for form with simple validation
class PranxForm extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `<slot></slot>`;
  }
  connectedCallback(){
    this.addEventListener('submit', e=>{
      if(!this.checkValidity()){
        e.preventDefault();
        this.reportValidity();
      }
    });
  }
  // Check validity of form inputs
  checkValidity(){
    const inputs = this.querySelectorAll('input, select, textarea');
    return [...inputs].every(input => input.checkValidity());
  }
  // Report validity (basic)
  reportValidity(){
    const inputs = this.querySelectorAll('input, select, textarea');
    for(let input of inputs){
      if(!input.checkValidity()){
        input.focus();
        alert(input.validationMessage);
        return false;
      }
    }
    return true;
  }
}
customElements.define('pranx-form', PranxForm);
