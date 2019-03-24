let request = new XMLHttpRequest();

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function () {
    let jsonFile = request.responseText;

    if((request.status == 200) && (request.readyState == 4)) {
        jsonFile = JSON.parse(jsonFile);
        for (let i = 0; i < jsonFile.data.length; i++) {
            let output = "";
            let movie = jsonFile.data[i];
            console.log(movie);
            if(movie[10] === "Golden Gate Bridge") {
                output += movie[8] + "<br>";
                output += movie[9] + "<br>";
                output += movie[12] + "<br>";
                output += "<br>";
            }
            document.getElementById("result").innerHTML += output;
        }
    }
    
}

request.send();