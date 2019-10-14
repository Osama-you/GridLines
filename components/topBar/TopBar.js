class TopBar {
    
    constructor(backgroundColor= "#FFC05A", height="50px", parent) {
        this.topBar = document.createElement("nav");
        this.backgroundColor = backgroundColor;
        this.height = height;
        this.parent = parent;
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

    addElement(){
        // yetDone
    }
    
    display(){
        this.parent.appendChild(this.topBar);
       
        // set the style
        this.topBar.style.backgroundColor = this.getBackgroundColor();

    }

}

export default TopBar;