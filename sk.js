const cols =parseInt( prompt("Enter number of columns:"));

const gridContainer = document.querySelector("#grid-container");

for(let j=0;j<cols;j++){
   gridContainer.style.gridTemplateColumns += " 1fr"
}
// create grid based on user input
for (let i = 0; i < cols*cols; i++) {
   
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.textContent =  " ";

  gridContainer.appendChild(gridItem);
}


// add color 
const stack=[];

let colorPicker=document.getElementById('colorPicker')
let selectedColor;
colorPicker.addEventListener('change',(e) =>{
    selectedColor=e.target.value

} )
//hover effect
let item=document.querySelectorAll(".grid-item")
item.forEach(function(x,i){
  x.addEventListener("mouseover",(e)=>{
    //black color logic
    // console.log(stack,"st1 ")
    if(stack.length>9){
      let j=0;
      let itemToeDarken;
      while(j<9){
        itemToeDarken=stack.shift();
        console.log(itemToeDarken,"st222")
        itemToeDarken.style.backgroundColor="black";
        j++
      }
    }
    if(selectedColor){
      e.target.style.backgroundColor= selectedColor;
      if(selectedColor!=='white'){
    stack.push(x)

      }
    }
    
  })
})

// onclick  eraser


let eraser =document.getElementById("eraser")
eraser.addEventListener('click',clear);
function clear(){
  selectedColor='white'
}


