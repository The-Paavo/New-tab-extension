chrome.storage.local.get({ 'address': '', 'focus': true }, (data) => {

    if (data.address === '') {
        chrome.runtime.openOptionsPage();
        return;
    }

    if (data.focus === true) {
        chrome.tabs.getCurrent((cTab) => chrome.tabs.update(cTab.id, { 'url': data.address, 'highlighted': true }));
        return;
    }

    window.location.href = data.address;

});
