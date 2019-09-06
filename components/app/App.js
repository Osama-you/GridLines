import SideBar from "../sideBar/SideBar.js";

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

        root.style.margin = `0 ${sidebar.getInitWidth()}`;
    }
}

export default App;