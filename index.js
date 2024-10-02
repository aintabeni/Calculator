function operate(string){
    let array=string.match(/(\d+)([\+\-\*\/])(\d+)/);

    a=+array[1];
    b=+array[3];
    op=array[2];
    if(op==="/" && b===0)return "lmao";
    function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
   if(op=="+"){return add(a,b)}
   if(op=="-"){return subtract(a,b)}
   if(op=="*"){return multiply(a,b)}
   if(op=="/"){return divide(a,b)}

}
let display = document.querySelector(".calculator-display")
let nums = document.querySelectorAll(".num")
nums.forEach(btn=>btn.addEventListener("click",()=>{
    display.textContent+= btn.value;

}))
let operands=document.querySelectorAll(".operand")
operands.forEach(btn=>btn.addEventListener("click",function(){
    if(display.textContent.match(/(\d+)([+\-\*\/])(\d+)/)){
        return display.textContent=operate(display.textContent)+btn.value;
    }
    
    return display.textContent+=btn.value;
}))
let equality = document.querySelector(".equals");
equality.addEventListener("click",()=>{
    display.textContent=operate(display.textContent)
})
let clear = document.querySelector(".clear")
clear.addEventListener("click",()=>{
    display.textContent="";
})

