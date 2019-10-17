class Tools{
    constructor(){

    }
    // Create class in style and add it to the element
    createClass(element, _className, sty){
        try {
            let style=document.querySelector("style");
            style.innerHTML += `.${_className} {\n\t${sty} \n}\n`;
            
            if(element !== null)
                element.className = _className ;
        }
        catch(error) {
            console.error("error in createSelector(): "+error);
        }
    }

}

export default Tools;
