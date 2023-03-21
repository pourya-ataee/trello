// ==================================
// all sections (just functions)
// ==================================
// 1 - change board title
// 2 - add and remove list
// 3 - card title
// 4 - add card
// 5 - edit cards
// ============================================================
// ============================================================
// ============================================================


// ==================================
// 1 - change board title
// ==================================

/** change title button to input (htmlelement)*/
function changeTitleCta(){
    var boardTitle = document.querySelector('.board-title');
    var boardTitleInput = document.querySelector('.board-title-input');
    boardTitleInput.classList.add('active');
    boardTitleInput.value = boardTitle.innerText;
    toggleHideClass([boardTitle], [boardTitleInput]);
    boardTitleInput.focus();
    boardTitleInput.select();
}


/** edit title text */
function boardTitleEdit(){
    var boardTitle = document.querySelector('.board-title');
    var boardTitleInput = document.querySelector('.board-title-input');
    if(boardTitleInput.value !== "" && !/^\s+$/g.test(boardTitleInput.value)){ 
        boardTitleInput.classList.remove('active');
        boardTitle.innerText = boardTitleInput.value;
        document.querySelector('title').innerText = `${boardTitleInput.value} | Trello`
        boardTitleInput.value = "";
        toggleHideClass([boardTitleInput], [boardTitle]);
    }
    
}

// ============================================================









// ==================================
// 2 - add and remove list
// ==================================

/** change add list button to input
 * 
 * @param {HTMLElement} clickTarget 
*/
function addListButtonCta(clickTarget){
    var addListButton = document.querySelector('.add-another-list');
    var addListForm = document.querySelector('.add-another-list-form');
    var addListCancel = document.querySelector('.add-list-cancel');
    if(clickTarget.target === addListButton || clickTarget.target === addListButton.children[0] || clickTarget.target === addListButton.children[1]){
        toggleHideClass([addListButton], [addListForm]);
        document.querySelector('.add-list-input').focus();
    }
    // cancel
    else if(clickTarget.keyCode === 27 || clickTarget.target ===  addListCancel || (clickTarget.target !== addListForm && clickTarget.target !== addListForm.children[0] && clickTarget.target !== addListForm.children[1])){
        toggleHideClass([addListForm], [addListButton]);
        document.querySelector('.add-list-input').value = "";
    }
}


/** add list node */
function addListNode(){
    var addListInput = document.querySelector('.add-list-input');
    if(addListInput.value !== "" && !/^\s+$/g.test(addListInput.value)){
        var createList = createListNode(addListInput.value);    
        document.querySelector('.card-wrapper').insertBefore(createList, document.querySelector('.add-another-list'));




        // DROP
        createList.querySelector('.tasks-list').addEventListener('drop', function(e){
            e.preventDefault();
            if(e.dataTransfer.getData('text/html').split('-')[0] === 'card'){
                if(!!document.querySelector('.drag-active')){
                    const removableCard = document.querySelector('.removable-card');
                    const dragActive = document.querySelector('.drag-active');
                    if(removableCard.classList.contains('drag-active')){
                        createList.querySelector('.tasks-list').insertBefore(document.getElementById(e.dataTransfer.getData('text/html')), document.querySelector('.drag-active'));
                        removableCard.classList.remove('removable-card');
                    }
                    else{
                        removableCard.remove();
                        createList.querySelector('.tasks-list').insertBefore(document.getElementById(e.dataTransfer.getData('text/html')), document.querySelector('.drag-active'));
                        createList.querySelector('.tasks-list').insertBefore(createDragLocation(), document.getElementById(e.dataTransfer.getData('text/html')));
                    }
                    dragActive.style.height = "8px";
                    dragActive.style.background = "unset";
                    dragActive.classList.remove('drag-active');
                }
            }
        });

        // DRAG OVER
        createList.querySelector('.tasks-list').addEventListener('dragover', function(e){
            e.preventDefault();
        });




        document.querySelector('.add-list-input').value = "";
        document.querySelector('.add-list-input').focus();
        document.querySelector('.card-container').scrollTo(document.querySelector('.card-container').scrollWidth, 0);
    }
}


/** remove list node
 * 
 * @param {HTMLElement} eTarget 
 */
function removeList(eventTarget){
    eventTarget.closest('.card-box').remove();
}

// ============================================================







// ==================================
// 3 - card title
// ==================================

/** change card title button to input (htmlelement)
 * @param {HTMLElement} eventTarget
*/
function changeCardTitleCta(eventTarget){
    eventTarget.closest('.card-title-container').classList.add('card-title-container-active');
    var titleCardInput = eventTarget.closest('.card-title-container').children[1];
    titleCardInput.value = eventTarget.innerText;
    toggleHideClass([eventTarget, eventTarget.closest('.trello-card').children[1]], [titleCardInput, eventTarget.closest('.trello-card').children[2]]);
    titleCardInput.focus();
    titleCardInput.select();
    eventTarget.classList.remove('active');
}


