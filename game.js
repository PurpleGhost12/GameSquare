
//манипуляция dom
var $findSquareArea = document.getElementById("find");
var $timer = document.querySelector('#time');
var $hideField = document.getElementById("hide-field");

var $doGame = document.getElementById("do-game");

window.addEventListener('resize', setSizeSquare)
//parametres of the game
var time=10;
var gameState=false;
var readySquare=false;

var saveField;

function clearField()
{
    $areaSquare.innerHTML = '';
    $findSquareArea.innerHTML = '';
}



function startGame()
{
    
    createNewField();
    $timer.textContent="30.0"
    time = parseFloat($timer.textContent)

    $startPanel.style.display = "none";
    $hideField.style.opacity = 1;

    startTimer();
}

function startTimer(){
    var interval = setInterval(function() //timer
    {
       //time = parseFloat($timer.textContent)
       if (time <=0)
       {
        clearInterval(interval);
        endGame();
       }
       else 
       {
        //time-=0.1;
        if (time<=0) time=0;
        $timer.textContent = time.toFixed(1)
        
       }
    }, 100)
}


function createNewField()
{
    clearField();
    doSquare();
    readySquare = true;

    setSizeSquare();
    addField();

    gameState=true;

}

function addField()
{
    saveField = document.createElement('div');
    saveField.className = "save-div";
    $findSquareArea.appendChild(findSquare);
    for (var i=0; i<countSquare; i++)
    {
        saveField.appendChild(arraySquareReady[i])
    }
    $areaSquare.appendChild(saveField)
}

function setSizeSquare()
{
    if (readySquare === false) return;

    getSizeSquare();

    findSquare.style.width = sizeExample +"px";
    findSquare.style.height = sizeExample +"px";
    findSquare.className = "square-example"
    findSquare.style.margin=0+'px';
    findSquare.style.transform = "rotate(0deg) translate(-50%,-50%)";
    
  
    for (var i=0; i<countSquare; i++)
    {
        //console.log(maxSizeSquare)
        var cSize = (maxSizeSquare*arraySquareReady[i].dataset.size);
        var marginPlus = ((maxSizeSquare-cSize)/2)
        arraySquareReady[i].style.width = cSize +'px';
        arraySquareReady[i].style.height = cSize + 'px';
        arraySquareReady[i].style.margin = (marginTop+marginPlus)+'px ' + (marginLeft+marginPlus)+'px';
        //arraySquareReady[i].style.margin = (marginTop)+'px ' + (marginLeft)+'px';


        //arraySquareReady[i].style.margin = getRandom(marginTop, ((marginTopMax+marginPlus)))+'px ' + getRandom(marginLeft,(marginLeftMax+marginPlus))+'px';
        //console.log(marginTop, cSize/4)
        //arraySquareReady[i].style.margin = (cSize/4)+'px ' + (cSize/4)+'px';
        //arraySquareReady[i].style.margin = (maxSizeSquare*arraySquareReady[i].dataset.size)/4+"px";
        
    }
}

function clickSquare(event)
{
    //console.log("Click!");
    console.log(event.target.dataset.find);
    if (event.target.dataset.find === 'true')
    {
        console.log("Yes!");
        console.log(event.target.dataset.find);
        createNewField();
        time+=1;

    }
    else 
    {
        ///Штраф!
       // time-=1;
        if (time<=0) time=0;
        $timer.textContent = time.toFixed(1)
    }

}

function gameShow()
{
    $startPanel.style.display = "none";
    $hideField.style.opacity = 1;

}
function endGame()
{
    clearField();
    $startPanel.style.display = "block";
    $hideField.style.opacity = 0;
    readySquare = false;
    gameState=false;
    sessionStorage.gameState = false;
}