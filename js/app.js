// ==================================
// all sections (just eventListeners)
// ==================================
// 1 - change title button to input
// 2 - add or remove or edit lists
// 3 - add or remove or edit cards
// 4 - drag and drop cards
// ============================================================
// ============================================================
// ============================================================


/** event for prevent default action on enter in textarea */
document.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        for(var i of document.querySelectorAll('textarea')){
            e.preventDefault();
            i.value.replace(/^\n+$/g, "");
        }
    }
});

document.querySelector('.search-button').addEventListener('click', function(){
    document.querySelector('.search-input').focus();
})


// ==================================
// 1 - change title button to input (htmlelement)
// ==================================

addMultiEventListener(document, 'click keyup', function(e){
    if(document.querySelector('.board-title-input').classList.contains('active')){
        if(e.keyCode === 13 || e.keyCode === 27 || e.target !== document.querySelector('.board-title-input')){
            boardTitleEdit();
        }
    }
    else{
        if(e.target === document.querySelector('.board-title')){
            changeTitleCta();
        }
    }   
});



// ==================================
// 2 - add or remove or edit lists
// ==================================

// change add list button to input (htmlelement)
addMultiEventListener(document, 'click keyup', function(e){
    addListButtonCta(e);
});
//add list
addMultiEventListener(document, 'click keyup', function(e){
    if(e.keyCode === 13 || e.target === document.querySelector('.add-list-confirm')){  
        addListNode();
    }
});
// remove list
document.querySelector('.card-wrapper').addEventListener('click', function(e){
    var listCancel = document.querySelectorAll('.card-menu');
    for(var i of listCancel){
        if(e.target === i || e.target === i.children[0] || e.target === i.children[0].children[0]){
            removeList(e.target)
        }
    }
});

// ============================================================



// ==================================
// 3 - add or remove or edit cards
// ==================================

// change card title
addMultiEventListener(document, 'click keyup', function(e){
    var cardsTitle = document.querySelectorAll('.card-title');
    var cardTitleActive = e.target.classList.contains('active');
    for(var i of cardsTitle){
        if(!i.classList.contains('active')){
            if(e.keyCode === 13 || e.keyCode === 27 || e.target !== i.closest('.card-title-container').children[1] || e.target === i.closest('.trello-card').children[2] || e.target === i.closest('.trello-card').children[2].children){
                changeCardTitle(i);
            }
        }
    }
    if(cardTitleActive){
        for(var i of cardsTitle){
            if(e.target === i){
                changeCardTitleCta(e.target);
            }
        }
    }
});

// add card
addMultiEventListener(document, 'click keyup', function(e){
    for(var el of document.querySelectorAll('.add-card-input')){
        if(!el.classList.contains('card-active')){
            var i = el.closest('.trello-card').querySelector('.add-task')
            if(e.target === i || e.target === i.children[0] || e.target === i.children[1]){
                var thisElement = i;
                addCard(thisElement);
            }
        }
        else{
            if(e.keyCode === 27 || e.target === el.closest('.add-another-card-form').querySelector('.add-card-cancel') || e.target === el.closest('.add-another-card-form').querySelector('.add-card-cancel-icon') || e.target === el.closest('.add-another-card-form').querySelector('.add-card-cancel-icon').children[0]){
                cancelAddCard(el);
            }
            else if(e.target === el.closest('.add-another-card-form').querySelector('.add-card-confirm') || e.keyCode === 13){
                confirmCard(el);
            }
            else if(e.target !== el.closest('.add-another-card-form').querySelector('.add-card-input') && e.target !== el.closest('.add-another-card-form')){
                finishConfirmCard(el);
            }
        }
    };
});

// edit or remove card
addMultiEventListener(document, 'click keyup', function(e){
    // remove
    if(e.target.classList.contains('task-remove-button-container') || e.target.classList.contains('remove-card') || e.target.parentElement.classList.contains('remove-card')){
        confirmEditCard();
        e.target.closest('.task').nextElementSibling.remove();
        e.target.closest('.task').remove();
    }
    // edit
    else if(!document.querySelector('.task-active') && (e.target.classList.contains('task-edit-button-container') || e.target.classList.contains('task-edit-button') || e.target.parentElement.classList.contains('task-edit-button'))){
        editCard(e.target);
    }
    else if(!!document.querySelector('.edit-card-textarea')){
        if(!!document.querySelector('.task-active') && (e.target.classList.contains('task-edit-button-container') || e.target.classList.contains('task-edit-button') || e.target.parentElement.classList.contains('task-edit-button'))){
            confirmEditCard();
            editCard(e.target);
        }
        else if((!e.target.classList.contains('edit-card-textarea') && !e.target.parentElement.classList.contains('task active')) || e.keyCode === 13){
            confirmEditCard();
        }
        else if(e.keyCode === 27){
            cancelEditCard();
        }
    }
})

// ============================================================


// ==================================
// 4 - drag and drop cards
// ==================================

// DRAG START
document.addEventListener('dragstart', function(e){
    if(e.target.classList.contains('task')){
        e.dataTransfer.setData('text/html', e.target.id);
        e.target.nextElementSibling.classList.add('removable-card');
    }
});
document.addEventListener('dragend', function(){
    if(!document.querySelector('.drag-active') && !!document.querySelector('.removable-card')){
        document.querySelector('.removable-card').classList.remove('removable-card')
    }
});

// ============================================================