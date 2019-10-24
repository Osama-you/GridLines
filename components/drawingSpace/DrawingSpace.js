import ToolsHelper from "../toolsHelper/ToolsHelper.js";

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
          "\n\tright: 0;",
        dot:
          "margin: 8.7px;"+
          "\n\tborder: 3px solid #844C18;"+
          "\n\tborder-radius: 50%;"+
          "\n\tbackground-color: #F37C22;",
        horizontalLine:
          "margin: 3px 0;"+
          "\n\tborder-top: 3px solid #844C18;"+
          "\n\tborder-bottom: 3px solid #844C18;"+
          "\n\tbackground-color: #F37C22;",
        verticalLine:
          "margin: 0 15px;"+
          "\n\tborder-left: 3px solid #844C18;"+
          "\n\tborder-right: 3px solid #844C18;"+
          "\n\tbackground-color: #F37C22;",
        startLine_top:
          "margin: 0 15px;"+
          "\n\tborder-left: 3px solid #844C18;"+
          "\n\tborder-right: 3px solid #844C18;"+
          "\n\tborder-top: 3px solid #844C18;"+
          "\n\tborder-radius: 15px 15px 0 0;"+
          "\n\tbackground-color: #F37C22;",
        startLine_right:
          "margin: 15px 0px;"+
          "\n\tborder-top: 3px solid #844C18;"+
          "\n\tborder-right: 3px solid #844C18;"+
          "\n\tborder-bottom: 3px solid #844C18;"+
          "\n\tborder-radius: 0 15px 15px 0;"+
          "\n\tbackground-color: #F37C22;",
        startLine_bottom:
          "margin: 0px 15px;"+
          "\n\tborder-left: 3px solid #844C18;"+
          "\n\tborder-right: 3px solid #844C18;"+
          "\n\tborder-bottom: 3px solid #844C18;"+
          "\n\tborder-radius: 0 0 15px 15px;"+
          "\n\tbackground-color: #F37C22;",
        startLine_left:
          "margin: 15px 0px;"+
          "\n\tborder-left: 3px solid #844C18;"+
          "\n\tborder-top: 3px solid #844C18;"+
          "\n\tborder-bottom: 3px solid #844C18;"+
          "\n\tborder-radius: 15px 0 0 15px;"+
          "\n\tbackground-color: #F37C22;"
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

    allTheShape(top,right,bottom,left,circleInCenter,listOfDirDivs=[]){

        if(circleInCenter == 1){
            this.dot(listOfDirDivs[3]);

            if(top    == 1)this.verticalLine(listOfDirDivs[0]);
            if(left   == 1)this.horizontalLine(listOfDirDivs[4]);
            if(bottom == 1)this.verticalLine(listOfDirDivs[2]);
            if(right  == 1)this.horizontalLine(listOfDirDivs[6]);

        }else{
            if(top==1){
                this.verticalLine(listOfDirDivs[2]);
                this.verticalLine(listOfDirDivs[5]);
                listOfDirDivs[5].style.margin="0 3px";
                if(bottom==1){
                    this.verticalLine(listOfDirDivs[0]);
                }else{
                    this.startLine(listOfDirDivs[0],"top");
                }
            }else if(right == 1){
                this.horizontalLine(listOfDirDivs[4]);
                this.horizontalLine(listOfDirDivs[5]);
                if(left==1){
                    this.horizontalLine(listOfDirDivs[6]);
                }else{
                    this.startLine(listOfDirDivs[6],"right");
                    listOfDirDivs[6].style.margin="3px 0";
                }
            }else if(bottom == 1){
                this.startLine(listOfDirDivs[2],"bottom");
                this.verticalLine(listOfDirDivs[0]);
                this.verticalLine(listOfDirDivs[5]);
                listOfDirDivs[5].style.margin="0 3px";
            }else if(left == 1){
                this.startLine(listOfDirDivs[4],"left");
                this.horizontalLine(listOfDirDivs[6]);
                this.horizontalLine(listOfDirDivs[5]);
                listOfDirDivs[4].style.margin="3px 0";
            }
        }
        return  " edited "+top+right+bottom+left+circleInCenter;
    }

    top = "0";
    right = "0" ;
    bottom = "0" ;
    left = "0" ;
    listEle=[];
    te(element){
        this.listEl=[];
        this.top    = "0";
        this.right  = "0" ;
        this.bottom = "0" ;
        this.left   = "0" ;
        
        let tempIandJ =element.id.split(","); 
        if(tempIandJ[0]!=0){
            if(this.listOfNodes[tempIandJ[0]-1][tempIandJ[1]].classList.contains("edited")){
                this.top="1";
                this.listEl.push(this.listOfNodes[tempIandJ[0]-1][tempIandJ[1]]);
            }
        }
        if(tempIandJ[1]!=this.listOfNodes[0].length-1){
            if(this.listOfNodes[tempIandJ[0]][parseInt(tempIandJ[1],10)+1].classList.contains("edited")){
                this.right="1";
                this.listEl.push(this.listOfNodes[tempIandJ[0]][parseInt(tempIandJ[1],10)+1]);
            }
        }
        if(tempIandJ[0]!=this.listOfNodes.length-2){
            if(this.listOfNodes[parseInt(tempIandJ[0],10)+1][tempIandJ[1]].classList.contains("edited")){
                this.bottom="1";
                this.listEl.push(this.listOfNodes[parseInt(tempIandJ[0],10)+1][tempIandJ[1]]);
            }
        }
        if(tempIandJ[1]!=0){
            if(this.listOfNodes[tempIandJ[0]][tempIandJ[1]-1].classList.contains("edited")){
                this.left="1";
                this.listEl.push(this.listOfNodes[tempIandJ[0]][tempIandJ[1]-1]);
            }
        }
       
        console.log(this.top+this.right+this.bottom+this.left)
        return this.top+this.right+this.bottom+this.left;
    }

    test(element,listOfDirDivs){
        let aa=this.te(element);
        let dt = aa.split("");
        let cont = 0;
        for (let i = 0; i < dt.length; i++) {
            (dt[i]==1)?cont++:cont=0;
            // if(dt[i]+dt[i+1]== "10" && cont!=2 && aa ==! "1000"&& aa ==! "0010"){

            // }else{

            // }
            if(cont==2){ //1100 1110 1111 0011 0110 0111 1101 1011
                element.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"1",listOfDirDivs);
                break;
            }
        }
        if(aa=="1000"){
            element.className += this.allTheShape(this.bottom,this.right,this.top,this.left,"0",listOfDirDivs);
        }else if(aa=="0100"){
            element.className += this.allTheShape(this.top,this.left,this.bottom,this.right,"0",listOfDirDivs);
        }else if(aa=="0010"){
            element.className += this.allTheShape(this.bottom,this.right,this.top,this.left,"0",listOfDirDivs);
        }else if(aa=="0001"){
            element.className += this.allTheShape(this.top,this.left,this.bottom,this.right,"0",listOfDirDivs);
        }else if(aa=="1010"){
            element.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"0",listOfDirDivs);
        }else if(aa=="0101"){
            element.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"0",listOfDirDivs);
        }else if(aa=="1001"){
            element.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"1",listOfDirDivs);
        }else{
            element.className += this.allTheShape("0","0","0","0","1",listOfDirDivs);
        }            

    }
    listOfNodes=[[]]; 
    display(){
        // add the drawingSpace 
        this.parent.appendChild(this.drawingSpace);
       
        //set the styles
          //create same Css Class
        let toolsHelper = new ToolsHelper();
        toolsHelper.createClass(null,"node",this.style.node);
        toolsHelper.createClass(null,"centerCol",this.style.centerColClass);
        toolsHelper.createClass(null,"circle",this.style.circleClass);
        toolsHelper.createClass(null,"drawingSpace",this.style.drawingSpace);
            // Nodes Shape Classes
        toolsHelper.createClass(null,"dot",this.style.dot);
        toolsHelper.createClass(null,"horizontalLine",this.style.horizontalLine);
        toolsHelper.createClass(null,"verticalLine",this.style.verticalLine);
        toolsHelper.createClass(null,"startLine_top",this.style.startLine_top);
        toolsHelper.createClass(null,"startLine_right",this.style.startLine_right);
        toolsHelper.createClass(null,"startLine_bottom",this.style.startLine_bottom);
        toolsHelper.createClass(null,"startLine_left",this.style.startLine_left);
        //set the class for drawing Space
        this.drawingSpace.className = "drawingSpace";

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
            this.listOfNodes[i][j]=timp;

            let listOfDirDivs=this.createNode(timp);
            // EVENT
            timp.addEventListener("click",(w) =>{
                if(!timp.classList.contains("edited")){
                    
                    this.test(timp,listOfDirDivs);
                    
                    this.listEl.forEach((a)=>{
                        a.innerHTML="";
                        let listOfDirDivs=this.createNode(a);
                        this.test(a,listOfDirDivs);  
                        
                        console.log(a);
                    });
                }
            });

            this.drawingSpace.appendChild(timp);
            if(j == pixelW_No-1){
                i++
                this.listOfNodes[i]=[];
                j=0;
            }else{
                j++
            }
            a++;
        }
        this.drawingSpace.style.margin="auto";
        this.drawingSpace.style.height = `${newHeight}%`;
    }

    dot(element){
        element.className += " dot";
        // timp.style.margin="8.7px";
        // timp.style.border="3px solid #844C18";
        // timp.style.borderRadius="50%"
        // timp.style.backgroundColor = "#F37C22 ";
    }
    horizontalLine(element){
        element.className += " horizontalLine";
        // timp.style.margin="3px 0";
        // timp.style.borderTop="3px solid #844C18";
        // timp.style.borderBottom="3px solid #844C18";
        // timp.style.backgroundColor = "#F37C22 ";
    }
    verticalLine(element){
        element.className += " verticalLine";
        // timp.style.margin="0 15px";
        // timp.style.borderLeft="3px solid #844C18";
        // timp.style.borderRight="3px solid #844C18";
        // timp.style.backgroundColor = "#F37C22 ";
    }

    startLine(element, dir){
        if(dir === "top"){//
            element.className += "startLine_top";
            // timp.style.margin="0px 15px";
            // timp.style.borderRight="3px solid #844C18";
            // timp.style.borderTop="3px solid #844C18";
            // timp.style.borderLeft="3px solid #844C18";
            // timp.style.borderRadius="15px 15px 0 0"
            // timp.style.backgroundColor = "#F37C22 ";
        }else if(dir === "right"){
            element.className += " startLine_right";
            // timp.style.margin="15px 0px";
            // timp.style.borderTop="3px solid #844C18";
            // timp.style.borderBottom="3px solid #844C18";
            // timp.style.borderRight="3px solid #844C18";
            // timp.style.borderRadius="0 15px 15px 0"
            // timp.style.backgroundColor = "#F37C22 ";
        }else if(dir === "bottom"){//
            element.className += " startLine_bottom";
            // timp.style.margin="0px 15px";
            // timp.style.borderRight="3px solid #844C18";
            // timp.style.borderBottom="3px solid #844C18";
            // timp.style.borderLeft="3px solid #844C18";
            // timp.style.borderRadius="0 0 15px 15px"
            // timp.style.backgroundColor = "#F37C22 ";
        }else if(dir === "left"){
            element.className += " startLine_left";
            // timp.style.margin="15px 0px";
            // timp.style.borderTop="3px solid #844C18";
            // timp.style.borderBottom="3px solid #844C18";
            // timp.style.borderLeft="3px solid #844C18";
            // timp.style.borderRadius="15px 0 0 15px"
            // timp.style.backgroundColor = "#F37C22 ";
        }

    }

}

export default DrawingSpace;



// #F37C22 ==> #844C18   

// 243,124,34

// 132,76,24

// #840065   #F300B4

// 132,0,101
// 243,0,180













        // else if()1100 1110 1111 0011 0110 0111 1101 1011

        // }else if(aa=="1100"){
        //     timp.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"1",listOfDirDivs);
        // }else if(aa=="1110"){
        //     timp.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"1",listOfDirDivs);
        // }else if(aa=="1111"){
        //     timp.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"1",listOfDirDivs);
        // }else if(aa=="0011"){
        //     timp.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"1",listOfDirDivs);
        // }else if(aa=="0110"){
        //     timp.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"1",listOfDirDivs);
        // }else if(aa=="0111"){
        //     timp.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"1",listOfDirDivs);
        // }else if(aa=="1101"){
        //     timp.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"1",listOfDirDivs);
         // }else if(aa=="1011"){
        //     timp.className += this.allTheShape(this.top,this.right,this.bottom,this.left,"1",listOfDirDivs);