var input = document.querySelector("#input");
var btntranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#bn-output");

// URL
 //   var serverURL = "https://reqres.in/api/users"  + "/" + input.value;
 //    json.data.first_name +" "+ json.data.last_name;

function translate (){
      var serverURL = "https://api.funtranslations.com/translate/minion.json" +  "?" + "text=" + input.value ;
    fetch(serverURL)  
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
         output.innerText = translatedText;})
}

btntranslate.addEventListener("click",translate)


/* var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

 //var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"+"?" + "text=" + txtInput.innerHTML;

 
 
 function errorHandler(error) {
     console.log("error occured", error);
     alert("something wrong with server! try again after some time")
    }
    
    
    function clickHandler() {
    var serverURL = "https://api.funtranslations.com/translate/minion.json"+"?" + "text=" + txtInput.value;
                                                                        //var serverURL = "https://reqres.in/api/users"  + "/" + txtInput.value; 
    // calling server for processing
        fetch(serverURL)
        .then(response => response.json())                                 
        .then(json => {
            var translatedText =  json.contents.translated;             //json.data.first_name +" "+ json.data.last_name;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler) */
