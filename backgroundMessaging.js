chrome.bookmarks.onMoved.addListener(()=> {
    //alert('Bookmark moved')
})
//receiving form content
chrome.runtime.onMessage.addListener((request, sender, response)=> {
console.log(response());
})
//sending to content
chrome.bookmarks.onMoved.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs=> {
        chrome.tabs.sendMessage(tabs[0].id, {name: 'Tomas'})
    })
})
