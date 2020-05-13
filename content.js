window.onload = () => {
    const button = document.createElement("button");
    button.id = "darkModeButton";
    button.textContent = "Do it Dark";

    const input = document.createElement('input');
    input.type = "checkbox";
    input.id = "darkSetting";

    document.querySelector("#end").prepend(button, input, 'Auto Apply?');

    button.addEventListener('click', () => enableDarkMode());
    input.addEventListener('click', ()=> storeSetting());

    checkSetting();
}
function checkSetting() {
    chrome.storage.local.get(['enabled', 'color'], (result)=> {
        var isEnable = result.enabled;
        var color = result.color;
        console.log(color);
        document.getElementById('darkSetting').checked = result.enabled;

        if(result.enabled) {
            enableDarkMode();
        }
    })
}
function storeSetting() {    
    const isEnabled = document.getElementById('darkSetting').checked;
    const setting = {enabled: isEnabled, color: 'purple'};
    
    chrome.storage.local.set(setting,()=>{
        console.log('stored', setting);
    })
}

function enableDarkMode() {
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor = "black";
}

//reciviendo desde el popup.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "start" ) {
       start();
      }
    }
  );

  function start(){
      alert("started!!!");
  }