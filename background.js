chrome.runtime.onInstalled.addListener(() => {
    console.log('Installed');
});
//for later
chrome.bookmarks.onCreated.addListener(()=> {
    alert('bookmark saved!');
})