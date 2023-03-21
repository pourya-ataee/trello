// ==================================
// all sections (create elements)
// ==================================
// 1 - create list
// 2 - create Card
// 3 - create text area
// 4 - create drop location
// ============================================================
// ============================================================
// ============================================================



var listId = 0
/** 1 - create list
 * 
 * @param {String} title 
*/
function createListNode(title){
    const dragLocation = createElement('div', {class: "drag-location", style: `height: 8px`});
    dragLocation.addEventListener('dragenter', function(){
        dragLocation.style.height = "32px";
        dragLocation.style.background = "#d8d9dd";
        dragLocation.classList.add('drag-active');
    });
    dragLocation.addEventListener('dragleave', function(){
        dragLocation.style.height = "8px";
        dragLocation.style.background = "unset"; 
        dragLocation.classList.remove('drag-active');
    });

    return  createElement('div', {class: 'card-box'}, 
                createElement('div', {class: "trello-card"}, 
                    [
                        createElement('div', {class: "card-title-container"},
                            [
                                createElement('h4', {class: "card-title dont-select active"}, title),
                                createElement('input', {type: "text", class: "card-title-input hide"})
                            ]
                        ),
                        createElement('div', {class: 'card-menu'},
                            createElement('i', {class: "card-menu-img fas fa-times"})
                        ),
                        createElement('div', {class: "card-menu-cancel-title hide"},
                            createElement('i', {class: "card-menu-img-cancel-title fas fa-long-arrow-alt-left"})
                        ),
                        createElement('div', {class: "task-container"}, 
                            createElement('ul', {class: "tasks-list", id: `list-${listId++}`},
                                [
                                    dragLocation,
                                    createElement('li', {class: "add-card-list"},
                                        createElement('div', {class: "add-another-card-form hide"},
                                            [
                                                createElement('textarea', {class: "add-card-input", type: "text", placeholder: "Enter a title for this card..."}),
                                                createElement('button', {class: "add-card-confirm dont-select"}, 'Add Card'),
                                                createElement('button', {class: "add-card-cancel dont-select"},
                                                    createElement('i', {class: "add-card-cancel-icon fas fa-times"})
                                                )
                                            ]
                                        )
                                    )
                                ]
                            ) 
                        ),
                        createElement('div', {class: 'add-task-container'},
                            [
                                createElement('div',{class: "add-task dont-select"},
                                    [
                                        createElement('i',{class: "add-card-margin fas fa-plus"}),
                                        createElement('span', {class: "add-another-card-button"}, 'Add another card')
                                    ]
                                ),
                                createElement('span', {class: 'task-save'},
                                    createElement('i', {class: "task-save-icon fas fa-save"})
                                )
                            ]
                        )
                    ]
                )
            );
}






var cardId = 0
/** 2 - create Card Node
 * 
 * @param {String} title 
*/
function createCardNode(title){
    return  createElement('li', {class: 'task', draggable: true, id: `card-${cardId++}`},
                            [
                                createElement('span', {class: "task-edit-button-container"},
                                    createElement('i', {class: "task-edit-button far fa-edit"})
                                ),
                                createElement('span', {class: "task-remove-button-container"},
                                    createElement('i', {class: "remove-card card-menu-img fas fa-times"})
                                ),
                                createElement('span', {class: 'task-text'}, title)
                            ]    
            )
}







/** 3 - create text area
 * 
 * @param {String} title 
 */
function createTextareaNode(){
    return  createElement('textarea', {class: "edit-card-textarea"})
}






/** 4 - create drop location when some card dragged */
function createDragLocation(){
    const dragLocation = createElement('div', {class: "drag-location", style: `height: 8px`});
    
    
    dragLocation.addEventListener('dragenter', function(){
        dragLocation.style.height = "32px";
        dragLocation.style.background = "#d8d9dd";
        dragLocation.classList.add('drag-active');
    });
    dragLocation.addEventListener('dragleave', function(){
        dragLocation.style.height = "8px";
        dragLocation.style.background = "unset"; 
        dragLocation.classList.remove('drag-active');
    });
    
    
    return dragLocation
}