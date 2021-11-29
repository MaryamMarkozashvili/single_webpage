var dropDown=document.querySelector('.drop_down_content');
var dropDownToggler=document.querySelector('.drop_down_active');
dropDownToggler.addEventListener('click',show);
function show(){
    dropDown.classList.toggle('show');
}
