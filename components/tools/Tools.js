class Tools{
    constructor(){

    }
    // Create class in style and add it to the element
    createClass(element, _className, sty){
        try {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `.${_className} { ${sty} }`;
            document.getElementsByTagName('head')[0].appendChild(style);
            element.className = _className ;
        }
        catch(error) {
            console.error("error in createSelector(): "+error);
        }
    }

}

export default Tools;
