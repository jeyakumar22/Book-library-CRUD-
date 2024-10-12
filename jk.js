// var id=document.getElementById("wrapper");
// console.log(id);

// var title=document.getElementsByClassName("title");
// // it has 2 child canuse index to access like [0]
// console.log(title);  
// for (j=0; j<title.length;j++){
//     console.log(title[j]);
// }
// // need to make array from html 
// Array.from(title).forEach(function(elt){
//          console.log(elt);
// });
//                             //   =-----------=  //
// var query =document.querySelector("#book-list li:nth-child(3)");
// console.log(query);

// // to get all 
// var query =document.querySelectorAll("#book-list li .name");
// console.log(query);

// Array.from(query).forEach(function(span){
//     console.log(span);
// });
//                 // -------------//

//                         // to change conent by text content /inner html 


// var books=document.querySelectorAll("#book-list li .name");

 
// Array.from(books).forEach(function(book){

//     // console.log (book.textContent); it return content inside it



//                // replace all
//     // book.textContent= "to replace all the content";

//             // append
//     book.textContent+=  " )title of the book(";
    
// });


//      //       inner html

// var list =document.querySelector("#book-list");
// // console.log (list.innerHTML);   //it show inside elt

//            // to replace all

// // list.innerHTML="<h2> the h2 tag</h2>";

//             //  to append
//  list.innerHTML+="<h2> the h2 tag</h2>";

//                                     //  -------------   //

//             //  node 

// const banner=document.querySelector("#search-books");

// console.log("nodetype", banner.nodeType);
// console.log("nodename", banner.nodeName);
// console.log("node", banner.hasChildNodes());


// const cloned =banner.cloneNode(false);   //false- only that elt
// console.log(cloned);
// const jk =banner.cloneNode(true);      //true-all child will shown
// console.log(jk);

//                     //   --------------//

//                     //sibling

// const book=document.querySelector("#book-list");
// console.log(book.nextSibling);
// console.log(book.nextElementSibling);
// console.log(book.previousSibling);
// console.log(book.previousElementSibling);


// book.previousElementSibling.querySelector('p').innerHTML+="<br> this is a br tag"


//                                 // event
//    btns = document.querySelectorAll('#book-list ul li');
//     Array.from(btns).forEach(function(item){
//         item.addEventListener('click', function(e) {
    
//         const li = e.target.parentElement;
        
//         li.parentNode.removeChild(li);
    
//         });
//     });
    
//                             //default preventer
//  const link=     document.querySelector(" #page-banner a")  ;
//    link.addEventListener('click',(e)=>{
//      e.preventDefault();
     
//    })            ;      


                    // event bubbling
const list=document.querySelector('#book-list ul');
  list.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        const li =e.target.parentElement;
        li.parentNode.removeChild(li);
    }
  });
                    // add   btn forms
                    
// add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  // if (value==""){
  //   list.appendChild();
  // }
  // else{
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';
 // }

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

});

                                //hide all books

const hidebox=document.querySelector("#hide");
hidebox.addEventListener('change',function(e){
  if(hidebox.checked){
    list.style.display='none';

  }
  else{
    list.style.display="initial";
  }
});


                      //  search 

const search=document.forms['search-books'].querySelector('input');
search.addEventListener('keyup',function(e){
  const term=e.target.value.toLowerCase();
  const book=list.getElementsByTagName('li');
  Array.from(book).forEach(function(books){
    const title=books.firstElementChild.textContent;   //(value)denote the content to differntiate from delete 
    if(title.toLowerCase().indexOf(term)!=-1){
      books.style.display='block';
    }
    else{
      books.style.display='none';
    }
  })
}) ; 
                      
                              // tabbed content
// const tabs =document.querySelector('.tabs');
// const pannels =document.querySelectorAll('.panel');
// tabs.addEventListener('click',function(e){ 
//   if(e.target.tagName=="LI"){
//     const targetpanel=document.querySelector(e.target.dataset.target);
//     pannels.forEach(function(panel){
//       if(panel==targetpanel){
//         panel.classList.add('active');
//       }
//       else{
//         panel.classList.remove('active');
//       }
//     });
//   }
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', function(e) {
      if (e.target.tagName === "LI") {
          const targetPanel = document.querySelector(e.target.dataset.target);
          panels.forEach(function(panel) {
              panel.classList.remove('active');
          });
          targetPanel.classList.add('active');

          // Update active tab
          tabs.querySelectorAll('li').forEach(tab => tab.classList.remove('active'));
          e.target.classList.add('active');
      }
  });
 

