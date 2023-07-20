const notStartedList = document.getElementById('not-started');
const doingList = document.getElementById('doing');
const doneList = document.getElementById('done');
const addBtns = document.querySelectorAll('.add');
const tempEl = document.getElementById('component');
const listsEl = document.querySelectorAll('ul');

let offsets = [];

let dragHandler;

const locatedTasks = JSON.parse(
    localStorage.getItem('tasks')
);

let listOFTasks = localStorage.getItem('tasks') !== null ?
    locatedTasks : [];

const listItems = [];

function render() {
    listOFTasks.forEach(task => {
        createLiEl(task.parentId, task.id, task.text, false);
    });
    dragHandler();
    handleTheLists();
}

// render();

function createLiEl(
    parentId, elId, inputValue, options = true
) {
    const newLiEl = document.importNode(tempEl.content, true);
    const liEl = newLiEl.querySelector('li');
    liEl.draggable = true;
    liEl.id = elId;

    liEl.style.cursor = 'grab';

    document.getElementById(`${parentId}`)
        .appendChild(liEl);

    const parentLength = document.getElementById(`${parentId}`)
        .querySelectorAll('li').length;

    listItems.push(liEl);

    const inputEl = document.getElementById(liEl.id)
        .querySelector('input');

    options === true ? inputEl.placeholder += `${parentLength}` : false;
    inputEl.value = options === true ?
        inputEl.placeholder : inputValue;

    inputEl.addEventListener('focusout', function () {
        // console.log(liEl.id);
        this.disabled = true;
    });

    inputEl.addEventListener('change', (e) => {
        console.log(e.currentTarget.closest('li'), inputEl.value);
        const text = inputEl.value;
        const liId = e.currentTarget.closest('li').id;

        listOFTasks
            .forEach(task => {
                if (task.id === liId) {
                    task.text = text;
                }
            });

        updateLocalStorage(listOFTasks);
    });


    const editEl = liEl.querySelector('.icons .edit');
    // console.log(editEl);

    editEl.addEventListener('click', () => {
        inputEl.disabled = false;
        inputEl.focus();
        inputEl.select();
    });

    const deleteEl = liEl.querySelector('.icons .remove');
    deleteEl.addEventListener('click', function remove(e) {
        // console.log(e.currentTarget.closest('ul'), inputEl.value);
        const el = document
            .getElementById(
                e.currentTarget.closest('li').id
            );

        const list = document
            .getElementById(
                `${e.currentTarget.closest('ul').id}`
            );

        console.log(el);
        console.log(list);
        // const targetEl = list.querySelector(`#${el.id}}`);
        // console.log(targetEl);
        list.removeChild(el);
        listOFTasks = listOFTasks.filter(task => task.id !== el.id);
        updateLocalStorage(listOFTasks);

        handleTheLists();
    });

    if (options) {
        inputEl.disabled = false;
        inputEl.focus();
        inputEl.select();

        const newTask = {
            id: liEl.id,
            parentId: parentId,
            text: inputEl.value === null ?
                inputEl.placeholder
                : inputEl.value,
        };

        listOFTasks.push(newTask);
        updateLocalStorage(listOFTasks);
        dragHandler();
        handleTheLists();
    }
}

let dragStartId;
let startUlId;

function dragStart(e) {
    dragStartId = this.closest("li").id;
    startUlId = this.closest('ul').id;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    const el = e.currentTarget;
    if (el.id !== dragStartId) {
        el.classList.add('enter');
    }
}

function dragLeave(e) {
    const el = e.currentTarget;
    el.classList.remove('enter');
}

function dragDrop(e) {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id !== dragStartId) {
        const targetUlID = e.currentTarget.closest('ul').id;

        const targetLi = e.currentTarget.closest('li');

        const liEl = document.getElementById(dragStartId);

        listItems.forEach(item => {
            if (item === liEl) {
                listOFTasks.map(task => {
                    if (task.id === liEl.id) {
                        task.parentId = targetUlID;
                        return task;
                    } else {
                        return task;
                    }
                });

                updateLocalStorage(listOFTasks);
                targetLi.insertAdjacentElement('afterend', liEl)
            }
        });

        targetLi.classList.remove('enter');
        handleTheLists();
    }
}

function updateLocalStorage(list) {
    localStorage.setItem('tasks', JSON.stringify(list));
}

addBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const parentId =
            e.currentTarget.previousElementSibling.id;

        const elementId = `${Math.floor(Math.random() * 1000)}`;

        createLiEl(parentId, elementId);
    });
});

// Handle the lists
function leave(e) {
    this.style.marginBottom = '0';
}

function over(e) {
    e.preventDefault();
    this.style.marginBottom = '2rem';
}

