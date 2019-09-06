class SideBar {
    
    style = { 
        lSideBar:
           `position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            border-radius: 0 26px 26px 0;
            margin: auto 0;` 
    };

    constructor(backgroundColor= "#3C3552",initWidth= "10px",finalWidth= "55px",height="86vh", speed= 0.5, parent) {
        this.lSideBar = document.createElement("aside");
        this.backgroundColor = backgroundColor;
        this.initWidth = initWidth;
        this.finalWidth = finalWidth;
        this.height = height;
        this.speed = speed;
        this.parent = parent;
    }

    // getters and setters
    getBackgroundColor(){
        return this.backgroundColor;
    }
    setBackgroundColor(backgroundColor){
        this.backgroundColor = backgroundColor;
    }
    getInitWidth(){
        return this.initWidth;
    }
    setInitWidth(initWidth){
        this.initWidth = initWidth;
    }
    getFinalWidth(){
        return this.finalWidth;
    }
    setFinalWidth(finalWidth){
        this.finalWidth = finalWidth;
    }
    getHeight(){
        return this.height;
    }
    setHeight(height){
        this.height = height;
    }
    getSpeed(){
        return this.speed;
    }
    setSpeed(speed){
        this.speed = speed;
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
   

    addElement(){
        // yetDone
    }
    


    display(){
        this.parent.appendChild(this.lSideBar);
       
        // set the style
        this.lSideBar.style = this.style.lSideBar;
        this.lSideBar.style.backgroundColor = this.getBackgroundColor();
        this.lSideBar.style.width = this.getInitWidth();
        this.lSideBar.style.height = this.getHeight();
        this.lSideBar.style.transition = `${this.getSpeed()}s`

        // show and hide the SideBar
        this.lSideBar.addEventListener("mouseover",()=>{
            this.lSideBar.style.width = this.getFinalWidth();
        })
        this.lSideBar.addEventListener("mouseout",()=>{
            this.lSideBar.style.width = this.getInitWidth();
        })
    }

}

export default SideBar;