(function () {

    "use strict";



	const startGame = document.getElementById("startgame");
	const gameControl = document.getElementById("gamecontrol");
	const game = document.getElementById("game");
	const score = document.getElementById("score");
	const actionArea = document.getElementById("actions");
	
	const gameData = {
		dice: ["1die.png", "2die.png", "3die.png", 
			   "4die.png", "5die.png", "6die.png"],
		players: ["player 1", "player 2"],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		turnSum:0,
		index: 0,
		gameEnd: 49
	}
	
	startGame.addEventListener("click", function(){
		gameData.index = Math.round(Math.random());
		//console.log(gameData.index);
	
		gameControl.innerHTML = '<h2>The Game Has Started</h2>';
		gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
	
		document.getElementById('quit').addEventListener("click", function(){
			location.reload();
		});
	
		setUpTurn();
	});
	
	function setUpTurn(){
		//this helps establish what the score of the player is at the start of the turn so that way it can be subtracted later on.
		gameData.turnSum = 0;
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
		document.getElementById('roll').addEventListener("click", function(){
	
			throwDice();
	
		});
			checkWinningCondition();
	}
	
	function throwDice(){
		actionArea.innerHTML = '';
		gameData.roll1 = Math.ceil(Math.random()*6);
		gameData.roll2 = Math.ceil(Math.random()*6);
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
							<img src="${gameData.dice[gameData.roll2-1]}">`;
		gameData.rollSum = gameData.roll1 + gameData.roll2;
	
		// if two 1's are rolled...
		if( gameData.rollSum === 2 ){
			game.innerHTML += "<p>Oh snap! Snake eyes!</p>";
			gameData.score[gameData.index] = 0;
			gameData.index ? gameData.index = 0 : gameData.index = 1;
			showCurrentScore();
			setTimeout(setUpTurn, 2000);
		}
	
		// if either die is a 1...
		else if(gameData.roll1 === 1 || gameData.roll2 === 1){
			//the line below collects the sum of the whole turn and subtracts it from the score so that way it can be set to zero for only that turn
			gameData.score[gameData.index] -= gameData.turnSum;
			gameData.index ? gameData.index = 0 : gameData.index = 1;
			game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${gameData.players[gameData.index]}</p>`;
			setTimeout(setUpTurn, 2000);
		}
	
		// if neither die is a 1...
		else {
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			//added line below to track score which allows it to know when to set to zero and when to add
			gameData.turnSum += gameData.rollSum;
			actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
	
			document.getElementById('rollagain').addEventListener("click", function(){ 
				throwDice();
			});
	
			document.getElementById('pass').addEventListener("click", function(){
				gameData.index ? gameData.index = 0 : gameData.index = 1;
				setUpTurn();
			});
	
			checkWinningCondition();
		}
	}
	
	function checkWinningCondition(){
		if(gameData.score[gameData.index] > gameData.gameEnd){
			score.innerHTML = `<h2>${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</h2>`;
	
			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = "Start a New Game?";
		}
		else{  
			showCurrentScore();
		}
	}
	
	function showCurrentScore(){
		score.innerHTML = `<p>The score is currently:<br> <strong>${gameData.players[0]}: 
		${gameData.score[0]}</strong><br><strong>${gameData.players[1]}: 
		${gameData.score[1]}</p>`;
	}


    


} ());
