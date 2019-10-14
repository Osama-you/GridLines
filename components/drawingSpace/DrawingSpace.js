class DrawingSpace{


    style = { 
        drawingSpace:
          `height: 100vh;
           display: grid;` 
    };
    theAction = 0;
    constructor(pixelWidth = 40 ,pixelHeight= 40 ,height,parent) {
        this.drawingSpace = document.createElement("div");
        this.pixelWidth = pixelWidth;
        this.pixelHeight = pixelHeight;
        this.height = height;
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
    getHeight(){
        return this.height;
    }
    setHeight(height){
        this.height = height;
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
   
    fillThaPixel(){
        console.log('')
        this.style.backgroundColor = "red";
    }

    display(){
        this.parent.appendChild(this.drawingSpace);
       
        this.drawingSpace.style = this.style.drawingSpace;
        const theWidth = this.drawingSpace.clientWidth;

        let theHeight =  this.drawingSpace.clientHeight;
        theHeight= theHeight-this.getHeight();
        const  pixelH_No = Math.floor(theHeight/this.pixelHeight);
        const pixelW_No= Math.floor(theWidth/this.pixelWidth);
        
        let marginTooAndBottom = (((theHeight%this.pixelHeight))/theHeight)*100;
        let newHeight = 100 - (marginTooAndBottom) ;  

        this.drawingSpace.style.gridTemplateColumns= `repeat(${pixelW_No}, ${this.pixelHeight}px)`;
        this.drawingSpace.style.gridTemplateRows= `repeat(${pixelH_No}, ${this.pixelWidth}px)`;
        
        let i = 0;
        while (i<(pixelH_No*pixelW_No)) {
            let timp = document.createElement("div");
            timp.style.width=this.pixelWidth;
            timp.style.height=this.pixelHeight;

            timp.addEventListener("click",() =>{

                timp.style.backgroundColor = "red";
                if(this.theAction === 0)this.fillThaPixel();
            });
            this.drawingSpace.appendChild(timp);
            i++;
        }

        this.drawingSpace.style.margin="auto";
        this.drawingSpace.style.height = `${newHeight}%`;

    }

}

export default DrawingSpace;