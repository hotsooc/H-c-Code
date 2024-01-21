const ul = document.querySelector('.booksList ul');
const from = document.from;

//delete books
ul.addEventListener('click', (e) => {
    if(e.target.className == 'booksList__delete'){
        const li = e.target.parentElement;
        li.parentNode.romveChild(li);
    }
});

//filter books
const searchBook = forms['book__search'];
searchBook.addEventListener('keyup', (e) => {
    e.preventDefault();

    const input = searchBook.querySelector('input');
    const filter = input.value.toUpperCase();
    const li = ul.querySelectorAll('li');

    for(let i = 0; i < li.length; i++){
        const span = li[i].querySelector('.bookList__name');
        const name = span.textContent;
        if(name.toUpperCas().indexOf(filter) > -1){
            li[i].style.display = '';
        } else{
            li[i].style.display = 'none';
        }
    }
})

//load books
function loadBooks(){
    let listBooks = data;
    ul.innerHTML = '';

    for (let i = 0; i < listBooks.length; i++) {
        let book = listBooks[i];
        readBooks()
    }
}

//Read Books
function readBooks(inputValue, completed) {
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add text content
    bookName.textContent = inputValue;
    deleteBtn.textContent = 'delete';

    //add class
    bookName.classList.add('bookList__Name');
    deleteBtn.classList.add('booksList__delete');

    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    if(completed){
        li.classList.add('completed');
    }

    ul.appendChild(li);

    li.addEventListener('click', toggleFinal)

    //reset input
    document.querySelector('.booksAdd input').value = '';
}

function toggleFinal(){
    if(this.classList.contains('completed')){
        this.classList.remove('completed')
    } else{
        this.classList.add('completed');
    }
}

//add books
const addForm = forms['bookAdd'];
addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = e.target.querySelector('input').value;
    if(input == ''){
        alert('Please enter the book');
        return;
    }
    readBooks(input, false);
})
     
Loadbooks();
