class DrawingSpace{
    
    style = { 
        drawingSpace:
          `height: 100vh;
           display: grid;` 
    };
    theAction = 0;
    constructor(pixelWidth = 50 ,pixelHeight= 50 ,parent) {
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
            // this.style.backgroundColor = "red";
            console.log("adas");
        }else if(theAction === thatAction){
            this.style.backgroundColor = "red";
            console.log("adas");
        }
    }

    display(){
        this.parent.appendChild(this.drawingSpace);
       
        // set the styleconst pixelH_No = 
        this.drawingSpace.style = this.style.drawingSpace;
        const theWidth =  this.drawingSpace.clientWidth;
        const theHeight =  this.drawingSpace.clientHeight;
        console.log('theWidth'+theWidth);
        console.log('theHeight'+theHeight);
        const  pixelH_No = Math.floor(theHeight/this.pixelHeight);
        const pixelW_No= Math.floor(theWidth/this.pixelWidth);
        console.log('pixelH_No'+pixelH_No);
        console.log('pixelW_No'+pixelW_No);
        // const spaTB = (((theHeight%this.pixelHeight)/2)/theHeight)*100; // vh
        // console.log('spaTB'+spaTB);

        const spaTB = theHeight-(pixelH_No*this.pixelHeight);


        const marginLF = (theWidth%this.pixelWidth)/2;  // px
        console.log('marginLF'+marginLF);
        const newHeight = 100-0.254 - (spaTB*0.24963*2) ;  // vh
        console.log('newHeight'+newHeight);

        this.drawingSpace.style.gridTemplateColumns= `repeat(${pixelW_No}, ${this.pixelHeight}px)`;
        this.drawingSpace.style.gridTemplateRows= `repeat(${pixelH_No}, ${this.pixelWidth}px)`;
        
        let i = 0;

        
        while (i<(pixelH_No*pixelW_No+1)) {
            if(i<pixelH_No*pixelW_No){
                let timp = document.createElement("div");
                timp.style.width=this.pixelWidth;
                timp.style.height=this.pixelHeight;
                // timp.style.backgroundColor="red";
                var coordsQueue = [];
    
                window.addEventListener('mousemove', function(e){
                    coordsQueue.push([e.pageX, e.pageY]);
                    
                })
                // console.log(coordsQueue);
                timp.addEventListener("mousemove",()=>{
                    timp.style.backgroundColor="red";
                });
    
                timp.addEventListener("click",()=>{
                    timp.style.backgroundColor="red";
                    console.log(this.theAction);
                });
               
                this.drawingSpace.appendChild(timp);
            }else{
                let timp = document.createElement("div");
                timp.style.width=this.pixelWidth;
                timp.style.height=spaTB;
                // timp.style.backgroundColor="red";
                var coordsQueue = [];
    
                window.addEventListener('mousemove', function(e){
                    coordsQueue.push([e.pageX, e.pageY]);
                    
                })
                // console.log(coordsQueue);
                timp.addEventListener("mousemove",()=>{
                    timp.style.backgroundColor="red";
                });
    
                timp.addEventListener("click",()=>{
                    timp.style.backgroundColor="red";
                    console.log(this.theAction);
                });
               
                this.drawingSpace.appendChild(timp);
            }
            
            i++;
        }
        this.drawingSpace.style.height = `${newHeight}vh`;
        // this.drawingSpace.style.margin =`${spaTB*0.24963*4}vh ${0.5+marginLF}px 0 ${0.5+marginLF}px`;

        // this.drawingSpace.style.margin =`auto auto`;
        
    }

}

export default DrawingSpace;