import { cellsStorage } from '../variables/constants.js';
import { syncSaveKey } from '../savingsLoadings/storage.js';
import { refreshContainer } from '../savingsLoadings/refreshContainer.js';


// function dropped(e) {
//   const id = e.dataTransfer.getData('text/plain');
//   const droppedIndex = cellsStorage.reduce(
//     (tgId, cell, i) => (cell.id == e.target.dataset.id) ? i : tgId
//   );
//   const cells = moveElWithID([...cellsStorage], droppedIndex, id);
//   cellsStorage.splice(0, cellsStorage.length, ...cells);

//   syncSaveKey(cellsStorage);
//   refreshContainer();
//   console.log(cellsStorage);
// }



// function moveElWithID(arr, newIndex, id) {
//   return arr.reduce((arr, el, oldIndex) => {
//     if (el.id == id) {
//       arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
//     }
//     return arr;
//   }, arr);
// }



function dropped(e) {
  const draggedId = e.dataTransfer.getData('text/plain');
  const draggedIndex = indexFromId(cellsStorage, draggedId);
  const droppedIndex = indexFromId(cellsStorage, e.target.dataset.id);
  const cells = swapEl(cellsStorage, {
    el1: cellsStorage[draggedIndex],
    el2: cellsStorage[droppedIndex],
    i1: draggedIndex,
    i2: droppedIndex
  });

  cellsStorage.splice(0, cellsStorage.length, ...cells);
  syncSaveKey(cellsStorage);
  refreshContainer();
}

function swapEl(arr, { el1, el2, i1, i2 }) {
  return [...arr].map((el, i) => {
    if (i === i1) return arr[i2];
    else if (i === i2) return arr[i1];
    return el;
  });
}

function indexFromId(arr, id) {
  return arr.findIndex((el) => el.id == id);
}





export {
  dropped
}