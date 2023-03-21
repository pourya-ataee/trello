// ==================================
// all sections (some functions to use)
// ==================================
// 1 - create elements
// 2 - add and remove hide class
// 3 - Add one or more events 
// ============================================================
// ============================================================
// ============================================================


/** 1 - create elements
 * 
 * @returns {HTMLElement}
 * @param {String} tagname 
 * @param {Object} attribute 
 * @param {HTMLElement | String | Array} content 
*/
function createElement(tagname, attribute, content){
    var el = document.createElement(tagname);
    if(Object.keys(attribute).length !== 0){
        for(var key in attribute){
            el.setAttribute(key, attribute[key]);
        }
    }
    if(typeof content !== "undefined"){
        if(Array.isArray(content)){
            for(var item of content){
                if(item instanceof HTMLElement){
                    el.appendChild(item);
                }
            }
        }
        else{
            if(content instanceof HTMLElement){
                el.appendChild(content);
            }
            else{
                el.innerText = content;
            }
        }
    }
    return el;
}



/** 2 - add and remove hide class from elements
 * 
 * @param {Array} addEl 
 * @param {Array} removeEl
*/
function toggleHideClass(addEl, removeEl){
    if(addEl !== []){
        for(var el of addEl){
            el.classList.add('hide')
        }
    }
    if(removeEl !== []){
        for(var el of removeEl){
            el.classList.remove('hide');
        }
    }
}



/** 3 - Add one or more listeners to an element
 * 
 * @param {DOMElement} el 
 * @param {String} events 
 * @param {Function} fn 
*/
function addMultiEventListener(el, events, fn) {
    events.split(' ').forEach(e => el.addEventListener(e, fn, false));
}