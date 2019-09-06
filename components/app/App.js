import SideBar from "../sideBar/SideBar.js";
import DrawingSpace from "../drawingSpace/DrawingSpace.js";

class App{
    constructor(){

    }
    run(){
        // get the body
        const root = document.querySelector("#root");
        // set the coloer for body
        root.style.backgroundColor = "#232327";

        // set a SideBar
        const sidebar = new SideBar();
        // same setting for SideBar
        sidebar.setBackgroundColor("#3C3552");
        sidebar.setInitWidth("10px");
        sidebar.setHeight("86vh");
        sidebar.setSpeed(0.5);
        sidebar.setParent(root);
        // show the SideBar
        sidebar.display();
        // console.log(root.clientWidth)
        // root.style.margin = sidebar.getInitWidth();

        const DS = new DrawingSpace();
        DS.setParent(root);
        DS.display();

    }
}

export default App;