import Tools from "../tools/Tools.js";

class DrawingSpace{

    style = { 
        drawingSpace:
          "height: 100vh;"+
           "\n\tdisplay: grid;",
        node:
          "display: grid;"+
           "\n\tgrid-template-rows: 30% auto 30%;"+
           "\n\tposition:relative;",
        centerColClass:
          "display: grid;"+
          "\n\tgrid-template-columns:30% auto 30%;",
        circleClass:
          "position: absolute;"+
          "\n\tz-index: -1;"+
          "\n\ttop: 0;"+
          "\n\tbottom: 0;"+
          "\n\tleft: 0;"+
          "\n\tright: 0;"
    };

    constructor(pixelWidth =40 ,pixelHeight= 40 ,height,parent) {
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
    
    // 
    createNode(element){
        element.className = "node" ;
        let outputList = [];
        for(let i = 0 ;i <= 6 ;i++){
            let t = document.createElement("div");
            outputList.push(t);
            if(i<=3){
                element.appendChild(t);
            }else{
                outputList[1].appendChild(t);
            }
        }

        outputList[1].className = "centerCol" ;
        outputList[3].className = "circle" ;

        return outputList;
    }

    allTheShape(top,right,bottom,left,circleInCenter,a=[]){

        let _top=a[0];
        let _left=a[4];
        let _bottom=a[2];
        let _right=a[6];
        let _circle=a[3];
        let _center=a[5];
            
        if(circleInCenter == 1){
            this.dot(_circle);

            if(top    == 1)this.verticalLine(_top);
            if(left   == 1)this.horizontalLine(_left);
            if(bottom == 1)this.verticalLine(_bottom);
            if(right  == 1)this.horizontalLine(_right);

        }else{
            if(top==1){
                this.verticalLine(_bottom);
                this.verticalLine(_center);
                _center.style.margin="0 3px";
                if(bottom==1){
                    this.verticalLine(_top);
                }else{
                    this.startLine(_top,"top");
                }
            }else if(right == 1){
                this.horizontalLine(_left);
                this.horizontalLine(_center);
                if(left==1){
                    this.horizontalLine(_right);
                }else{
                    this.startLine(_right,"right");
                    _right.style.margin="3px 0";
                }
            }else if(bottom == 1){
                this.startLine(_bottom,"bottom");
                this.verticalLine(_top);
                this.verticalLine(_center);
                _center.style.margin="0 3px";
            }else if(left == 1){
                this.startLine(_left,"left");
                this.horizontalLine(_right);
                this.horizontalLine(_center);
                _left.style.margin="3px 0";
            }
        }
    }
    display(){
        // add the drawingSpace 
        this.parent.appendChild(this.drawingSpace);
       
        //set the styles
          //create Same Css Class
        let tools = new Tools();
        tools.createClass(null,"node",this.style.node);
        tools.createClass(null,"centerCol",this.style.centerColClass);
        tools.createClass(null,"circle",this.style.circleClass);
        tools.createClass(null,"drawingSpace",this.style.drawingSpace);

        //set the class for drawing Space
        this.drawingSpace.className = "drawingSpace"

        // same calculation the get the right dimensions
        const theWidth = this.drawingSpace.clientWidth;
        let theHeight =  this.drawingSpace.clientHeight;

        theHeight= theHeight-this.getHeight();
        const pixelH_No = Math.floor(theHeight/this.pixelHeight);
        const pixelW_No= Math.floor(theWidth/this.pixelWidth);
        
        let marginTopAndBottom = (((theHeight%this.pixelHeight))/theHeight)*100;
        let newHeight = 100 - (marginTopAndBottom) ;  

        // set the grid for drawingSpace
        this.drawingSpace.style.gridTemplateColumns= `repeat(${pixelW_No}, ${this.pixelHeight}px)`;
        this.drawingSpace.style.gridTemplateRows= `repeat(${pixelH_No}, ${this.pixelWidth}px)`;

        // create and set the all div in drawing space
        let listOfNodes=[[]]; 
        let a = 0;
        let i = 0;
        let j = 0;
        console.log(pixelW_No);
        let x=pixelW_No;
        while (a<(pixelH_No*pixelW_No)) {
            let timp = document.createElement("div");
            timp.style.width=this.pixelWidth;
            timp.style.height=this.pixelHeight;
            timp.id=i+","+j;
            listOfNodes[i][j]=timp;

            let listOfDirDivs=this.createNode(timp);
            // EVENT
            timp.addEventListener("mouseover",(w) =>{
                this.allTheShape(0,1,0,1,1,listOfDirDivs);
                console.log(timp);

                // the Fun start from here









            });
            this.drawingSpace.appendChild(timp);
            if(j == pixelW_No-1){
                console.log("j "+j)
                i++
                listOfNodes[i]=[];
                j=0;
                
            }else{
                j++
            }
            a++;
        }
        console.log("jjjjjjjjj  ")

        console.log(listOfNodes["2"]["3"])
        console.log(listOfNodes);
        this.drawingSpace.style.margin="auto";
        this.drawingSpace.style.height = `${newHeight}%`;
    }

    dot(timp){
        timp.style.margin="8.7px"; //21.75%
        timp.style.border="3px solid #844C18";
        timp.style.borderRadius="50%"
        timp.style.backgroundColor = "#F37C22 ";
    }
    horizontalLine(timp){
        timp.style.margin="3px 0";
        timp.style.borderTop="3px solid #844C18";
        timp.style.borderBottom="3px solid #844C18";
        timp.style.backgroundColor = "#F37C22 ";
    }
    verticalLine(timp){
        timp.style.margin="0 15px";
        timp.style.borderLeft="3px solid #844C18";
        timp.style.borderRight="3px solid #844C18";
        timp.style.backgroundColor = "#F37C22 ";
    }

    startLine(timp, dir){
        if(dir === "top"){//
            timp.style.margin="0px 15px";
            timp.style.borderRight="3px solid #844C18";
            timp.style.borderTop="3px solid #844C18";
            timp.style.borderLeft="3px solid #844C18";
            timp.style.borderRadius="15px 15px 0 0 "
            timp.style.backgroundColor = "#F37C22 ";
        }else if(dir === "right"){
            timp.style.margin="15px 0px";
            timp.style.borderTop="3px solid #844C18";
            timp.style.borderBottom="3px solid #844C18";
            timp.style.borderRight="3px solid #844C18";
            timp.style.borderRadius="0 15px 15px 0"
            timp.style.backgroundColor = "#F37C22 ";
        }else if(dir === "bottom"){//
            timp.style.margin="0px 15px";
            timp.style.borderRight="3px solid #844C18";
            timp.style.borderBottom="3px solid #844C18";
            timp.style.borderLeft="3px solid #844C18";
            timp.style.borderRadius="0 0 15px 15px"
            timp.style.backgroundColor = "#F37C22 ";
        }else if(dir === "left"){
            timp.style.margin="15px 0px";
            timp.style.borderTop="3px solid #844C18";
            timp.style.borderBottom="3px solid #844C18";
            timp.style.borderLeft="3px solid #844C18";
            timp.style.borderRadius="15px 0 0 15px"
            timp.style.backgroundColor = "#F37C22 ";
        }

    }

}

export default DrawingSpace;


// start
// margin: 12px 0px;
// border-bottom: 3px solid;
// border-top: 3px solid;
// background-color: red;
// border-radius: 12px 0 0 12px;
// border-left: 3px solid;

// v
// margin: 12px 0px;
// border-bottom: 3px solid;
// border-top: 3px solid;
// background-color: red;

// h
// margin: 0 12px;
// border-right: 3px solid;
// border-left: 3px solid;
// background-color: red;

// end
// margin: 12px 0px;
// border-bottom: 3px solid;
// border-top: 3px solid;
// background-color: red;
// border-radius: 0 12px 12px 0;
// border-right: 3px solid;

// Dot
// margin: 12px;
// border: 3px solid;
// background-color: red;
// border-radius: 12px;

// #F37C22 ==> #844C18   

243,124,34

132,76,24

// #840065   #F300B4

132,0,101
243,0,180




















