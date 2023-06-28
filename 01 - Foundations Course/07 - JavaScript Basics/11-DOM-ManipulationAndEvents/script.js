const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//Method 1
const btn1 = document.querySelector('#btn1');
btn1.onclick = () => alert("Hello World1");

//Method 2
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World2");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

//Method 2
btn3.onclick = alertFunction;

// Method4
btn4.addEventListener('click', alertFunction);

/*The reason why the code still works is that the btn4 variable is automatically created as a global 
variable due to the id attribute assigned to the button element in the HTML. This behavior is specific 
to browsers when an element with an id is present.
Therefore, even though you did not explicitly retrieve the button element using getElementById or 
querySelector, the browser automatically creates a global variable named btn4 and assigns it as a 
reference to the button element.
As a result, the subsequent line btn4.addEventListener('click', alertFunction); can access the 
btn4 global variable and attach the event listener to the button.
While this behavior can work in some cases, it is generally recommended to explicitly retrieve 
elements using getElementById or querySelector for better code clarity and to avoid 
potential issues if the codebase changes or if the global variable namespace conflicts occur.*/