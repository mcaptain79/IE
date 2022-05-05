//creating button for star ship
let newButton = document.createElement("button")
newButton.className = "new"
newButton.innerHTML = "کشتی فضایی"
newButton.type = "submit"
newButton.id = "newButton"
//array below for saving list of star ships
let starShipUrlList
//button for returning
let returnButton = document.createElement("button")
returnButton.type = "submit"
returnButton.id = "returnButton"
returnButton.innerHTML = "بازگشت"
//function below is for receiving data of film one to six
async function getMovieData(){
    let movieNumber = document.getElementById("chooseMovieNumberText").value
    let div = document.getElementById("middle")
    let newElements = document.getElementsByClassName("new")
    //removing elements with the class new in each time we click the button (kind of refreshing:))
    while(newElements[0]){
        newElements[0].parentNode.removeChild(newElements[0])
    }
    //checking if movie id is valid or not
    if(movieNumber === "1"){
        let response = await fetch("https://swapi.dev/api/films/4")
        let data = await response.json()
        console.log(data)
        //creating a pre for showing data of the movie
        let pre = document.createElement("pre")
        pre.className = "new"
        pre.innerHTML = data["title"]+"\n"+data["episode_id"]+"\n"+data["release_date"]
        div.appendChild(pre)
        //startShip url list as global variable
        starShipUrlList = data["starships"]
        div.appendChild(newButton)
    }
    else if(movieNumber === "2"){
        let response = await fetch("https://swapi.dev/api/films/5")
        let data = await response.json()
        console.log(data)
        let pre = document.createElement("pre")
        pre.className = "new"
        pre.innerHTML = data["title"]+"\n"+data["episode_id"]+"\n"+data["release_date"]
        div.appendChild(pre)
        //startShip url list as global variable
        starShipUrlList = data["starships"]
        div.appendChild(newButton)
    }
    else if(movieNumber === "3"){
        let response = await fetch("https://swapi.dev/api/films/6")
        let data = await response.json()
        console.log(data)
        let pre = document.createElement("pre")
        pre.className = "new"
        pre.innerHTML = data["title"]+"\n"+data["episode_id"]+"\n"+data["release_date"]
        div.appendChild(pre)
        //startShip url list as global variable
        starShipUrlList = data["starships"]
        div.appendChild(newButton)
    }
    else if(movieNumber === "4"){
        let response = await fetch("https://swapi.dev/api/films/1")
        let data = await response.json()
        console.log(data)
        let pre = document.createElement("pre")
        pre.className = "new"
        pre.innerHTML = data["title"]+"\n"+data["episode_id"]+"\n"+data["release_date"]
        div.appendChild(pre)
        //startShip url list as global variable
        starShipUrlList = data["starships"]
        div.appendChild(newButton)
    }
    else if(movieNumber === "5"){
        let response = await fetch("https://swapi.dev/api/films/2")
        let data = await response.json()
        console.log(data)
        let pre = document.createElement("pre")
        pre.innerHTML = data["title"]+"\n"+data["episode_id"]+"\n"+data["release_date"]
        pre.className = "new"
        div.appendChild(pre)
        //startShip url list as global variable
        starShipUrlList = data["starships"]
        div.appendChild(newButton)
    }
    else if(movieNumber === "6"){
        let response = await fetch("https://swapi.dev/api/films/3")
        let data = await response.json()
        console.log(data)
        let pre = document.createElement("pre")
        pre.className = "new"
        pre.innerHTML = data["title"]+"\n"+data["episode_id"]+"\n"+data["release_date"]
        div.appendChild(pre)
        //startShip url list as global variable
        starShipUrlList = data["starships"]
        div.appendChild(newButton)
    }
    //if not valid showing message invalid input
    else{
        let pre = document.createElement("pre")
        pre.className = "new"
        pre.innerHTML = "اطلاعات نامعتبر"
        div.appendChild(pre)
    }
}
//this function handles clicking starship button
async function clickOnStarShip(){
    let div = document.getElementById("middle")
    //removing all other div children and clearing page
    let child = div.lastElementChild
    while(child){
        div.removeChild(child)
        child = div.lastElementChild
    }
    //adding names of starships to div
    for(i of starShipUrlList){
        let response = await fetch(i)
        let data = await response.json()
        let newDiv = document.createElement("div")
        let span = document.createElement("span")
        newDiv.className = "tooltip"
        span.className = "tooltipText"
        span.innerHTML = "1)model: "+data["model"]+" - 2)manufacturer: "+data["manufacturer"]+" - 3)crew: "+data["crew"]+" - 4)passengers: "+data["passengers"]
        newDiv.innerHTML = data["name"]
        newDiv.appendChild(span)
        div.appendChild(newDiv)
        div.appendChild(document.createElement("br"))
    }
    div.appendChild(returnButton)
}
//adding event to our button
newButton.addEventListener("click",clickOnStarShip)
//function below is for return button
function returnToMainPage(){
    window.location.reload()
}
returnButton.addEventListener("click",returnToMainPage)