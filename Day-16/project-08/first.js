// Clicker
const body=document.querySelector('body');
body.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY);

    const circleElement=document.createElement('div');
    circleElement.classList.add('circle');
    const greet=['Hi!','Hello!','Hey!','Welcome!','Greetings!']
    circleElement.textContent=greet[Math.floor(Math.random()*5)]
    const color=['red','blue','orange','green','pink','purple','yellow','indigo' ,'brown','darkblue','goldenrod','white','darkyellow'];
    circleElement.style.backgroundColor=color[Math.floor(Math.random()*13)];
    circleElement.style.fontFamily="font-family: Verdana, Geneva, Tahoma, sans-serif"
    circleElement.style.top=`${e.clientY-25}px`;
    circleElement.style.left=`${e.clientX-25}px`;

    body.append(circleElement);
    setTimeout(()=>{
        circleElement.remove()
    },5000)
})