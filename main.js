let btn=document.querySelector('.btn');

btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
});
 
function handleClick(element)
{
  console.log("hello world!");
  element.innerHTML="submitted"
  element.style="background-color:red"
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  
  
}