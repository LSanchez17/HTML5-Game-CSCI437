function MovingLowE()
{
  //Creates a new sprite on the screen
  cMovinglE = new Sprite(scene, "./media/lowE.png", 14, 14);
  //Sets the speed of the thing
  cMovinglE.setSpeed(7);
  cMovinglE.setPosition((Math.random()*(0-400) + 400),Math.random()*(0-400) + 400);
  cMovinglE.fly = function()
  {
	//based on the fly example
    flydirection = 	(Math.random() * 10);
	//changes the movement angle of the sprite
	//it's all an illusion
	this.changeAngleBy(flydirection);
  }
  cMovinglE.reset = function()
  {
	newXcord = Math.random() * this.cWidth;
	newYcord = Math.random() * this.cHeight;
	this.setPosition(newXcord, newYcord);
  }
  cMovinglE.reset();
  return cMovinglE;
  //returns the updated properties (methods[terminology x_x]) of the //object
}

function MovingA()
{
  //Creates a new sprite on the screen
  cMovingA = new Sprite(scene, "./media/A.jpg", 14, 14);
  //Sets the speed of the thing
  cMovingA.setSpeed(7);
  cMovingA.setPosition((Math.random()*(0-400) + 400),Math.random()*(0-400) + 400);
  cMovingA.fly = function()
  {
	//based on the fly example
    flydirection = 	(Math.random() * 10);
	//changes the movement angle of the sprite
	//it's all an illusion
	this.changeAngleBy(flydirection);
  }
  cMovingA.reset = function()
  {
	newXcord = Math.random() * this.cWidth;
	newYcord = Math.random() * this.cHeight;
	this.setPosition(newXcord, newYcord);
  }
  cMovingA.reset();
  return cMovingA;
  //returns the updated properties (methods[terminology x_x]) of the //object
}

function MovingD()
{
  //Creates a new sprite on the screen
  cMovingD = new Sprite(scene, "./media/D.jpg", 14, 14);
  //Sets the speed of the thing
  cMovingD.setSpeed(7);
  cMovingD.setPosition((Math.random()*(0-400) + 400),Math.random()*(0-400) + 400);
  cMovingD.fly = function()
  {
	//based on the fly example
    flydirection = 	(Math.random() * 10);
	//changes the movement angle of the sprite
	//it's all an illusion
	this.changeAngleBy(flydirection);
  }
  cMovingD.reset = function()
  {
	newXcord = Math.random() * this.cWidth;
	newYcord = Math.random() * this.cHeight;
	this.setPosition(newXcord, newYcord);
  }
  cMovingD.reset();
  return cMovingD;
  //returns the updated properties (methods[terminology x_x]) of the //object
}

function MovingG()
{
  //Creates a new sprite on the screen
  cMovingG = new Sprite(scene, "./media/G.jpg", 14, 14);
  //Sets the speed of the thing
  cMovingG.setSpeed(7);
  cMovingG.setPosition((Math.random()*(0-400) + 400),Math.random()*(0-400) + 400);
  cMovingG.fly = function()
  {
	//based on the fly example
    flydirection = 	(Math.random() * 10);
	//changes the movement angle of the sprite
	//it's all an illusion
	this.changeAngleBy(flydirection);
  }
  cMovingG.reset = function()
  {
	newXcord = Math.random() * this.cWidth;
	newYcord = Math.random() * this.cHeight;
	this.setPosition(newXcord, newYcord);
  }
  cMovingG.reset();
  return cMovingG;
  //returns the updated properties (methods[terminology x_x]) of the //object
}

function MovingB()
{
  //Creates a new sprite on the screen
  cMovingB = new Sprite(scene, "./media/B.jpg", 14, 14);
  //Sets the speed of the thing
  cMovingB.setSpeed(7);
  cMovingB.setPosition((Math.random()*(0-400) + 400),Math.random()*(0-400) + 400);
  cMovingB.fly = function()
  {
	//based on the fly example
    flydirection = 	(Math.random() * 10);
	//changes the movement angle of the sprite
	//it's all an illusion
	this.changeAngleBy(flydirection);
  }
  cMovingB.reset = function()
  {
	newXcord = Math.random() * this.cWidth;
	newYcord = Math.random() * this.cHeight;
	this.setPosition(newXcord, newYcord);
  }
  cMovingB.reset();
  return cMovingB;
  //returns the updated properties (methods[terminology x_x]) of the //object
}

function MovingE()
{
  //Creates a new sprite on the screen
  cMovingE = new Sprite(scene, "./media/E.jpg", 14, 14);
  //Sets the speed of the thing
  cMovingE.setSpeed(7);
  cMovingE.setPosition((Math.random()*(0-400) + 400),Math.random()*(0-400) + 400);
  cMovingE.fly = function()
  {
	//based on the fly example
    flydirection = 	(Math.random() * 10);
	//changes the movement angle of the sprite
	//it's all an illusion
	this.changeAngleBy(flydirection);
  }
  cMovingE.reset = function()
  {
	newXcord = Math.random() * this.cWidth;
	newYcord = Math.random() * this.cHeight;
	this.setPosition(newXcord, newYcord);
  }
  cMovingE.reset();
  return cMovingE;
  //returns the updated properties (methods[terminology x_x]) of the //object
}


function ComboBreaker()
{
  //Creates a new sprite on the screen
  cComboBreaker = new Sprite(scene, "./media/ComboBreaker.png", 25, 25);
  //Sets the speed of the thing
  cComboBreaker.setSpeed(10);
  cComboBreaker.setPosition((Math.random()*(0-400) + 400),Math.random()*(0-400) + 400);
  cComboBreaker.fly = function()
  {
	//based on the fly example
    flydirection = 	(Math.random() * 10);
	//changes the movement angle of the sprite
	//it's all an illusion
	this.changeAngleBy(flydirection);
  }
  cComboBreaker.reset = function()
  {
	newXcord = Math.random() * this.cWidth;
	newYcord = Math.random() * this.cHeight;
	this.setPosition(newXcord, newYcord);
  }
  cComboBreaker.reset();
  return cComboBreaker;
  //returns the updated properties (methods[terminology x_x]) of the //object
}

function Block(){
	bBlock = new Sprite(scene, "./media/block.jpg", 80, 40);
	bBlock.maxSpeed = 10;
	bBlock.minSpeed = -3;
	bBlock.setSpeed(0);
	//for testing, My laptop does not cooperate with the simple.js key down function
	//bBlock.setSpeed(0);
	//bBlock.setAngle(0);
	bBlock.setPosition(350,290);
	bBlock.checkKeys = function()
	{
	  if(keysDown[K_A])
	  {
		this.changeAngleBy(-5);  
	  }
      if(keysDown[K_D])
	  {
		this.changeAngleBy(5);  
	  }
	  if(keysDown[K_W])
	  {
		this.changeSpeedBy(1);
		if (this.speed > this.maxSpeed)
		{
		  this.setSpeed(this.maxSpeed);
		}
	  }
	  if(keysDown[K_S])
	  {
		this.changeSpeedBy(-1);  
		if(this.speed < this.minSpeed)
		{
		  this.setSpeed(this.minSpeed);
		}
	  }
	}
    return bBlock;
}