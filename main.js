
    const topLeft = document.querySelector(".topLeft");
    const bottomLeft = document.querySelector(".bottomLeft");
    const topRight = document.querySelector(".topRight");
    const bottomRight = document.querySelector(".bottomRight");
    const textView = document.getElementById("textView");
    const button = document.querySelector(".botao");



    topLeft.oninput = att
    bottomLeft.oninput = att
    topRight.oninput = att
    bottomRight.oninput = att
    
    button.onclick =  copy
   

function att(){
    const square = document.querySelector(".radiusBox");
    square.style.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}%`
    textView.value = `border-radius: ${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}% ;`
}
    
 //copy to clipboard
    function copy(){
        textView.select()
        document.execCommand("copy");
        alert("Copied to clipboard")
    }