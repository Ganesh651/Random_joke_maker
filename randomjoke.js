let randomjokePage = document.getElementById("randomjokePage");
randomjokePage.style.backgroundImage = "linear-gradient(to right, #49c4ee, #6e87d6)";
randomjokePage.style.height = "100vh";
randomjokePage.classList.add("p-3","text-center","d-flex","flex-column","justify-content-center")

let imgEl = document.createElement("img");
imgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/random-joke-img.png";
imgEl.classList.add("w-25", "ml-auto", "mr-auto");
randomjokePage.appendChild(imgEl);


let jokePara = document.createElement("p");
jokePara.textContent = "Click the button below to get a random Joke!";
jokePara.classList.add("mt-4","text-white")
jokePara.style.fontSize = "24px";
jokePara.style.fontWeight = "700";
let divEl = document.createElement("div");
divEl.classList.add("text-center");
let spinnerContainer = document.createElement("div");
spinnerContainer.classList.add("spinner-border","text-dark","d-none")
divEl.appendChild(spinnerContainer);
randomjokePage.appendChild(divEl);
randomjokePage.appendChild(jokePara);



let buttonContainer = document.createElement("div");
buttonContainer.classList.add("text-center");
randomjokePage.appendChild(buttonContainer);

let buttonEl = document.createElement("button");
buttonEl.textContent = "Joke";
buttonEl.style.color = "#6c8bd8";
buttonEl.style.backgroundColor = "#ffffff";
buttonEl.style.fontSize = "24px";
buttonEl.style.width = "120px";
buttonEl.style.borderWidth = "0px";
buttonEl.style.borderRadius = "4px"
buttonContainer.appendChild(buttonEl);


buttonEl.addEventListener("click",function(){
    spinnerContainer.classList.remove("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let option = {
        Method : "GET"
    };
    fetch(url, option)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        let {value} = jsonData
        spinnerContainer.classList.add("d-none");
        jokePara.textContent = value;
    });
});
