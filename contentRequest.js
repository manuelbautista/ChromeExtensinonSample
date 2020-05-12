const requestSender = new XMLHttpRequest();


requestSender.onreadystatechange = apiHandler;

function apiHandler(response) {
    if(requestSender.readyState == 4 && requestSender.status == 200){
        console.log(response.target.response);
    }
}

//we can handler this on a button click for example
//si quieres disparar mas de un get, pon la variable false
requestSender.open('GET', 'https://api.github.com/users/peter',true);
requestSender.send();