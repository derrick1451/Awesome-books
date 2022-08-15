//create variables inorder to work with the dom
const popup = document.querySelector('.form-popup');
const form = document.querySelector('.form')
const bookContainer = document.querySelector('.container')
const submitBtn = document.querySelector('.submit')
const cancel = document.querySelector('.cancel')
const inputsForm = document.querySelector('.inputs')

//pop-up form-input section
//Add a “NEW BOOK” button that brings up a form allowing users to input book info
popup.addEventListener('click', () => {
  inputsForm.style.display = 'flex'
})
//ARRay to store the book object
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
//add a prototype on the book constructor to trigger the read status on the book




//add a function that takes in user input and saves it into an array
function addBookToLibrary(title, author, pages, read) {
  const books = new Book(title, author, pages, read)
  myLibrary.push(books);
  showBooks()

}

//Write a function that loops through the array and displays each book on the page.
function showBooks() {
  //remove all cards before looping through to create cards
  const removeDivs = document.querySelectorAll('.card')
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove()
  }
  myLibrary.forEach(item => {
    const div = document.createElement('div')
    bookContainer.appendChild(div)

    //create a delete book button
    const deleteBook = document.createElement('button')
    deleteBook.classList.add('delete-book')
    deleteBook.innerText = 'Delete book';
    //create a read status button on the books
    const readStatus = document.createElement('button')
    readStatus.classList.add('read-status')
    readStatus.innerText = 'READ'
    //LISTEN on the read status of the books
    readStatus.addEventListener('click',(e)=>{
      if(e.target.innerText === 'READ'){
        e.target.innerText = 'Not-read'
      }else{
        e.target.innerText='READ'
      }
    })
    //add an eventlistner on the delete book button
    deleteBook.addEventListener('click', (e) => {
      let deletex = Number(e.target.parentNode.id)

      myLibrary.splice(myLibrary.indexOf(item), 1);
      e.target.parentNode.remove()
    });
    //loop through the array object inorder to get the key properties and values
    for (let key in item) {
      const para = document.createElement('p')
      para.innerText = `${key}:${item[key]}`;
      div.classList.add('card')
      para.classList.add('paragraph')
      div.appendChild(para)
      div.appendChild(deleteBook)
      div.appendChild(readStatus)

    }
  })
}


//add a function to get user input through the form
submitBtn.addEventListener('click', function () {
  //create variables to get user input
  const title = document.querySelector('.title').value
  const author = document.querySelector('.author').value
  const pages = document.querySelector('.pages').value
  const read = document.querySelector('.read').value

  
  if (title == '' || author == '' || pages == '' || read == '') {
    return;
  } else {
    addBookToLibrary(title, author, pages, read)
    console.log(myLibrary)
    //reset method resets the values inserted in the form to get this l seperated the buttons from the form inputs
    form.reset();
  }
})
cancel.addEventListener('click', () => {
  form.reset();
})
