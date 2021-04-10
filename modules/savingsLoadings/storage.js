

function syncSaveKey(value) {
  chrome.storage.sync.set({ key: JSON.stringify(value) });
  return value;
}

function syncLoadKey() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['key'], (res) => resolve(JSON.parse(res.key)));
  });
}


export {
  syncSaveKey,
  syncLoadKey
};