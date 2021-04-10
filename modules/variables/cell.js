import {
  nameInput,
  linkInput
} from './constants.js';


export function Cell(name, link, htmlStorage) {
  this.name = name;
  this.link = link;
  this.id = Math.round(Math.random() * 10 ** 10);
  this.createElement(htmlStorage);
};

Cell.prototype.editCell = function() {
  const anchor = this.element.querySelector('a');
  this.name = nameInput.value;
  this.link = linkInput.value;
  anchor.href = linkInput.value;
  anchor.textContent = nameInput.value;
};

Cell.prototype.createElement = function(htmlStorage) {
  const html = `
    <div class="individual-cell-container">
      <div class="cell">
        <a href="${this.link}" class="link" draggable="true" target="_blank" data-id="${this.id}">${this.name}</a>
      </div>
    </div>
  `;
  htmlStorage.insertAdjacentHTML('beforeend', html);
  this.element = htmlStorage.lastElementChild;
};