var scene;
var block;
var circlemoves;
var score;
var lives;
var EOGG;
var AOGG;
var DOGG;
var GOGG;
var BOGG;
var HighEOGG;
var NUMNOTES = 3;
var NEEDEDNOTES = 6;

function init()
{
    score = 0;    
	lives = 3;
	scene = new Scene();
	scene.setBG("black");
	scene.setSizePos(800,430);
	//creating the protagonist!
	block = new Block();
	MakeNotes();
	EOGG = new Sound("E.ogg");
	AOGG = new Sound("A.ogg");
	DOGG = new Sound("D.ogg");
	GOGG = new Sound("G.ogg");
	BOGG = new Sound("B.ogg");
	HighEOGG = new Sound("HighE.ogg");
            
    scene.start();
} // end init
        
function update()
{
    scene.clear();
  
    //handle events here
	block.checkKeys();
	ShowNotes();	 
    //update all the sprites
    block.update();
}

function MakeNotes()
{
  lotsofE = new Array(NUMNOTES);
  lotsofA = new Array(NUMNOTES);
  lotsofD = new Array(NUMNOTES);
  lotsofG = new Array(NUMNOTES);
  lotsofB = new Array(NUMNOTES);
  lotsofHE = new Array(NUMNOTES);
  lotsofComboBreakers = new Array(NUMNOTES);
  for(i = 0; i < NUMNOTES; i++)
  {
	lotsofE[i] = new MovingLowE();
	lotsofA[i] = new MovingA();
	lotsofD[i] = new MovingD();
	lotsofG[i] = new MovingG();
	lotsofB[i] = new MovingB();
	lotsofHE[i] = new MovingE();
	lotsofComboBreakers[i] = new ComboBreaker();
  }
}

function CheckHits(thinghit)
{
  //Checks for collisions, and which item collided
  if(block.collidesWith(lotsofE[thinghit]))
  {
	//removes the thing that was hit
	lotsofE[thinghit].reset();
	//play sounds if needed here to notify user
	EOGG.play();
	//end sounds
	UserNotification("E");
	ScoreTracker();
  }
  if(block.collidesWith(lotsofA[thinghit]))
  {
	//removes the thing that was hit
	lotsofA[thinghit].reset();
	//play sounds if needed here to notify user
	AOGG.play();
	//end sounds
	UserNotification("A");
	ScoreTracker();
  }
  if(block.collidesWith(lotsofD[thinghit]))
  {
	//removes the thing that was hit
	lotsofD[thinghit].reset();
	//play sounds if needed here to notify user
	DOGG.play();
	//end sounds
	UserNotification("D");
	ScoreTracker();
  }
  if(block.collidesWith(lotsofG[thinghit]))
  {
	//removes the thing that was hit
	lotsofG[thinghit].reset();
	//play sounds if needed here to notify user
	GOGG.play();
	//end sounds
	UserNotification("G");
	ScoreTracker();
  }
  if(block.collidesWith(lotsofB[thinghit]))
  {
	//removes the thing that was hit
	lotsofB[thinghit].reset();
	//play sounds if needed here to notify user
	BOGG.play();
	//end sounds
	UserNotification("B");
	ScoreTracker();
  }
  if(block.collidesWith(lotsofHE[thinghit]))
  {
	//removes the thing that was hit
	lotsofHE[thinghit].reset();
	//play sounds if needed here to notify user
	HighEOGG.play();
	//end sounds
	UserNotification("HighE");
	ScoreTracker();
  }
   if(block.collidesWith(lotsofComboBreakers[thinghit]))
  {
	//removes the thing that was hit
	lotsofComboBreakers[thinghit].reset();
	//play sounds if needed here to notify user
	//.play();
	//end sounds
	LivesLost();
  }
}

function UserNotification(note)
{
  wincondition = [];
  wincondition.push(note);
  for(i = 0; i < NEEDEDNOTES; i++)
  {
	if(wincondition[i] == note)
	{
	  score -= 1;
	}
	else
	{
	  wincondition.push(note);	
	}
  }

  if(score >= 6)
  {
	document.getElementById("output").innerHTML = "<h1>You win!</h1>";
	scene.stop();
  }
  if(lives <= 0){
	document.getElementById("output").innerHTML = "<h1>You've Lost :( <h1>";
	scene.stop();
  }
  console.log("You've hit: " + score + "<h1>");
}

function ShowNotes()
{
  for(i = 0; i < NUMNOTES; i++)
	{
	  //makes each circle fly
	  lotsofE[i].fly();
	  CheckHits(i);
	  lotsofE[i].update(); 
	}
  for(i = 0; i < NUMNOTES; i++)
	{
	  //makes each circle fly
	  lotsofA[i].fly();
	  CheckHits(i);
	  lotsofA[i].update(); 
	}
  for(i = 0; i < NUMNOTES; i++)
	{
	  //makes each circle fly
	  lotsofD[i].fly();
	  CheckHits(i);
	  lotsofD[i].update(); 
	}
  for(i = 0; i < NUMNOTES; i++)
	{
	  //makes each circle fly
	  lotsofG[i].fly();
	  CheckHits(i);
	  lotsofG[i].update(); 
	}
  for(i = 0; i < NUMNOTES; i++)
	{
	  //makes each circle fly
	  lotsofB[i].fly();
	  CheckHits(i);
	  lotsofB[i].update(); 
	}
  for(i = 0; i < NUMNOTES; i++)
	{
	  //makes each circle fly
	  lotsofHE[i].fly();
	  CheckHits(i);
	  lotsofHE[i].update(); 
	}
  for(i = 0; i < NUMNOTES; i++)
	{
	  //makes each circle fly
	  lotsofComboBreakers[i].fly();
	  CheckHits(i);
	  lotsofComboBreakers[i].update(); 
	}
}

function LivesLost()
{
  lives -= 1;	
  document.getElementById("Lives").innerHTML = "<h1>Lives: " + lives + "<h1>";
}

function ScoreTracker()
{
	score += 1;
	document.getElementById("Score").innerHTML = "<h1>Score: " + score; + "</h1>"	
}
