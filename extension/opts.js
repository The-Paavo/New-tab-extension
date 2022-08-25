const addressInput = document.getElementById('addr');
const focusCheckBox = document.getElementById('focus');
const saveButton = document.getElementById('save');
const savedAddrSpan = document.getElementById('savedAddr');

document.documentElement.lang = chrome.i18n.getMessage('htmlLang');
document.title = chrome.i18n.getMessage('extensionName');
saveButton.value = chrome.i18n.getMessage('saveBtnText');

for (const el of ['extensionName', 'extensionDesc', 'urlDesc', 'focusDesc', 'savedAddrDesc']) {
    document.getElementById(el).textContent = chrome.i18n.getMessage(el);
}

saveButton.addEventListener('click', () => setData());
window.addEventListener('beforeunload', () => setData());
chrome.storage.onChanged.addListener(() => getData());

function getData() {
    chrome.storage.local.get({ 'address': '', 'focus': true }, (data) => {
        addressInput.value = savedAddrSpan.textContent = data.address;
        focusCheckBox.checked = data.focus;
    });
}

function setData() {
    chrome.storage.local.set({ 'address': addressInput.value.trim(), 'focus': focusCheckBox.checked });
}

getData();
