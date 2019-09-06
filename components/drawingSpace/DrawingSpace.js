class DrawingSpace{
    
    style = { 
        drawingSpace:
          `height: 100vh;
           display: grid;` 
    };
    theAction = 0;
    constructor(pixelWidth = 22 ,pixelHeight= 22 ,parent) {
        this.drawingSpace = document.createElement("div");
        this.pixelWidth = pixelWidth;
        this.pixelHeight = pixelHeight;
        this.parent = parent;
    }

    // getters and setters
    
    getPixelWidth(){
        return this.pixelWidth;
    }
    setPixelWidth(pixelWidth){
        this.pixelWidth = pixelWidth;
    }
    getpixelHeight(){
        return this.pixelHeight;
    }
    setpixelHeight(pixelHeight){
        this.pixelHeight = pixelHeight;
    }
    getParent(){
        return this.parent;
    }
    setParent(parent){
        this.parent = parent;
    }
    getDrawingSpace(){
        return this.drawingSpace;
    }
   

    addElement(){
        // yetDone
    }
    
    fillThaPixel(thatAction){
        if(theAction === thatAction){
            
        }else if(theAction === thatAction){

        }
    }


    display(){
        this.parent.appendChild(this.drawingSpace);
       
        // set the styleconst pixelH_No = 
        this.drawingSpace.style = this.style.drawingSpace;
        const theWidth =  this.drawingSpace.clientWidth;
        const theHeight =  this.drawingSpace.clientHeight;
        
        const  pixelH_No = Math.floor(theHeight/this.pixelHeight);
        const pixelW_No= Math.floor(theWidth/this.pixelWidth);
        
        const marginTB = (((theHeight%this.pixelHeight)/2)/theHeight)*100; // vh
        const marginLF = (theWidth%this.pixelWidth)/2;  // px
        const newHeight = 100 - (marginTB*2) ;  // vh


        this.drawingSpace.style.gridTemplateColumns= `repeat(${pixelW_No}, ${this.pixelHeight}px)`;
        this.drawingSpace.style.gridTemplateRows= `repeat(${pixelH_No}, ${this.pixelWidth}px)`;
        
        let i = 0;
        
        while (i<(pixelH_No*pixelW_No)) {
            let timp = document.createElement("div");
            timp.style.width=this.pixelWidth;
            timp.style.height=this.pixelHeight;
            timp.style.backgroundColor="red";
            
            timp.addEventListener("mouseover", fillThaPixel(0));

            timp.addEventListener("click", fillThaPixel(1));
           
            this.drawingSpace.appendChild(timp);
            i++;
        }
        this.drawingSpace.style.height = `${newHeight}vh`;
       
        this.drawingSpace.style.margin =`${marginTB}vh ${marginLF}px`;
        
    }

}

export default DrawingSpace;