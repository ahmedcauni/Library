const myLib=[];


function book(title, desc, status=false){
    this.title=title;
    this.desc=desc;

}

function addBookToLib(title, desc)
{

    const newBook=new book(title, desc);
    myLib.push(newBook);

}