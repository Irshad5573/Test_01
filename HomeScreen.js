class HomeScreen {


  constructor() {
    this.button1=createImg('BT.png');
 }
        

  hide(){
    this.button.hide();
  }

  display(){

    image(BG_Img,windowWidth-1925,windowHeight-875,this.canvasWidth+100,this.canvasHeight+500);
    
    


    this.button1.position(windowWidth/2 - 25, windowHeight/2);
  
    this.button1.mousePressed(()=>{  
      gameState=1;
      this.button1.hide();
    });
      console.log(gameState);

    drawSprites();
    
  }
  
    
}