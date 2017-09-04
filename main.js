// get modal element
var modal = document.getElementById("simpleModal");
//get modal open button
var modalBtn = document.getElementById("modalBtn");

//get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//listen for open click
modalBtn.addEventListener("click",openModal);

//listen to close click
closeBtn.addEventListener("click",closeModal);

//listen for outside click 
window.addEventListener("click",outsideClick);



//function to open modal
function openModal(){

    modal.style.display="block";

}

//function to close4 modal
function closeModal(){
    
        modal.style.display="none";
    
    }

//function to close modal if clicked outside
function outsideClick(e){

    if(e.target == modal){
        modal.style.display="none";
      }
    }






