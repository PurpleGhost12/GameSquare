
//session storage
/**
 * state - последнее состояние
 * 
 * //настройки игры
var rotateAny = false;
var rotate90 = false;
var anySize = false;

var colorsCount=3;
var countCeils=3;
var countSquare=10;

 * 
 */


function checkState()
{
    if (sessionStorage.state === undefined)
    {
        sessionStorage.state = 'main-screen'
        changeStates('main-screen')
        console.log("No")
    }
    else 
    {
        console.log("Yes")
        switch(sessionStorage.state )
        {
            case "main-screen":
                {
                    changeStates('main-screen')
                    break;
                }
            case "choose-level":
                {
                    changeStates('choose-level')
                    break;
                }
            case "create-level":
                {
                    changeStates("create-level")
                    break;
                }
            case "do-game":
                {
                    changeStates("do-game")
                    break;
                }
        }
    }
}

function checkSettings()
{
    if (sessionStorage.rotateAny != undefined) 
    {
        rotateAny = sessionStorage.rotateAny;
        $checkRotateAny.checked = rotateAny;
    }
    if (sessionStorage.rotate90 != undefined) {
        rotate90 = sessionStorage.rotate90;
        $checkRotate90.checked = rotate90;
    }
    if (sessionStorage.anySize != undefined) {
        anySize = sessionStorage.anySize;
        $checkAnySize.checked = anySize;    
    }

    ////////////
    if (sessionStorage.colorsCount != undefined){
        colorsCount = sessionStorage.colorsCount;
        $inputCountColors.value = colorsCount;
    }
    
    if (sessionStorage.countCeils != undefined){
        countCeils = sessionStorage.countCeils;
        $inputCountCeils.value = countCeils;
    }
    
    if (sessionStorage.countSquare != undefined){
        countSquare = sessionStorage.countSquare;
        $inputCountSquare.value = countSquare;
    }
}

checkState();
checkSettings();

function recoverGame()
{
    //восстановить все данные начатой игры
}

function saveAllSettings()
{
    sessionStorage.rotateAny = rotateAny;
    sessionStorage.rotate90 = rotate90;
    sessionStorage.anySize = anySize;
    
    sessionStorage.colorsCount = colorsCount;
    sessionStorage.countCeils = countCeils;
    sessionStorage.countSquare = countSquare;
    
}