/** edit card title
 * 
 * @param {HTMLElement} thisItem 
 */
function changeCardTitle(thisItem){
    var eventTarget = thisItem;
    var titleCardInput = eventTarget.closest('.card-title-container').children[1];
    if(titleCardInput.value !== "" && !/^\s+$/g.test(titleCardInput.value)){
        eventTarget.closest('.card-title-container').classList.remove('card-title-container-active');
        eventTarget.innerText = titleCardInput.value;
        toggleHideClass([titleCardInput, eventTarget.closest('.trello-card').children[2]], [eventTarget, eventTarget.closest('.trello-card').children[1]]);
        titleCardInput.value = "";
        eventTarget.classList.add('active');
    }
}

// ============================================================







// ==================================
// 4 - add card
// ==================================


/** add card
 * 
 * @param {HTMLElement} target 
*/
function addCard(target){
    var eParent = target.closest('.trello-card').querySelector('.add-another-card-form');
    toggleHideClass([target.closest('.add-task-container')], [eParent]);
    eParent.children[0].focus();
    autosize(eParent.children[0]);
    eParent.querySelector('.add-card-input').classList.add('card-active');
    target.closest('.trello-card').querySelector('.task-container').scrollTo(0, target.closest('.trello-card').querySelector('.task-container').scrollHeight)
}


/** cancel card
 * 
 * @param {HTMLElement} target 
*/
function cancelAddCard(target){
    var eParent = target.closest('.trello-card').querySelector('.add-task-container');
    toggleHideClass([target.closest('.add-another-card-form')], [eParent]);
    target.removeAttribute('style');
    target.value = "";
    target.classList.remove('card-active');
}


/** confirm card
 * 
 * @param {HTMLElement} target 
*/
function confirmCard(target){
    if(target.value !== "" && !/^\s+$/g.test(target.value)){
        var cardNode = createCardNode(target.value);
        target.closest('.tasks-list').insertBefore(cardNode, target.closest('.add-card-list'));
        target.closest('.tasks-list').insertBefore(createDragLocation(), target.closest('.add-card-list'));

        target.removeAttribute('style');
        target.value = "";
        target.focus();
        target.closest('.trello-card').querySelector('.task-container').scrollTo(0, target.closest('.trello-card').querySelector('.task-container').scrollHeight);
    }
}


/** dont make another card when click on other side
 * 
 * @param {HTMLElement} target 
 */
function finishConfirmCard(target){
    var eParent = target.closest('.trello-card').querySelector('.add-task-container');
    if(target.value === "" || /^\s+$/g.test(target.value)){
        target.removeAttribute('style');
        target.value = "";
        toggleHideClass([target.closest('.add-another-card-form')], [eParent]);
        target.classList.remove('card-active');
    }
    else{
        target.closest('.tasks-list').insertBefore(createCardNode(target.value), target.closest('.add-card-list'));
        target.closest('.tasks-list').insertBefore(createDragLocation(), target.closest('.add-card-list'));
        target.removeAttribute('style');
        target.value = "";
        toggleHideClass([target.closest('.add-another-card-form')], [eParent]);
        target.classList.remove('card-active');
    }
}

// ============================================================







// ==================================
// 5 - edit cards
// ==================================

/** edit card
 * 
 * @param {HTMLElement} target 
 */
function editCard(target){
    var textParent = target.closest('.task');
    textParent.classList.add('task-active');
    textParent.appendChild(createTextareaNode());
    document.querySelector('.edit-card-textarea').value = textParent.querySelector('.task-text').innerText;
    autosize(document.querySelector('.edit-card-textarea'));
    document.querySelector('.edit-card-textarea').focus();
    document.querySelector('.edit-card-textarea').select();
    toggleHideClass([textParent.querySelector('.task-text'), textParent.querySelector('.task-edit-button-container'), textParent.querySelector('.task-remove-button-container')], []);
}


/** confirm edit card */
function confirmEditCard(){
    if(!!document.querySelector('.edit-card-textarea')){
        var textParent = document.querySelector('.edit-card-textarea').parentElement;
        textParent.classList.remove('task-active');
        if(document.querySelector('.edit-card-textarea').value === "" || /^\s+$/g.test(document.querySelector('.edit-card-textarea').value)){
            textParent.remove();
        }
        else{
            textParent.querySelector('.task-text').innerText = document.querySelector('.edit-card-textarea').value;
            document.querySelector('.edit-card-textarea').remove();
            toggleHideClass([], [textParent.querySelector('.task-text'), textParent.querySelector('.task-edit-button-container'), textParent.querySelector('.task-remove-button-container')]);
        }
    }
}


/** cancel edit card */
function cancelEditCard(){
    var textParent = document.querySelector('.edit-card-textarea').parentElement;
    textParent.classList.remove('task-active');
    document.querySelector('.edit-card-textarea').remove();
    toggleHideClass([], [textParent.querySelector('.task-text'), textParent.querySelector('.task-edit-button-container'), textParent.querySelector('.task-remove-button-container')]);
}

// ============================================================