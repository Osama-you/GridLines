import TopBar from "../topBar/TopBar.js";
import DrawingSpace from "../drawingSpace/DrawingSpace.js";

import ToolsHelper from "../toolsHelper/ToolsHelper.js";

class App{
    constructor(){

    }
    run(){
        //create style tag
        var style = document.createElement('style');
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
        // get the bodya
        const toolsHelper = new ToolsHelper();
        const root = document.querySelector("#root");
        // set the coloer for body
        root.style.backgroundColor = "#FFFCF7";

        // set a SideBar
        const topBar = new TopBar();

        // same setting for SideBar
        topBar.setBackgroundColor("#FFC05A");
        topBar.setHeight("50");
        topBar.setParent(root);

        topBar.addElement_color("F37C22");
        topBar.addElement_color("F300B4");
        topBar.addElement_color("2ECC71");
        topBar.addElement_color("E74C3C");
        topBar.addElement_color("8E44AD");

        // show the SideBar
        topBar.display();

        // add grid to the root
        const rowsSty = 
                    "height: 100%;"+
                    "\n\tdisplay: grid;"+
                    `\n\tgrid-template-rows: ${topBar.getHeight()}px auto;`
                        
        toolsHelper.createClass(root,"rows",rowsSty);


        const DS = new DrawingSpace();

        DS.setHeight(topBar.getHeight());
        DS.setParent(root);
        DS.setLineColor("F37C22");
        DS.display();
        let cal =topBar.getcolorC();
        setInterval(function(){ 
            if(cal!=topBar.getcolorC()){
                DS.setLineColor(topBar.getcolorC());
                cal =topBar.getcolorC();
            }
        });
        
    }
}

export default App;
