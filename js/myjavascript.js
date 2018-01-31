	window.onscroll = function() {myFunction()};
			var navbar = document.getElementById("navbar");
			var sticky = navbar.offsetTop;
			function myFunction() {
			  if (window.pageYOffset >= sticky) {
			    navbar.classList.add("sticky")
			  } else {
			    navbar.classList.remove("sticky");
			  }
			}
			console.log(sticky);
			// form đăng nhập

var l = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var p =/^[0-9]{10,11}$/;
function dn() {
	var my_login = document.forms['form-dn'];
	var email = my_login.email;
	var password = my_login.password;
if(email.value==''){
		alert('Bạn chưa nhập Email');
		return false;
	}else if(l.test(email.value)){

	}else{
		alert('Tên không được có các ký tự đặc biệt');
		return false;
	}
if (password.value=='') {
		alert('Bạn chưa nhập mật khẩu');
		return false;	
	}
	alert('Đã đăng nhập thành công')
};

// form đăng kí
var num = /^[0-9-+]+$/; 
var hoten1 = /^[A-Za-z]*$/;
var email1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var pass =/^[0-9]{10,11}$/;
function dk() {
	var formdk = document.forms['form-dk']; 
	var hoten = formdk.hoten;
	var password = formdk.password;
	var repassword = formdk.repassword;
	var sdt = formdk.sdt;
	var email = formdk.email;;

	if(hoten.value==''){
		alert('Bạn chưa nhập họ tên');
		return false;
	}else if(hoten1.test(hoten.value)){

	}else{
		alert('Tên không được có các ký tự đặc biệt');
		return false;
	}
	if(sdt.value==''){
		alert('Bạn chưa nhập số điện thoại');
		return false;
	}else if(num.test(sdt.value)){
		
	}else{
		alert("Số điện thoại không đúng định dạng");
		return false;
	}
	if(email.value==''){
		alert('Bạn chưa nhập email');
		return false;
	}else if(email1.test(email.value)){

	}else{
		alert("Email chưa đúng định dạng");
		return false;
	}
	if (password.value=='') {
		alert('Bạn chưa nhập mật khẩu');
		return false;	
	}
	if(repassword.value==''){
		alert('Bạn chưa nhập lại mật khẩu');	
		return false;
	}else if(repassword.value==password.value){

	}else{
		alert('Không giống với mật khẩu');
		return false;
	}
	alert('Đăng ký thành công');
};
// form liên hệ
var num = /^[0-9-+]+$/; 
var hoten1 = /^[A-Za-z]*$/;
var email1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function lh() {
	var forrmlh = document.forms['form-lh']; 
	var hoten = forrmlh.hoten;
	var sdt = forrmlh.sdt;
	var email = forrmlh.email;;

	if(hoten.value==''){
		alert('Bạn chưa nhập họ tên');
		return false;
	}else if(hoten1.test(hoten.value)){

	}else{
		alert('Tên không được có các ký tự đặc biệt');
		return false;
	}
	if(email.value==''){
		alert('Bạn chưa nhập email');
		return false;
	}else if(email1.test(email.value)){

	}else{
		alert("Email chưa đúng định dạng");
		return false;
	}
	if(sdt.value==''){
		alert('Bạn chưa nhập số điện thoại');
		return false;
	}else if(num.test(sdt.value)){
		
	}else{
		alert("Số điện thoại không đúng định dạng");
		return false;
	}
	alert('Đăng ký thành công');
};