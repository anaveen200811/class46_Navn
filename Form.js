class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Start');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('reset');
      this.image = loadImage("images.png");
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      image(this.image,0,0,displayWidth-10,displayHeight+200);  
      this.title.html("Colour Blindness Simulator");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.style('background-color',color(239, 236, 129));

      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        gameState+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);


      });
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
    }
  }
  