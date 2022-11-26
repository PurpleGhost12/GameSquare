var $mainMenu = document.getElementById("main-screen");

var $chooseLevel = document.getElementById("choose-level");

var $createLevel = document.getElementById("create-level");

var $doGame = document.getElementById("do-game");

//session storage - сохраняем на случай перезагрузки! и только состояние игры
//local storage - для сохранения пользователей!

sessionStorage.test = 'test';
console.log(sessionStorage.test) //this is works

var currentState='main-screen';
//buttons change states

//menu start
var $buttonMain = document.getElementById("start-main");
$buttonMain.addEventListener('click', function() {
    changeStates("choose-level");
  });

  //choose level
var $buttonLevelEasy = document.getElementById("level-easy");
$buttonLevelEasy.addEventListener('click', function() { 
      //настройки
      rotateAny = false;
      
      rotate90 = false;
      $checkRotate90.checked = false;
      anySize = false;
      $checkAnySize.checked = false;
      $checkRotateAny.checked = false;
      
      colorsCount=3;
      countCeils=3;
      countSquare=10;
      saveAllSettings();
      //gameState в конце!!!!
      changeStates("do-game");
    });
  


var $buttonHandle = document.getElementById("level-create");
$buttonHandle.addEventListener('click', function() {
      changeStates("create-level");
      //настройки
    });
  




  //Change screen/state
  function changeStates(newState)
  {
    //console.log(sessionStorage.state);
    //console.log(newState);

    findState(currentState, 'none');
    findState(newState, 'block');

    sessionStorage.state = newState;
    currentState = newState;

    function findState(findSt, doWhat)
    {
        switch(findSt)
        {
            case "main-screen":
                {
                    $mainMenu.style.display = doWhat;
                    if (doWhat === "none") clearField();
                    break;
                }
    
            case "choose-level":
                {
                    $chooseLevel.style.display = doWhat;
                    break;
                }
            case "create-level":
                {
                    $createLevel.style.display = doWhat;
                    break;
                }
            case "do-game":
                {
                    $doGame.style.display = doWhat;
                    if (doWhat === "block") createPanel();
                    else 
                    {
                      endGame();
                      hidePanel();
                    }
                    break;
                }
        }
    }
  }

  function backToMain()
  {
    changeStates('main-screen');
  }
function toLevel()
{

}
  function toGame()
  {
    changeStates('do-game');
  }