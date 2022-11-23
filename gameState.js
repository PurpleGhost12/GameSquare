var $mainMenu = document.getElementById("main-screen");

var $chooseLevel = document.getElementById("choose-level");

var $createLevel = document.getElementById("create-level");

var $doGame = document.getElementById("do-game");

//session storage - сохраняем на случай перезагрузки! и только состояние игры
//local storage - для сохранения пользователей!

sessionStorage.test = 'test';
console.log(sessionStorage.test) //this is works


//buttons change states

//menu start
var $buttonMain = document.getElementById("start-main");
$buttonMain.addEventListener('click', function() {
    changeStates("choose-level");
  });

  //choose level
var $buttonLevelEasy = document.getElementById("level-easy");
$buttonLevelEasy.addEventListener('click', function() {
      changeStates("do-game");
      //настройки
      rotateAny = false;
      rotate90 = false;
      anySize = false;
      
      colorsCount=3;
      countCeils=3;
      countSquare=10;
      saveAllSettings()
    });
  
var $buttonHandle = document.getElementById("level-create");
$buttonHandle.addEventListener('click', function() {
      changeStates("create-level");
      //настройки
    });
  




  //Change screen/state
  function changeStates(newState)
  {
    console.log(sessionStorage.state);
    console.log(newState);

    findState(sessionStorage.state, 'none');
    findState(newState, 'block');

    sessionStorage.state = newState;

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
                    break;
                }
        }
    }
  }

  function backToMain()
  {
    changeStates('main-screen');
  }

  function toGame()
  {
    changeStates('do-game');
  }