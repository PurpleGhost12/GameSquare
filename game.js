
//манипуляция dom
var $areaSquare = document.getElementById("generate");
var $findSquareArea = document.getElementById("find");
var $timer = document.querySelector('#time');

$areaSquare.addEventListener('click', clickSquare);

//parametres of the game
var time=10;



function clearField()
{
    $areaSquare.innerHTML = '';
    $findSquareArea.innerHTML = '';
}



function startGame()
{
    createNewField();
    $timer.textContent="10.0"
    time = parseFloat($timer.textContent)
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
        time-=0.1;
        if (time<=0) time=0;
        $timer.textContent = time.toFixed(1)
        
       }
    }, 100)
}

function createNewField()
{
    clearField();
    doSquare();
    $findSquareArea.appendChild(findSquare);
  
    for (var i=0; i<countSquare; i++)
    {
        $areaSquare.appendChild(arraySquareReady[i])
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
        time-=1;
        if (time<=0) time=0;
        $timer.textContent = time.toFixed(1)
    }

}

function endGame()
{
    clearField();
}