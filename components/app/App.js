import TopBar from "../topBar/TopBar.js";
import DrawingSpace from "../drawingSpace/DrawingSpace.js";
import Tools from "../tools/Tools.js";

class App{
    constructor(){

    }
    run(){
        //create style tag
        var style = document.createElement('style');
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
        // get the bodya
        const tools = new Tools();
        const root = document.querySelector("#root");
        // set the coloer for body
        root.style.backgroundColor = "#FFFCF7";

        // set a SideBar
        const topBar = new TopBar();

        // same setting for SideBar
        topBar.setBackgroundColor("#FFC05A");
        topBar.setHeight("50");
        topBar.setParent(root);

        // show the SideBar
        topBar.display();

        // add grid to the root
        const rowsSty = 
                        "height: 100%;"+
                        "\n\tdisplay: grid;"+
                        `\n\tgrid-template-rows: ${topBar.getHeight()}px auto;`
                        
        tools.createClass(root,"rows",rowsSty);


        const DS = new DrawingSpace();

        DS.setHeight(topBar.getHeight());
        DS.setParent(root);
        DS.display();
        
    }
}

export default App;