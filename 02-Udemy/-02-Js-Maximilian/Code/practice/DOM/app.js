/*
                               //  Traversing   \\


- ul.children[0];               -> direct children
- ul.childNodes                 -> It will include the whitespaces.
- ul.firstChild                 -> It will consider the whitespaces
- ul.firstElementChild          -> It will not consider the whitespaces.
- ul.previousElementSibling     -> It will not consider the whitespaces.
- ul.nextElementSibling         -> It will not consider the whitespaces.
- ul.parentElement


                                //  Creating Elements   \\

- section.textContent = 'New text content!';
- section.innerHTML = '<h1> This is heading one </h1>';
- section.insertAdjacentHTML('beforeend', '<p> Something went wrong </p>')
- document.createElement('tagName');
- list.appendChild(newLi);
- list.append('text', newLi)
- list.prepend(newLi)
- list.lastElementChild.before(newLi)
- list.firstElementChild.replaceWith(newLi)
- newLi.cloneNode(true)


                                   //  Removing Elements   //

- list.remove()
- list.removeChild()



https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before &
https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after

*/

const section = document.querySelector('section');
const list = document.querySelector('ul');

section.insertAdjacentHTML('beforeend', '<p> Something went wrong </p>')

const newLi = document.createElement('li');
list.appendChild(newLi);

newLi.textContent = 'Item 4';