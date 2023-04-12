let enter = document.querySelector('#enter');
let words = document.querySelector('#words');
let chars = document.querySelector('#chars');
let whitespace = document.querySelector('#whitspace');
let clear = document.querySelector('#clear');
let count =0;
let copy = document.querySelector('#copy');
enter.addEventListener('keypress', ()=> {
    let str = enter.value;
    count++;
    chars.innerHTML = count;
    words.innerHTML = str.trim().split(/\s+/).length;
})

clear.addEventListener('click',()=> {
    enter.value = " ";
    chars.innerHTML = "0";
     words.innerHTML ="0";
})


copy.addEventListener('click', ()=> {

    enter.select();
    enter.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(enter.value);
  
    // Alert the copied text
    alert("Copied the text: " + enter.value + "  Try it..");
  }

)

