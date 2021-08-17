var input = document.querySelector("#txt-input");
var output = document.querySelector("#txt-output");
var btn = document.querySelector("#btn");

function errorHandler(error) {
  console.log(error);
  alert(`${error}\nTry again later thank you\n(server is not responding)`);
}

function urlConstructor(input) {
  var url =
    "https://api.funtranslations.com/translate/morse.json?text=" + input;
  return encodeURI(url);
}

function clickHandler() {
  var input_txt = input.value;
  fetch(urlConstructor(input_txt))
    .then((Response) => Response.json())
    .then((json) => {
      output.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btn.addEventListener("click", clickHandler);