            // // this.dot(_circle);
            // if(top==1 && left==0 && bottom==1 && right==0){//
            //     this.verticalLine(_top);
            //     this.verticalLine(_bottom);
            //     this.verticalLine(_center);
            //     _center.style.margin="0 3px";
            //     // _center.style.padding="5px";
            // }else if(top==0 && left==1 && bottom==0 && right==1){//
            //     this.horizontalLine(_left);
            //     this.horizontalLine(_right);
            //     this.horizontalLine(_center);
            // }else if(top==1 && left==0 && bottom==0 && right==0){//
            //     this.startLine(_top,"top");
            //     _bottom.style.margin="3px 0";
            //     this.verticalLine(_bottom);
            //     this.verticalLine(_center);
            //     _center.style.margin="0 1px";
            // }else if(top==0 && left==1 && bottom==0 && right==0){
            //     this.startLine(_left,"left");
            //     _left.style.margin="3px 0";
            //     this.horizontalLine(_right);
            //     this.horizontalLine(_center);
            // }else if(top==0 && left==0 && bottom==1 && right==0){//
            //     this.startLine(_bottom,"bottom");
            //     // _bottom.style.margin="3px 0";
            //     this.verticalLine(_top);
            //     this.verticalLine(_center);
            //     _center.style.margin="0 1px";
            // }else if(top==0 && left==0 && bottom==0 && right==1){//
            //     this.startLine(_right,"right");
            //     _right.style.margin="3px 0";
            //     this.horizontalLine(_left);
            //     this.horizontalLine(_center);
            // }