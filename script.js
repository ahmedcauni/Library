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

    form.reset()
    
});

const cardcont=document.querySelector('.cardContainer');
const refresh=document.querySelector('.Refresh');

refresh.addEventListener('click',()=>{
    cardcont.innerHTML='';
    myLib.forEach((book) =>{



        const card=document.createElement("div");
        card.classList.add("card");
        
        const title=document.createElement("div");
        title.textContent=book.title;
        card.appendChild(title);

        const desc=document.createElement("div");
        desc.textContent=book.desc;
        card.appendChild(desc);

        cardcont.append(card);

    }
);

});