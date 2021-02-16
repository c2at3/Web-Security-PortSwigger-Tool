var contextMenuItemUrlDecodeEncode = {
    "id": "url",
    "title": "URL Decoder/Encoder"
};
var contextMenuItemBase64DecodeEncode = {
    "id": "base64",
    "title": "Base64 Decoder/Encoder"
};
var contextMenuItemHTMLEscape = {
    "id": "html",
    "title": "HTML Escape/Unescape"
};
var contextMenuItemTextToACII = {
    "id": "ascii",
    "title": "Text to ASCII"
};
chrome.contextMenus.create(contextMenuItemUrlDecodeEncode);
chrome.contextMenus.create(contextMenuItemBase64DecodeEncode);
chrome.contextMenus.create(contextMenuItemHTMLEscape);
chrome.contextMenus.create(contextMenuItemTextToACII);

chrome.contextMenus.onClicked.addListener((clickData) => {
    if (clickData.menuItemId == "url") {
        window.open("https://meyerweb.com/eric/tools/dencoder/");
    }
    if (clickData.menuItemId == "base64") {
        window.open("http://www.utilities-online.info/base64/");
    }
    if (clickData.menuItemId == "html") {
        window.open("https://www.freeformatter.com/html-escape.html");
    }
    if (clickData.menuItemId == "ascii") {
        window.open("https://www.browserling.com/tools/text-to-ascii");
    }
})