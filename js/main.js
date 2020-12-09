








// Khi scroll header thành fixed
function onHead(){
  const nav = document.getElementById('container-header');
  window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    
    if(offset > 300)
      nav.classList.add('stuck')
    else if(offset< 10)
      nav.classList.remove('stuck')
  });
};
onHead();







// Bật and tắt form search
const searchHead = document.querySelector('.search-s');
  const searchChild = document.querySelector('.search-child');
  const fillOne = document.querySelector('.fill1');
  const fillTwo = document.querySelector('.fill2');
  const inputDown = document.querySelector('.input-icon-s');
  const userOn = document.querySelector('.user-on');
  const formLogin = document.querySelector('.form-login');
  const formDown = document.querySelector('.form');
function ghimSearch(){
  searchHead.classList.toggle('active');
  body.classList.toggle('ghim');
  inputDown.classList.toggle('show');
  searchChild.classList.remove('on');
  searchChild.classList.toggle('off');
};
fillTwo.addEventListener('click',function(){
  body.classList.remove('ghim');
  formDown.classList.remove('show');
  formLogin.classList.remove('active');
  userOn.classList.remove('off');
  userOn.classList.toggle('on');
});


// Bật and tắt form log
userOn.addEventListener('click',function(){
  formLogin.classList.toggle('active');
  body.classList.toggle('ghim');
  formDown.classList.toggle('show');
  userOn.classList.remove('on');
  userOn.classList.toggle('off');
})

fillOne.addEventListener('click',function(){
  searchHead.classList.remove('active');
  body.classList.remove('ghim');
  inputDown.classList.remove('show');
  formLogin.classList.remove('active');
  searchChild.classList.remove('off');
  searchChild.classList.toggle('on');
})




// Thứ viện menudropdown by: henhpropd
function menuDropDownMobile(options) {
  var menuShowMobile = document.querySelector(options.menuShowMobile);
  const body = document.querySelector('body');
  if (menuShowMobile) {
    var btnShowMenus =  document.querySelector(options.btnShowMenus);
    var closeAll = document.querySelectorAll(options.closeMenus);
    // Xử lý sự kiện Đóng mở Menus
    if (btnShowMenus) {
      // Mở Menus
        btnShowMenus.onclick = function() {
        menuShowMobile.classList.add('show-nav');
        body.classList.add('ghim')
        closeAll.forEach(function(close){
          close.classList.add('on')
        })

      }
      // Xử lý sợ kiện mở đóng menu Dropdown
      var btnSub = menuShowMobile.querySelectorAll(options.btnShowMenuSub);
      var subMenuAll = menuShowMobile.querySelectorAll(options.subMenu);
      if (btnSub) {
        btnSub.forEach(function (btn){
          var subMenus = btn.parentElement.querySelector(options.subMenu);
          btn.onclick = function() {
            btn.classList.toggle('quay');
            subMenus.classList.toggle('show');
          }
        });
      }

      // Đóng Menus + dropdown-menu
      if(closeAll) {
        for (let i = 0; i < closeAll.length; i++) {
          // Tắt ghim body and đóng menu
          closeAll[i].onclick = function() {
            menuShowMobile.classList.remove('show-nav');
            body.classList.remove('ghim');
            // Đóng menu-sub
            for (let i = 0; i < btnSub.length; i++) {
              btnSub[i].classList.remove('quay');
              subMenuAll[i].classList.remove('show');
            }
            // Tắt nút X và lớp fill X;
            for (let i = 0; i < closeAll.length; i++) {
              closeAll[i].classList.remove('on');
            }
          }
        }
      }
    };
  }
}


































