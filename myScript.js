// collect info in a form then paste into paragraph
// hello .... how are you?
// input name
// replace ... with input

function Book(title, authorFirst, authorLast, numPages ){
    this.title = title;
    this.authorFirst = authorFirst;
    this.authorLast = authorLast;
    this.numPages = numPages;
}

let book1 = new Book('Harry Potter','JK','Rowling','500');


function CreateBookList(){

    var list = document.createElement('ul'); 

    for (var i = 0; i < 10; i++){
        var item = document.createElement('li');

        item.appendChild(document.createTextNode(i));

        list.appendChild(item);

    }
    return list;
}

console.log(CreateBookList());

