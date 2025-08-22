const myLib=[];


function book(title, desc, status=false){
    this.title=title;
    this.desc=desc;
    this.status=status;
}

function addBookToLib(title, desc)
{

    const newBook=new book(title, desc);
    myLib.push(newBook);

}

const form=document.getElementById("books");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.getElementById("title").value;
    const desc= document.getElementById("description").value;

    addBookToLib(title,desc);

    console.log(myLib);
});