function drop(e) {

    const liEl = document.getElementById(dragStartId);
    listItems.forEach(listItem => {
        if (listItem === liEl) {
            listOFTasks.map(task => {
                if (task.id === liEl.id) {
                    task.parentId = this.id;
                    return task;
                } else {
                    return task;
                }
            });

            updateLocalStorage(listOFTasks);
            this.insertAdjacentElement('beforeend', liEl)

        }
    });

    this.style.marginBottom = '0';
    handleTheLists();
}


function handleTheLists() {
    listsEl.forEach(item => {
        item.removeEventListener('dragover', over);
        item.removeEventListener('dragleave', leave);
        item.removeEventListener('drop', drop);
        const li = item.querySelectorAll('li');

        if (!li.length) {
            item.draggable = true;
            let rect = item.getBoundingClientRect();
            const offset = rect.top + window.scrollY;

            const newList = {
                item: item,
                offsetTop: offset,
                offsetBottom: offset + rect.height,
                empty: true,
            }

            offsets.push(newList);

            item.addEventListener('dragover', over);
            item.addEventListener('dragleave', leave);
            item.addEventListener('drop', drop);
        }
    });
}

/* Storing user's device details in a variable */
let details = navigator.userAgent;

/*
    Creating a regular expression
    containing some mobile devices keywords
    to search it in details string
*/
let regexp = /android|iphone|kindle|ipad/i;

/*
    Using test() method to search regexp in details
    it returns boolean value
*/
let isMobileDevice = regexp.test(details);


function touchStart() {
    this.style.opacity = '0.3';
}

const bodyRect = document.body.getBoundingClientRect();

// console.log(bodyRect);

function touchMove(e) {
    e.preventDefault();
    this.style.zIndex = `99`;

    let touchLocation = e.targetTouches[0];

    const offset = offsets.find(i => this === i.item ? i.offsetTop : false);

    this.style.top = `${touchLocation.pageY - offset.offsetTop}` + 'px';

    offsets.forEach(i => {
        if (touchLocation.pageY > i.offsetTop && touchLocation.pageY < i.offsetBottom && i.item !== this) {
            i.item.classList.add('enter');
        } else {
            i.item.classList.contains('enter') ? i.item.classList.remove('enter') : false;
        }
    });

    // console.log(touchLocation.pageY);

    if (touchLocation.pageY + 100 > bodyRect.height) {
        window.scrollBy(0, 50);
    }

    if (touchLocation.pageY - window.scrollY < 100) {
        window.scrollBy(0, -90);
    }
}

function touchEnd(e) {
    let x = parseInt(this.style.left);
    let y = parseInt(this.style.top);

    const pageY = e.changedTouches[0].pageY;

    let isDone = 1;
    offsets.forEach(i => {
        if (
            i.item !== this && i.item.classList.contains('enter') ||
            (i.empty && i.item.classList.contains('enter')) &&
            isDone !== 0
        ) {

            const targetUl = i.item.closest('ul');
            let targetId;

            // console.log(i.item.tagName);
            if (i.item.tagName === 'UL') {
                isDone = 0;
                i.item.insertAdjacentElement('beforeend', this);
                targetId = i.item.id;
            } else {
                isDone = 0;
                targetId = targetUl.id;
                i.item.insertAdjacentElement('afterend', this);
            }
            listItems.forEach(ListItem => {
                if (ListItem === this) {
                    listOFTasks.map(task => {
                        if (task.id === this.id) {
                            task.parentId = targetId;
                            return task;
                        } else {
                            return task;
                        }
                    });

                    updateLocalStorage(listOFTasks);
                }
            });

        }
        i.item.classList.remove('enter');

        this.style.top = '0';
        this.style.opacity = '1';

    });
    offsets = [];
    dragHandler();
    handleTheLists();
}

if (isMobileDevice) {
    dragHandler = () => {

        listItems.forEach(item => {

            item.removeEventListener('touchstart', touchStart);
            item.removeEventListener('touchmove', touchMove);
            item.removeEventListener('touchend', touchEnd);

            let rect = item.getBoundingClientRect();
            const offset = rect.top + window.scrollY;

            const itemOffset = {
                item: item,
                offsetTop: offset,
                offsetBottom: offset + rect.height,
            }

            offsets.push(itemOffset);

            item.addEventListener('touchstart', touchStart);


            item.addEventListener('touchmove', touchMove);


            item.addEventListener('touchend', touchEnd);


        });
    }

} else {

    dragHandler = () => {

        listItems.forEach(item => {
            item.removeEventListener('dragstart', dragStart);
            item.removeEventListener('dragover', dragOver);
            item.removeEventListener('dragenter', dragEnter);
            item.removeEventListener('dragleave', dragLeave);
            item.removeEventListener('drop', dragDrop);
        });

        const liEl = document.body.querySelectorAll('ul li');

        listItems.forEach(item => {
            item.addEventListener('dragstart', dragStart);
            item.addEventListener('dragover', dragOver);
            item.addEventListener('dragenter', dragEnter);
            item.addEventListener('dragleave', dragLeave);
            item.addEventListener('drop', dragDrop);
        });
    }
}

render();
