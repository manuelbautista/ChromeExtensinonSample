window.onload(testMessage());

//sending from content to background
function testMessage() {
    chrome.runtime.sendMessage(
        {payload: 'Hello from a content'},
        ()=> console.log(2+2));
}

chrome.runtime.onMessage.addListener((request, sender, response)=> {
    console.log(request);
    console.log(sender);
    console.log(response());
    })