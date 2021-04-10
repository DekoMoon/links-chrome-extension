// import { container } from '../variables/constants.js';

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.dataset.id);
}



export {
  dragStart
}