import ToolsHelper from "../toolsHelper/ToolsHelper.js";

class TopBar {
    style = { 
        eColorC:
          "height: 20px;"+
          "\n\twidth: 20px;"+
          "\n\tborder: 3px solid;"+
          "\n\tborder-radius: 50%;"+
          "\n\tmargin: 8.7px;"
          
    }
    constructor(backgroundColor= "#FFC05A", height="50px", colorC = "F37C22" , parent) {
        this.topBar = document.createElement("nav");
        this.backgroundColor = backgroundColor;
        this.height = height;
        this.parent = parent;
        this.colorC = colorC;
    }

    // getters and setters
    getBackgroundColor(){
        return this.backgroundColor;
    }
    setBackgroundColor(backgroundColor){
        this.backgroundColor = backgroundColor;
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
    getLSideBar(){
        return this.lSideBar;
    }
    getcolorC(){
        return this.colorC;
    }

    addElement_color(C){
        let toolsHelper = new ToolsHelper();
        toolsHelper.createClass(null,"eColorC",this.style.eColorC);

        let contenrC = document.createElement("div");
        contenrC.style.width = `${this.height}px`;

        let color = document.createElement("div");
        color.className="eColorC colorLine_"+C;


        contenrC.appendChild(color);
        this.topBar.appendChild(contenrC);

        color.addEventListener("click",(e) =>{
            
            this.colorC=C;
        });

    }
    
    display(){
        
        
        this.parent.appendChild(this.topBar);


        // set the style
        this.topBar.style.backgroundColor = this.getBackgroundColor();
        this.topBar.style.display = "flex";
    }

}

export default TopBar;