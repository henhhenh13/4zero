const nav = document.getElementById('container-header');

window.addEventListener('scroll', function() {
  const offset = window.pageYOffset;
  
  if(offset > 500)
    nav.classList.add('stuck')
  else if(offset< 10)
    nav.classList.remove('stuck')
});



  const menu = document.querySelector('#id-head-nav');
  const body = document.querySelector('body');
  const freeDom = document.querySelector('.free-dom');
  const fullMenu = document.querySelector('.full-menu');
  const closeX = document.querySelector('.close-full')

function showMenuPhone(){
  menu.classList.toggle('show-nav');
  freeDom.classList.toggle('on'); 
  fullMenu.classList.toggle('on'); 
  closeX.classList.toggle('chay'); 
  body.classList.toggle('ghim');
}
function closeHet(){
  menu.classList.remove('show-nav');
  freeDom.classList.remove('on'); 
  fullMenu.classList.remove('on'); 
  closeX.classList.remove('chay'); 
  body.classList.remove('ghim');

}



function changeSub1(){
  var pro = document.querySelector('.sub-1');
  pro.classList.toggle('show');

  var btn_sub = document.querySelector('.btn-sub-1');
  btn_sub.classList.toggle('quay');
}
function changeSub2(){
  var pro = document.querySelector('.sub-2');
  pro.classList.toggle('show');

  var btn_sub = document.querySelector('.btn-sub-2');
  btn_sub.classList.toggle('quay');
}
function changeSub3(){
  var pro = document.querySelector('.sub-3');
  pro.classList.toggle('show');

  var btn_sub = document.querySelector('.btn-sub-3');
  btn_sub.classList.toggle('quay');
}
function changeSub4(){
  var pro = document.querySelector('.sub-4');
  pro.classList.toggle('show');

  var btn_sub = document.querySelector('.btn-sub-4');
  btn_sub.classList.toggle('quay');
}