//  Injects a JS file into a page so that the functions and variables are available
//  from the page. In this case, faceeditor.js is injected
function injectJs(link) {
    var scr = document.createElement('script');
    scr.type = "text/javascript";
    scr.src = link;
    document.getElementsByTagName('head')[0].appendChild(scr);
}

injectJs(chrome.extension.getURL('faceeditor.js'));
