var signin_wrapper = document.getElementById('signin-wrapper'); // đki
var login_wrapper = document.getElementById('login-wrapper'); //đăng nhập
var modal_signin = document.getElementById('modal-signin');
var modal_login = document.getElementById('modal-login');
var modal_search = document.getElementById('modal-search'); // tìm kiếm sp khi chưa đăng nhập
var modal_user_search = document.getElementById('user-page-modal-search'); //user sử dụng tìm kiếm sản phẩm khi đã đăng nhập
var modal_product_detail = document.getElementById('user-page-modal-product-detail'); // chi tiết sản phẩm
var modal_bill_detail = document.getElementById('modal-billDetail'); // bên admin
var sectionStranger = document.getElementById('stranger-page'); // nút mes bên phải khi chưa đăng nhập
var sectionUser = document.getElementById('user-page') // người sd page
var sectionCart = document.getElementById('user-cart-page'); // user giỏ hàng
function showSectionStranger() { //khi chưa đăng nhập
      localStorage.removeItem('userlogin');
      sectionCart.style.display = 'none'; // ẩn giỏ hàng khi chưa đăng nhập
      sectionUser.style.display = 'none'; // ẩn trang khi user đã đăng nhập
      sectionStranger.style.display = 'block'; // hiện trang mặc định khi chưa đăng nhập
      scrollToTop(); // cuộn tên đầu trang
}
var slideShow = document.getElementById('slideShow');

function showSectionUser() { //khi đã đăng nhập. Mọi thứ ngược lại hàm trên 
      sectionCart.style.display = 'none';
      sectionStranger.style.display = 'none'; 
      slideShow.style.display= 'block';
      sectionUser.style.display = 'block'; 
      createAdmin(); 
      createProduct();
      showProductUser(0);
      helloUser('user-page-helloUser');// hàm này là lấy tên của người đăng nhập 
      showQuantityOfCart('user-page-cart-quantity'); // phát
      createSlideShowArray(); //phú
      // moveSlideShow('user_page_slideShow_img'); // phú
      scrollToTop();
}
function showSectionCart() { //khi đang ở giỏ hàng vào giỏi hàng
      sectionUser.style.display = 'none';
      sectionStranger.style.display = 'none';
      sectionCart.style.display = 'block';
      createAdmin();
      createProduct();
      showCart(); // phát
      helloUser('user-cart-page-helloUser');
      showQuantityOfCart('user-cart-page-cart-quantity');
      scrollToTop();
}
function showTimeNow() {
      let time_now = document.getElementById('time-now');
      let date = new Date();
      let date_hour = date.getHours();
      if(date_hour < 10) {
            date_hour = date_hour.toString();
            date_hour = 0 + date_hour
      } else {
            date_hour = date_hour.toString();
      }
      let date_minute = date.getMinutes();
      if(date_minute < 10) {
            date_minute = date_minute.toString();
            date_minute = 0 + date_minute
      } else {
            date_minute = date_minute.toString();
      }
      let date_second = date.getSeconds();
      if(date_second < 10) {
            date_second = date_second.toString();
            date_second = 0 + date_second
      } else {
            date_second = date_second.toString();
      }
      let timeNowTemp = `${date_hour}:${date_minute}:${date_second}`;
      time_now.innerHTML = timeNowTemp;
}
setInterval(showTimeNow,1000);
function showSignin() {
      modal_login.style.display = 'none';
      login_wrapper.style.display = 'none';
      modal_signin.style.display = 'block';
      signin_wrapper.style.display = 'block';
      var fullname = document.getElementById('signin-fullname');
      fullname.focus();
}
function showLogin() {
      modal_signin.style.display = 'none';
      signin_wrapper.style.display = 'none';
      modal_login.style.display = 'block';
      login_wrapper.style.display = 'block';
      var username = document.getElementById('login-username');
      username.focus();
}
function closeLogin() {
      modal_login.style.display = 'none';
      login_wrapper.style.display = 'none';
}
function closeSignin() {
      modal_signin.style.display = 'none';
      signin_wrapper.style.display = 'none';
}
/*-----------------------------------------------------------------------------------------------------  */
//?                                                              Validate
var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var specialCharsForEmail = "<>!#$%^&*()_+[]{}?:;|'\"\\,/~`-=";
var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g; 

function checkForSpecialChar(string){
      for(i = 0; i < specialChars.length;i++){
            if(string.indexOf(specialChars[i]) > -1){ //indexOf() là một phương thức của đối tượng chuỗi (String). Nhằm tìm kiếm vị trí xuất hiện đầu tiên của một chuỗi con (substring) trong chuỗi gốc. Nếu chuỗi con không được tìm thấy, phương thức sẽ trả về -1.
                  return true;
            }
      }
      return false;
}
function checkForSpecialCharForEmail(string){
      for(i = 0; i < specialCharsForEmail.length;i++){
            if(string.indexOf(specialCharsForEmail[i]) > -1){
                  return true;
            }
      }
      return false;
}

function checkPhoneNumber(string){ 
      if(vnf_regex.test(string) == false){
        return true;
      } else return false;
    }

/* -------------------------------------------------------------------------------------------------------------------- */
function validateSignin() { // kiểm tra dữ liệu đăng ký
      var flag = true;
      var fullname = document.getElementById('signin-fullname').value;
      var fullname_error = document.getElementById('signin-fullname-error');
      var username = document.getElementById('signin-username').value;
      var username_error = document.getElementById('signin-username-error');
      var email = document.getElementById('signin-email').value;
      var email_error = document.getElementById('signin-email-error');
      var phone = document.getElementById('signin-phone').value; 
      var phone_error = document.getElementById('signin-phone-error'); 
      var password = document.getElementById('signin-password').value;
      var password_error = document.getElementById('signin-password-error');
      var repassword = document.getElementById('signin-repassword').value;
      var repassword_error = document.getElementById('signin-repassword-error');
      //? Fullname validate
      if (fullname == '' || fullname.length < 4 || checkForSpecialChar(fullname) == true) {
            fullname_error.style.display = 'block';   
            flag = false;
      } else {
            fullname_error.style.display = 'none';
      }
      //? Username validate
      if (username == '' || username.length < 4 || checkForSpecialChar(username) == true) {
            console.log(username)
            username_error.style.display = 'block';   
            flag = false;
      } else {
            username_error.style.display = 'none';
      }
      //? Email validate
      if (email == '' || email.length < 10 || checkForSpecialCharForEmail(email) == true) {
            email_error.style.display = 'block';    
            flag = false;
      } else {
            email_error.style.display = 'none';   
      } 
      if (phone == '' || checkPhoneNumber(phone) == true) { 
            phone_error.style.display = 'block';   
            flag = false;
        } else {
            phone_error.style.display = 'none';
        }
  
        
      //? Password validate
      if (password == '' || password.length < 6) {
            password_error.style.display = 'block';    
            flag = false;
      } else {
            password_error.style.display = 'none';   
      }
      //? Repassword validate
      if(repassword != password || repassword == '') {
            repassword_error.style.display = 'block'; 
            flag = false;
      } else {
            repassword_error.style.display = 'none';
      }
      return flag;
}
//?                                                          Signin Login Logout
function signin() {

      let date = new Date();
      let date_year = date.getFullYear();
      let date_month = date.getMonth() + 1;
      let date_day = date.getDate();
      let date_hour = date.getHours();
      let date_minute = date.getMinutes();
      let date_second = date.getSeconds();
      let timeCreate = `${date_hour}:${date_minute}:${date_second} <br> ${date_day} - ${date_month} - ${date_year}`;
      var fullname = document.getElementById('signin-fullname');
      var username = document.getElementById('signin-username');
      var email = document.getElementById('signin-email');
      var phone = document.getElementById('signin-phone');
      var password = document.getElementById('signin-password');
      var repassword = document.getElementById('signin-repassword');
      if(validateSignin() == true) { 
            var user = { // tạo đối tượng người dùng lưu vào localstorage
                  fullname:fullname.value,
                  username:username.value,
                  email:email.value,
                  phone:phone.value,
                  password:password.value,
                  date_create:timeCreate,
                  value:10,
            }
            if(localStorage.getItem('userlist') == null) { //dùng phương thức getItem() để lấy giá trị ng dùng từ local
                  var userlist = []; // ktra local nếu kh chứa ng dùng userlist thì tạo 1 mảng user và lưu vào local
                  userlist.push(user);
                  localStorage.setItem('userlist',JSON.stringify(userlist));
            }
            else { // nếu đã tồn tại thì lấy danh sách cũ thêm user mới và lưu lại
                  let userlist = JSON.parse(localStorage.getItem('userlist'));
                  userlist.push(user);
                  localStorage.setItem('userlist', JSON.stringify(userlist));
            }
            //! Xóa nội dung đky sau khi đã đki thành công
            fullname.value = '';
            username.value = '';
            email.value = '';
            phone.value = '';
            password.value = '';
            repassword.value = '';
            signin_wrapper.style.display = 'none';
            customAlert('Bạn đã đăng ký thành công', 'success');
            setTimeout(function() {
                  closeSignin();
            showLogin(); //sau khi đky thành công thì chuyển sang form đăng nhập
            },500)
      }
}
function validateLogin() { // kiểm tra thông tin đăng nhập
      let flag = true;
      var username = document.getElementById('login-username').value;
      var username_error = document.getElementById('login-username-error');
      var password = document.getElementById('login-password').value;
      var password_error = document.getElementById('login-password-error');
      if (username == '' || username.length < 4 || checkForSpecialChar(username) == true) {
            username_error.style.display = 'block';
            flag = false;

      } else {
            username_error.style.display = 'none';
      }
      if (password == '' || password.length < 4) {
            password_error.style.display = 'block';
            flag = false;
      } else {
            password_error.style.display = 'none';
      }
      return flag;
}
function userlogin(username) {
      if(localStorage.getItem('userlogin') == null) { // Kiểm tra xem đã lưu thông tin đăng nhập trong localStorage hay chưa
            var userlist = JSON.parse(localStorage.getItem('userlist')); //Nếu chưa có thông tin đăng nhập, lấy danh sách người dùng từ localStorage. Tìm kiếm người dùng có username tương ứng trong danh sách.
            
            let i;
            for (i = 0; i < userlist.length; i++) {
                  if(userlist[i].username == username) break;
            }
            var temp = { // tạo đối tượng tạm thời chứa thông tin đăng nhập
                  fullname : userlist[i].fullname,
                  username : userlist[i].username,
                  email : userlist[i].email,
                  phone : userlist[i].phone,
                  password : userlist[i].password,
                  value:userlist[i].value,
            }
            localStorage.setItem('userlogin',JSON.stringify(temp)); // lưu đối tượng đăng nhập vào local
      } else { //Nếu đã tồn tại thông tin đăng nhập, xóa nó và gọi lại hàm userlogin để thực hiện lại quy trình với thông tin mới
            localStorage.removeItem('userlogin');
            userlogin(username);
      }
      
}
function login () { // kiểm tra dữ liệu đăng nhập
      var username = document.getElementById('login-username');
      var username_error = document.getElementById('login-username-error');
      var password = document.getElementById('login-password');
      var password_error = document.getElementById('login-password-error');
      var userlist = JSON.parse(localStorage.getItem('userlist'));
      if(validateLogin() == true) {
            let i = 0;
            while(i < userlist.length) { // mục đích tìm kiếm trong danh sách có người dùng username tương ứng không
                  if(userlist[i].username == username.value) {
                        break;
                  }
                  i++;
            }
            if(i < userlist.length) { //! Check username. nếu i nhỏ hơn độ dài của danh sách thì tìm thấy ng dùng
                  /* console.log('Đã có username này') */
                  if(userlist[i].password == password.value) { //! Check password
                        userlogin(userlist[i].username); // gọi hàm userlogin để lưu thông tin đăng nhập vào local
                        /* console.log('Đã đúng mật khẩu') */
                        if(userlist[i].value == 100) { // nếu kiểm tra thấy là tk admin thì link tới web admin(do là có tạo 1 biến value ở tk admin = 100)
                              customAlert('Bạn đã đăng nhập thành công','success');
                              setTimeout(function(){
                                    window.location.href = 'AdminPage/index.html';   //! Link đến web ADMIN
                              },500)
                              
                        } else { 
                              username.value = "";
                              password.value = "";
                              customAlert('Bạn đã đăng nhập thành công','success');
                              setTimeout(function() {
                                    closeLogin();
                                    showSectionUser(); // link tới trang user khi đăng nhập thành công
                              },500)
                        }
                  } else {
                        /* console.log('Sai mật khẩu') */
                        password_error.style.display = 'block';
                  }
            } else {
                  /* console.log('Không tồn tại username này') */
                  username_error.style.display = 'block';
            }
      }
}
//?                                                         đăng xuất user + admin
function logout() {
      var ans = confirm('Bạn có chắc muốn đăng xuất không ?');
      if (ans == true) {
            localStorage.removeItem('userlogin');
            customAlert('Bạn đã đăng xuất thành công !','success');
            setTimeout(showSectionStranger(),500);
      } 
}

/*! ---------------------------------------------------------------------------------------------- */
//?                                                   Tạo admin + tạo sản phẩm
function createAdmin() { // tạo admin
      if(localStorage.getItem('userlist') == null) { // kiểm tra xem khóa userlist đã tồn tại trong localStorage chưa. Nếu chưa thì tạo mảng mới thêm admin vào mảng rồi lưu vào local 
            var userlist = [];
            var admin = {
                  username: 'admin',
                  password: 'admin',
                  fullname: 'Thái',
                  sdt:'0999888999',
                  email:'baobua110@gmail.com',
                  value:100,
            }
            userlist.push(admin);
            localStorage.setItem('userlist',JSON.stringify(userlist));
      } else { // nếu đã có danh sách người dùng. Lấy danh sách local ra xem có tồn tại admin hay kh
            var userlist = JSON.parse(localStorage.getItem('userlist'));
            let flag = false;
            for (let i = 0; i < userlist.length; i++) {
                  if(userlist[i].username == 'admin') {
                        flag = true; // có thì đúng
                  }
            }
            if(flag == false) { // kh có thì tạo admin dưới này rồi thêm vào local
                  var admin = {
                        username: 'admin',
                        password: 'admin',
                        fullname: '',
                        sdt:'0999888999',
                        email:'baobua110@gmail.com',
                        value:100,
                  }
                  userlist.push(admin);
                  localStorage.setItem('userlist',JSON.stringify(userlist));
            }
      }
}
//!Propduct 
/*    productID
      img
      name
      price
*/
/*
function createProduct() {
      const storedProducts = localStorage.getItem('product');
      if (!storedProducts || JSON.parse(storedProducts).length === 0) {
            const productArray = [
                  
                  //JUNO
                  { productID: 100, img: 'img/juno/judo_1.webp', name: 'JUNO-Túi Xách Nhỏ Top Handle Phối Khoá', price: 859000},
                  { productID: 101, img: 'img/juno/judo_2.webp', name: 'JUNO-Túi Xách Lớn Tote Lớn CEst Lavie', price: 949000},
                  { productID: 102, img: 'img/juno/judo_3.webp', name: 'JUNO-Túi Xách Nhỏ Hobo Dập Hoạ Tiết Phối Charm', price: 663000},
                  { productID: 103, img: 'img/juno/judo_4.webp', name: 'JUNO-Túi Xách Nhỏ Phối Si Hoạ Tiết Sọc', price: 799000},
                  { productID: 104, img: 'img/juno/judo_5.webp', name: 'JUNO-Túi Xách Nhỏ Dáng Chữ Nhật Radio', price: 799000},
                  { productID: 105, img: 'img/juno/judo_6.webp', name: 'JUNO-Túi Xách Nhỏ Phối Tay Cầm Dây Vải', price: 749000},
                  { productID: 106, img: 'img/juno/judo_7.webp', name: 'JUNO-Túi Xách Nhỏ Phối Tay Cầm La Dolce Vita', price: 849000},
                  { productID: 107, img: 'img/juno/judo_8.webp', name: 'JUNO-Túi Xách Nhỏ Top Handle Trang Trí Khoá', price: 899000},
                  { productID: 108, img: 'img/juno/judo_9.webp', name: 'JUNO-Túi Xách Trung Tote Camping', price: 959000},
                  { productID: 109, img: 'img/juno/judo_10.webp', name: 'JUNO-Ví Nắp Gập In Hoạ Tiết Chuyển Màu', price: 549000},
                  { productID: 110, img: 'img/juno/judo_11.webp', name: 'JUNO-Túi Xách Nhỏ Buckle Flap Trang Trí Charm', price: 849000},
                  { productID: 111, img: 'img/juno/judo_12.webp', name: 'JUNO-Túi Xách Lớn Tote Lớn Phối Ngăn Trang Trí', price: 599000},
                  { productID: 112, img: 'img/juno/judo_13.jpeg', name: 'JUNO-Túi Xách Trung Tote Nhỏ Form Vuông Dây Đeo Webbing', price: 799000},

                  { productID: 113, img: 'img/juno/judo_14.webp', name: 'JUNO-Túi Xách Nhỏ Top Handle Trang Trí Charm', price: 849000},
                  { productID: 114, img: 'img/juno/judo_15.webp', name: 'JUNO-Túi Xách Nhỏ Dây Xích Hoạ Tiết Nautical', price: 899000},
                  { productID: 115, img: 'img/juno/judo_16.webp', name: 'JUNO-Túi Xách Nhỏ Đeo Vai Phối Khoá Xoay Trang Trí', price: 849000},
                  { productID: 116, img: 'img/juno/judo_17.webp', name: 'JUNO-Túi Tote Chần Bông', price: 599000},
                  { productID: 117, img: 'img/juno/judo_18.webp', name: 'JUNO-Túi Xách Lớn Phối Tay Cầm Trang Trí', price: 999000},
                  { productID: 118, img: 'img/juno/judo_19.jpeg', name: 'JUNO-Túi Xách Nhỏ Phối Khoá Camping', price: 899000},
                  { productID: 119, img: 'img/juno/judo_20.webp', name: 'JUNO-Túi Xách Nhỏ Đeo Vai Hoạ Tiết Nautica', price: 849000},
                  { productID: 120, img: 'img/juno/judo_21.webp', name: 'JUNO-Túi Xách Nhỏ Phối Tay Cầm La Dolce Vita', price: 849000},
                  { productID: 121, img: 'img/juno/judo_22.webp', name: 'JUNO-Túi Xách Nhỏ Phối Dây Webbing Bản Lớn', price: 74900},
                  { productID: 122, img: 'img/juno/judo_23.webp', name: 'JUNO-Túi Xách Trung Trang Trí Charm Và Khóa', price: 899000},
                  { productID: 123, img: 'img/juno/judo_24.jpeg', name: 'JUNO-Túi Xách Trung Tote In Logo Jn', price: 899000},
                  { productID: 124, img: 'img/juno/juno_25.webp', name: 'JUNO-Túi Xách Nhỏ Rút May Chỉ Hoạ Tiết Quả Trám', price: 849000},

                  { productID: 125, img: 'img/juno/juno_26.webp', name: 'JUNO-Túi Xách Trung Tote Juno Studio', price: 899000},
                  { productID: 126, img: 'img/juno/juno_27.webp', name: 'JUNO-Túi Xách Lớn Túi Xách Lớn Đeo Vai Form Mềm', price: 849000},
                  { productID: 127, img: 'img/juno/juno_28.webp', name: 'JUNO-Túi Xách Nhỏ Bear Hug', price: 849000},
                  { productID: 128, img: 'img/juno/juno_29.webp', name: 'JUNO-Túi Xách Nhỏ Phối Tay Cầm Marble', price: 649000},
                  { productID: 129, img: 'img/juno/juno_30.webp', name: 'JUNO-Balo Nắp Gập Phối Khoá Kéo Trang Trí', price: 899000},
                  { productID: 130, img: 'img/juno/juno_31.webp', name: 'JUNO-Túi Xách Nhỏ Hobo Trang Trí Logo Border', price: 399000},
                  { productID: 131, img: 'img/juno/juno32.webp', name: 'JUNO-Túi xách lớn Tote Bag phối lưới xuyên thấu', price: 959000},


                  
            ];
            localStorage.setItem('product', JSON.stringify(productArray));
            console.log("✅ Đã khởi tạo danh sách sản phẩm mặc định.");
      } else {
            console.log("✅ Dữ liệu sản phẩm đã tồn tại:", JSON.parse(storedProducts));
        }
}
*/

function createProduct() {
      const storedProducts = localStorage.getItem('product');
      if (storedProducts) {
          const parsed = JSON.parse(storedProducts);
          if (parsed.length > 0) {
              console.log("✅ Danh sách sản phẩm đã có:", parsed);
          } else {
              console.log("⚠️ Danh sách sản phẩm đang rỗng ([]) — KHÔNG tự khởi tạo.");
          }
      } else {
          console.log("⚠️ Chưa có dữ liệu sản phẩm trong localStorage.");
      }
  }

  function createDefaultProductList() {
      const productArray = [
                  //JUNO
                  { productID: 100, img: 'img/juno/judo_1.webp', name: 'JUNO-Túi Xách Nhỏ Top Handle Phối Khoá', price: 859000},
                  { productID: 101, img: 'img/juno/judo_2.webp', name: 'JUNO-Túi Xách Lớn Tote Lớn CEst Lavie', price: 949000},
                  { productID: 102, img: 'img/juno/judo_3.webp', name: 'JUNO-Túi Xách Nhỏ Hobo Dập Hoạ Tiết Phối Charm', price: 663000},
                  { productID: 103, img: 'img/juno/judo_4.webp', name: 'JUNO-Túi Xách Nhỏ Phối Si Hoạ Tiết Sọc', price: 799000},
                  { productID: 104, img: 'img/juno/judo_5.webp', name: 'JUNO-Túi Xách Nhỏ Dáng Chữ Nhật Radio', price: 799000},
                  { productID: 105, img: 'img/juno/judo_6.webp', name: 'JUNO-Túi Xách Nhỏ Phối Tay Cầm Dây Vải', price: 749000},
                  { productID: 106, img: 'img/juno/judo_7.webp', name: 'JUNO-Túi Xách Nhỏ Phối Tay Cầm La Dolce Vita', price: 849000},
                  { productID: 107, img: 'img/juno/judo_8.webp', name: 'JUNO-Túi Xách Nhỏ Top Handle Trang Trí Khoá', price: 899000},
                  { productID: 108, img: 'img/juno/judo_9.webp', name: 'JUNO-Túi Xách Trung Tote Camping', price: 959000},
                  { productID: 109, img: 'img/juno/judo_10.webp', name: 'JUNO-Ví Nắp Gập In Hoạ Tiết Chuyển Màu', price: 549000},
                  { productID: 110, img: 'img/juno/judo_11.webp', name: 'JUNO-Túi Xách Nhỏ Buckle Flap Trang Trí Charm', price: 849000},
                  { productID: 111, img: 'img/juno/judo_12.webp', name: 'JUNO-Túi Xách Lớn Tote Lớn Phối Ngăn Trang Trí', price: 599000},
                  { productID: 112, img: 'img/juno/judo_13.jpeg', name: 'JUNO-Túi Xách Trung Tote Nhỏ Form Vuông Dây Đeo Webbing', price: 799000},

                  { productID: 113, img: 'img/juno/judo_14.webp', name: 'JUNO-Túi Xách Nhỏ Top Handle Trang Trí Charm', price: 849000},
                  { productID: 114, img: 'img/juno/judo_15.webp', name: 'JUNO-Túi Xách Nhỏ Dây Xích Hoạ Tiết Nautical', price: 899000},
                  { productID: 115, img: 'img/juno/judo_16.webp', name: 'JUNO-Túi Xách Nhỏ Đeo Vai Phối Khoá Xoay Trang Trí', price: 849000},
                  { productID: 116, img: 'img/juno/judo_17.webp', name: 'JUNO-Túi Tote Chần Bông', price: 599000},
                  { productID: 117, img: 'img/juno/judo_18.webp', name: 'JUNO-Túi Xách Lớn Phối Tay Cầm Trang Trí', price: 999000},
                  { productID: 118, img: 'img/juno/judo_19.jpeg', name: 'JUNO-Túi Xách Nhỏ Phối Khoá Camping', price: 899000},
                  { productID: 119, img: 'img/juno/judo_20.webp', name: 'JUNO-Túi Xách Nhỏ Đeo Vai Hoạ Tiết Nautica', price: 849000},
                  { productID: 120, img: 'img/juno/judo_21.webp', name: 'JUNO-Túi Xách Nhỏ Phối Tay Cầm La Dolce Vita', price: 849000},
                  { productID: 121, img: 'img/juno/judo_22.webp', name: 'JUNO-Túi Xách Nhỏ Phối Dây Webbing Bản Lớn', price: 74900},
                  { productID: 122, img: 'img/juno/judo_23.webp', name: 'JUNO-Túi Xách Trung Trang Trí Charm Và Khóa', price: 899000},
                  { productID: 123, img: 'img/juno/judo_24.jpeg', name: 'JUNO-Túi Xách Trung Tote In Logo Jn', price: 899000},
                  { productID: 124, img: 'img/juno/juno_25.webp', name: 'JUNO-Túi Xách Nhỏ Rút May Chỉ Hoạ Tiết Quả Trám', price: 849000},

                  { productID: 125, img: 'img/juno/juno_26.webp', name: 'JUNO-Túi Xách Trung Tote Juno Studio', price: 899000},
                  { productID: 126, img: 'img/juno/juno_27.webp', name: 'JUNO-Túi Xách Lớn Túi Xách Lớn Đeo Vai Form Mềm', price: 849000},
                  { productID: 127, img: 'img/juno/juno_28.webp', name: 'JUNO-Túi Xách Nhỏ Bear Hug', price: 849000},
                  { productID: 128, img: 'img/juno/juno_29.webp', name: 'JUNO-Túi Xách Nhỏ Phối Tay Cầm Marble', price: 649000},
                  { productID: 129, img: 'img/juno/juno_30.webp', name: 'JUNO-Balo Nắp Gập Phối Khoá Kéo Trang Trí', price: 899000},
                  { productID: 130, img: 'img/juno/juno_31.webp', name: 'JUNO-Túi Xách Nhỏ Hobo Trang Trí Logo Border', price: 399000},
                  { productID: 131, img: 'img/juno/juno32.webp', name: 'JUNO-Túi xách lớn Tote Bag phối lưới xuyên thấu', price: 959000},

                  //LEE&TEE
                  { productID: 132, img: 'img/LEE&TEE/leetee_1.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},      
                  { productID: 133, img: 'img/LEE&TEE/leetee_2.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 134, img: 'img/LEE&TEE/leetee_3.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 135, img: 'img/LEE&TEE/leetee_4.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 136, img: 'img/LEE&TEE/leetee_5.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 137, img: 'img/LEE&TEE/leetee_6.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 138, img: 'img/LEE&TEE/leetee_7.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 139, img: 'img/LEE&TEE/leetee_8.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 140, img: 'img/LEE&TEE/leetee_9.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 141, img: 'img/LEE&TEE/leetee_10.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 142, img: 'img/LEE&TEE/leetee_11.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},

                  { productID: 143, img: 'img/LEE&TEE/leetee_12.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 144, img: 'img/LEE&TEE/leetee_13.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 145, img: 'img/LEE&TEE/leetee_14.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 146, img: 'img/LEE&TEE/leetee_15.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 147, img: 'img/LEE&TEE/leetee_16.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 148, img: 'img/LEE&TEE/leetee_17.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 149, img: 'img/LEE&TEE/leetee_18.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 150, img: 'img/LEE&TEE/leetee_19.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 151, img: 'img/LEE&TEE/leetee_20.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 152, img: 'img/LEE&TEE/leetee_21.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 153, img: 'img/LEE&TEE/leetee_22.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},

                  { productID: 154, img: 'img/LEE&TEE/leetee_23.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 155, img: 'img/LEE&TEE/leetee_24.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 156, img: 'img/LEE&TEE/leetee_25.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 157, img: 'img/LEE&TEE/leetee_26.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 158, img: 'img/LEE&TEE/leetee_27.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 159, img: 'img/LEE&TEE/leetee_28.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 160, img: 'img/LEE&TEE/leetee_29.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 161, img: 'img/LEE&TEE/leetee_30.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 162, img: 'img/LEE&TEE/leetee_31.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
                  { productID: 163, img: 'img/LEE&TEE/leetee_32.png', name: 'LEE&Tee-Túi Xách Nhỏ Phối Dây Đeo Chéo', price: 799000},
      ];
  
      localStorage.setItem('product', JSON.stringify(productArray));
      console.log("✅ Đã tạo lại danh sách sản phẩm mặc định.");
      showProductAdmin(0); // hoặc showProductStranger(0) tùy trang
  }
  
  

function helloUser(helloUserId) {    
      let helloUser = document.getElementById(helloUserId); // Lấy phần tử HTML có id là helloUserId
      let userlogin = JSON.parse(localStorage.getItem('userlogin')) // Lấy dữ liệu người dùng từ localStorage và chuyển đổi thành đối tượng JavaScript bằng JSON.parse

      if(userlogin.value == 100) {  // Kiểm tra nếu giá trị thuộc tính 'value' trong đối tượng userlogin là 100 thì là admin và lấy tên admin

            helloUser.innerHTML += userlogin.fullname;
      }else { // ngược lại thì là người sử dụng và lấy tên người sử dụng
            helloUser.innerHTML = userlogin.fullname; 
      }
}
//! USER
var content = document.getElementById('content');  //khai báo Stranger(chưa đăng nhập)
var PageProduct = document.getElementById('numberOfPageProduct')      //khai báo Stranger(chưa đăng nhập)
var content_user = document.getElementById('user-page-content');  // khai báo User(đã đăng nhập)
var PageProduct_user = document.getElementById('user-page-numberOfPageProduct')       //! khai báo User
//! đổi màu button khi nhấn vào 
function scrollToTop() {
      window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth' // Điều này làm cho cuộn mượt hơn
          });
}
function showListPageProductStranger() {
      let productArray = JSON.parse(localStorage.getItem('product'));    // Lấy mảng sản phẩm từ localStorage và chuyển đổi thành đối tượng JavaScript
      let numberOfPageProduct = divideProductPage(productArray).length;  // Tính số lượng trang sản phẩm bằng cách chia mảng sản phẩm thành các trang. Gọi hàmdivideProductPage(). Hàm này có chức năng phân trang

      let PageProductTemp = '';     // Khai báo biến tạm để lưu trữ HTML của các nút trang
      for(let i = 0; i < numberOfPageProduct; i++) { // Duyệt qua từng trang để tạo nút và gắn sự kiện khi người dùng nhấp vào nút
            PageProductTemp += '<button onclick="showProductStranger('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct.innerHTML = PageProductTemp;     // Ghi đè nội dung của phần tử HTML 'PageProduct' bằng nút trang được tạo ra
}
function showListPageProductUser() { //Phần này tương tự phần trên
      
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPage(productArray).length 
      let PageProductTemp = '';
      for(let i = 0; i < pageOfProduct; i++) {
            PageProductTemp += '<button onclick="showProductUser('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct_user.innerHTML = PageProductTemp;
}
function showProductStranger(i) { 

      showListPageProductStranger();
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPage(productArray);
      let contentTemp = '';
      for(let j = 0; j < pageOfProduct[i].length; j++) {
            contentTemp += '<div class="product" onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')"><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
      }// Phần này gọi lại hàm showListPageProductStranger() có chức năng đó là khi chưa đăng nhập mà người dùng bấm vào sản phẩm thì sẽ hiện cảnh báo 
      content.innerHTML = contentTemp;
}
function showProductUser(i) { // phần này thì ngược hàm trên
      
      showListPageProductUser();
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPage(productArray);
      let contentTemp = '';
      for(let j = 0; j < pageOfProduct[i].length; j++) {
            contentTemp += '<div class="product" onclick="productDetail('+pageOfProduct[i][j].productID+')"><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
      }
      content_user.innerHTML = contentTemp;
} 

// var content_product_table = document.getElementById('content-product-table');//? getid của cái bảng sản phẩm
// var addProductContainer = document.getElementById('addProduct-container-img');//? getid của cái hình 
// function addProductAdmin_showIMG() {
//       let addProductIMG = document.getElementById('addproduct-img');
//       if(addProductIMG.value !== "") {
//             addProductContainer.innerHTML = '<img id="showIMGNow"src="'+addProductIMG.value+'" alt="">';//? nếu có value của hình thì hiện ra 
//       } else {
//             addProductContainer.innerHTML = '';//? k có thì khỏi 
//       }
// }

function customAlert(message,type) {//? custom cái thông báo alert
	if (type =='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';//? màu xanh lá
	}
	if (type =='warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';//? màu đỏ
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 500);//? sau 500 mili giây(0.5 giây)
}



function quantitydown() {//? tăng cái số ở cái khung số lượng
      var quantity = document.getElementById('user-page-quantity');
      if(quantity.value != 1) {
            quantity.value--;
      }
}
function quantityup() {//? giảm cái số ở khung số lượng
      var quantity = document.getElementById('user-page-quantity');
      quantity.value++;
}
function productDetail(productID) {//? hiện chi tiết sp
      var productDetail = document.getElementById('user-page-product-detail');
      
      modal_product_detail.style.display = 'none';  
      productDetail.style.display = 'none';//? ẩn đi
      let productArray = JSON.parse(localStorage.getItem('product'));
      var i;
      for (i = 0; i < productArray.length; i++) {
            if(productID == productArray[i].productID) break;//? tìm đến sp cần hiện chi tiết
      }
      productDetail.innerHTML = '<button id="user-page-closeProductDetail" onclick="closeProductDetail()"><i class="fa-solid fa-xmark"></i></button><img src="'+productArray[i].img+'" alt=""><div class="product-detail-right"><h2>'+productArray[i].name+'</h2><h4>Giá : '+currency(productArray[i].price)+'</h4><h4>Số lượng : </h4><button class="product-quantitydown" onclick="quantitydown()">-</button><input type="text" value="1" id="user-page-quantity"><button class="product-quantityup" onclick="quantityup()">+</button><p><button id="user-page-cart-add-btn" onclick="cartAdd('+productArray[i].productID+'),closeProductDetail()">Thêm vào giỏ hàng</button></p></div>'
      
      modal_product_detail.style.display = 'block';
      productDetail.style.display = 'block';//? hiện ra
}
function closeProductDetail(){//? hàm đóng chi tiết sp
      var productDetail = document.getElementById('user-page-product-detail');
      productDetail.style.display = 'none';
      modal_product_detail.style.display = 'none';
}
function showQuantityOfCart(cartQuantity) {//? show số lượng sp của user
      let num = document.getElementById(cartQuantity);
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      if(cartArray == '' || cartArray == null) {//? nếu giỏ hàng trống thì k hiện
            num.innerHTML = 0;
      }else {
            let userlogin = JSON.parse(localStorage.getItem('userlogin'))//? lấy name từ local
            let dem = 0;
            for(let i = 0; i < cartArray.length; i++) {
                  if(userlogin.username == cartArray[i].username) 
                        dem += (1 * cartArray[i].quantity);//? đếm tổng số sp trong giỏ hàng của user đó
            }
            num.innerHTML = dem;
      }
}
function cartAdd(id){//? thêm vào giỏ hàng sp có id là id đc input vào
      
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      let productArray = JSON.parse(localStorage.getItem('product'));
      let userlogin = JSON.parse(localStorage.getItem('userlogin'));

      if(cartArray == '' || cartArray == null) {//? nếu chưa có sp nào thì thêm sp mới
            let i;
            for (i = 0; i < productArray.length; i++) { //? Tìm vị trí của sp cần tìm
                  if(id == productArray[i].productID) break;
            }
            var quantity = document.getElementById('user-page-quantity');
            var productTemp = [{
                  productID:productArray[i].productID,
                  img: productArray[i].img,
                  name:productArray[i].name,
                  price:productArray[i].price,
                  quantity:parseInt(quantity.value,10),
                  fullname:userlogin.fullname,
                  username:userlogin.username,
                  email:userlogin.email,
                  phone:userlogin.phone,
                  status:'Chưa xử lý',
            }]//? lấy thông tin của sp và khách hàng
            localStorage.setItem('cart',JSON.stringify(productTemp)); //? thêm vào local
            customAlert('Thêm vào giỏ hàng thành công', 'success');//? thông báo success
      } else {//? nếu đã có sp trong giỏ thì
            var quantity = document.getElementById('user-page-quantity');
            let flag = false;
            for(let i = 0; i < cartArray.length; i++) {
                  if(cartArray[i].productID == id && cartArray[i].username == userlogin.username) {//? tìm đến sp cẩn thêm vào và tên của khách hàng 
                        cartArray[i].quantity += parseInt(quantity.value,10); //? số lượng sp của user đó tăng lên
                        flag = true;
                        localStorage.setItem('cart',JSON.stringify(cartArray)); //? cập nhật local
                        customAlert('Thêm vào giỏ hàng thành công', 'success');
                        break;
                  }
            }
            if(flag == false) {
                  let j = 0;
                  let productArray = JSON.parse(localStorage.getItem('product'));
                  for(j = 0; j < productArray.length; j++) {
                        if(id == productArray[j].productID) break;//? tìm đến sp cần tìm
                  }
                  var productTemp1 = {
                        productID:productArray[j].productID, 
                        img: productArray[j].img,
                        name:productArray[j].name,
                        price:productArray[j].price,
                        quantity:parseInt(quantity.value,10),
                        fullname:userlogin.fullname,
                        username:userlogin.username,
                        email:userlogin.email,
                        phone:userlogin.phone,
                        status:'Chưa xử lý',
                  }//? lấy thông tin sp và khách hàng
                  cartArray.push(productTemp1);
                  localStorage.setItem('cart',JSON.stringify(cartArray)); //? cập nhật local
                  customAlert('Thêm vào giỏ hàng thành công', 'success');
            }
      }
      showQuantityOfCart('user-page-cart-quantity');
}

//? CART | Giỏ hàng
function deleteCart() {//? xóa hết trong giỏ hàng
      var ans = confirm('Bạn có muốn xóa tất cả sản phẩm trong giỏ hàng ?');
      let userlogin = JSON.parse(localStorage.getItem('userlogin'));
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      if(ans == true) {//? khi ấn đồng ý
            for (let i = 0; i < cartArray.length; i++) {
                  if(cartArray[i].username == userlogin.username) {
                        cartArray.splice(i,1);//? splice(start, deleteCount, item1) trong trường hợp này là chèn vào vị trí i xóa 1 thành phần
                        i--;
                  }//? xóa từng cái đến khi hết của user đó
            }
            localStorage.setItem('cart',JSON.stringify(cartArray));
            showQuantityOfCart('user-cart-page-cart-quantity');//? cập nhật sl giỏ hàng
            showCart();//? cập nhật giỏ hàng
      }
}
function currency(num) {//? hàm tiền
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' đ';//? hiện kiểu tiền vd:curency(123): 123 đ
}
function showCart() {
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      let userlogin = JSON.parse(localStorage.getItem('userlogin'));
      
      var i;
      var cartUser = [];
      for (i = 0; i < cartArray.length; i++) {
            if(cartArray[i].username == userlogin.username) {
                  cartUser.push(cartArray[i]);
            }
      }
      
      if(cartUser == null) {//? nếu không có sp nào trong giỏ
            var contentCartTable = document.getElementById('user-cart-page-cart-table');
            var totalPriceCart = document.getElementById('user-cart-page-totalprice-cart');
            contentCartTable.innerHTML = '<h3 class="notify">Không có sản phẩm nào trong giỏ hàng</h3>';
            totalPriceCart.innerHTML = '0';
      }
      else {//? nếu có thì
            var contentCartTable = document.getElementById('user-cart-page-cart-table');
            var totalPriceCart = document.getElementById('user-cart-page-totalprice-cart');//? tổng tiền
            var cartTable = '<tr><th>Giỏ hàng</th><th class="table-name">Sản phẩm</th><th class="table-price">Giá</th><th class="table-quantity">Số lượng</th><th class="table-total">Tổng</th><th>Tùy chỉnh</th></tr>';
            var tong = 0;
            for (let item of cartUser) {
                  let totalprice = eval(item.price * item.quantity);//? eval là hàm tính toán vd1: eval(2+2): kq1: 4 vd2: eval('2 + 2') === eval('4') kq2: true
                  cartTable += '<tr><td><img src="'+item.img+'" alt=""></td><td class="table-name">'+item.name+'</td><td class="table-price">'+currency(item.price)+'</td><td class="table-quantity" ><button onclick="quantitydown2('+item.productID+')">-</button><input value='+item.quantity+' id="quantity"><button onclick="quantityup2('+item.productID+')">+</button></td><td class="table-total"><span id="cart-totalprice">'+currency(totalprice)+'</span></td> <td><button onclick="removeItemCart('+item.productID+')">X</button></td></tr>'
                  tong += totalprice;
            }
            contentCartTable.innerHTML = cartTable;
            totalPriceCart.innerHTML = currency(tong);
      }
      showQuantityOfCart('user-page-cart-quantity');
}
function quantitydown2(productID) {//? hàm giảm số lượng sp của giỏ hàng
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      for (var i = 0; i < cartArray.length; i++) {
            if(cartArray[i].productID == productID) {//? tìm đến vị trí sp cần tìm
                  if(cartArray[i].quantity > 1) {
                        cartArray[i].quantity--;
                  }
            }
      }
      localStorage.setItem('cart',JSON.stringify(cartArray));//? cập nhật local
      showQuantityOfCart('user-cart-page-cart-quantity')
      showCart();
}
function quantityup2(productID) {//? hàm tăng số lượng sp của giỏ hàng
      var cartArray = JSON.parse(localStorage.getItem('cart'));
      for (var i = 0; i < cartArray.length; i++) {
            if(cartArray[i].productID == productID) {//? tìm đến sp cần tìm
                  cartArray[i].quantity++;
            }
      }
      localStorage.setItem('cart',JSON.stringify(cartArray));
      showQuantityOfCart('user-cart-page-cart-quantity')
      showCart();
}
function removeItemCart(productID) {//? hàm xóa sp trong giỏ hàng
      let alo = confirm("Bạn có muốn xóa sản phẩm này ?");
      if(alo == true) {
            let cartArray = JSON.parse(localStorage.getItem('cart'));
            var i;
            for (i = 0; i < cartArray.length; i++) {
                  if(cartArray[i].productID == productID) break;//? tìm đến vị trí cần xóa
            }
            var ans = confirm('Bạn có muốn xóa sản phẩm này ?');
            if(ans == true) {//? nếu ấn có thì xóa 1 sp từ vị trí i
                  cartArray.splice(i,1);
                  localStorage.setItem('cart',JSON.stringify(cartArray));//? cập nhật lại
                  showCart();
            }
      }
}
function buy() {//? hàm đặt hàng
      let date = new Date();
      let date_year = date.getFullYear();
      let date_month = date.getMonth() + 1;
      let date_day = date.getDate();
      let date_hour = date.getHours();
      let date_minute = date.getMinutes();
      let date_second = date.getSeconds();
      let timeBuy = `${date_hour}:${date_minute}:${date_second} <br> ${date_day} - ${date_month} - ${date_year}`;
      var ans = confirm('Bạn có muốn thanh toán ?')
      
      
      if(ans == true) {

            if(localStorage.getItem('bill') == null) {//? nếu ch có thông tin của cái bill này thì tạo mới 
                  let cartArray = JSON.parse(localStorage.getItem('cart'));
                  let userlogin = JSON.parse(localStorage.getItem('userlogin'));
                  let billList = [];
                  //? Quy ước phần tử đầu tiên là thông tin customer
                  billIndex = {
                        customer : userlogin,
                        info:'',//? phải có khởi tạo để sử dụng += ở dưới
                  }
                  let i = 0;
                  var tong = 0;
                  while(i < cartArray.length) {
                        if(cartArray[i].username == userlogin.username) {
                              billIndex.time = timeBuy;
                              billIndex.info += ''+cartArray[i].quantity+' x '+cartArray[i].name+'<br>';//? sl x tên
                              billIndex.id =  billList.length;
                              billIndex.status = "Chưa xử lý";//? trạng thái chưa xử lí
                              tong += (cartArray[i].quantity * cartArray[i].price);//? tổng = sl * giá
                              cartArray.splice(i,1);//? chèn từ vị trí i xóa 1 phần tử
                              i--;
                        }
                        localStorage.setItem('cart',JSON.stringify(cartArray)); //? cập nhật sp
                        i++;
                  }
                  billIndex.totalprice = tong;
                  showCart();//? cập nhật lại giỏ hàng
                  showQuantityOfCart('user-cart-page-cart-quantity')//? cập nhật sl giỏ hàng
                  billList.push(billIndex);
                  localStorage.setItem('bill',JSON.stringify(billList));
                  customAlert('Bạn đã đặt hàng thành công','success');

            } else { //? có thông tin của bill này rồi thì thêm sửa thôi
                  let userlogin = JSON.parse(localStorage.getItem('userlogin'));
                  let cartArray = JSON.parse(localStorage.getItem('cart'));
                  let billList = JSON.parse(localStorage.getItem('bill'));
                  //? Quy ước phần tử đầu tiên là thông tin customer
                  let billIndex = {
                        customer: userlogin,
                        info:'', //! phải có khởi tạo để sử dụng += ở dưới
                  }
                  let i = 0;
                  var tong = 0;
                  while(i < cartArray.length) {
                        if(cartArray[i].username == userlogin.username) {
                              billIndex.time = timeBuy;
                              billIndex.info += ''+cartArray[i].quantity+' x '+cartArray[i].name+'<br>';
                              billIndex.id =  billList.length;
                              billIndex.status = "Chưa xử lý";//? trạng thái chưa xử lí
                              tong += (cartArray[i].quantity * cartArray[i].price);
                              /* console.log(tong); */
                              cartArray.splice(i,1);//? giảm 1 sp từ vị trí i trong giỏ hàng
                              i--;
                        }
                        localStorage.setItem('cart',JSON.stringify(cartArray))
                        i++;
                  }
                  billIndex.totalprice = tong;
                  showCart();
                  showQuantityOfCart('user-cart-page-cart-quantity')
                  billList.push(billIndex);//? đẩy cái bill của khách hàng vào cái billlist
                  localStorage.setItem('bill',JSON.stringify(billList));//? cập nhật
                  customAlert('Bạn đã đặt hàng thành công','success');
           }
      }
}

function opencontent(id) {//? ấn vào mở sản phẩm, đơn hàng, khách hàng thì hiện block
      closecontent();
      var temp = document.getElementById(id);
      temp.style.display = 'block';
}
function closecontent() {
      let product = document.getElementById('content-product-admin');// btn sản phẩm trong html của admin
      let order = document.getElementById('content-order-admin');// btn đơn hàng trong html của admin
      let user = document.getElementById('content-user-admin');// btn khách hàng trong html của admin
      product.style.display = 'none';
      order.style.display = 'none';
      user.style.display = 'none';
}
//? Đơn hàng
// function showBillAdmin() { // hiện danh sách đơn hàng ( gọi trong removeItemBill / billComplete )
//       if(JSON.parse(localStorage.getItem('bill')) == null) {// kiểm tra dữ liệu có trong localStorage ko
//             let billContent = document.getElementById('content-order-admin')//in thong báo ko có dơn hàng nêú ko có dữ liệu hóa đơn
//             billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><h4>Không có đơn hàng</h4>'
//       } else {// nếu có dữ liệu
//             let billArray = JSON.parse(localStorage.getItem('bill'));// tạo chuỗi tạm để lưu các hóa đơn
//             var billTableTemp = '<tr><th>Ngày Đặt Hàng</th><th>Khách Hàng</th><th>Giá</th><th>Trạng Thái</th><th>Quản lý</th></tr>';
//             for (let i = 0; i < billArray.length; i++) {// thêm một hàng mới với mỗi hóa đơn trong billArray
//                   billTableTemp += '<tr onclick="onclickTagTr(event,'+billArray[i].id+')"><td class="table-td">'+billArray[i].time+'</td><td class="table-name table-td">'+billArray[i].customer.fullname+'</td><td class="table-price table-td">'+currency(billArray[i].totalprice)+'</td>'
//                   if(billArray[i].status == "Chưa xử lý") {//kiểm tra trạng thái hóa đơn, đặt màu 
//                         billTableTemp +='<td style="color:red;" class="table-td">'+billArray[i].status+'</td>'// chưa xử lí : đỏ
//                   } else {
//                         billTableTemp +='<td style="color:blue;" class="table-td">'+billArray[i].status+'</td>'// đã xử lí : xanh
//                   }
//                   billTableTemp += '<td class="delete-bill-btn">Xóa</td></tr>';// nút xóa 1 đơn
//             }// hiển thị bảng đơn hàng
//             let billContent = document.getElementById('content-order-admin')
//             billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><table border="1" id="content-order-table">'+billTableTemp+'</table>';
//       }
// }
// function onclickTagTr(event,id) { // onclick delete : kiểm tra phần tử nhấp vào có phải td và có btn có id='delete-bill-btn' ko
//       if(event.target.tagName == "TD" && event.target.classList.contains('delete-bill-btn')) {
//             removeItemBill(id);
//       } else {
//             showBillDetail(id);
//       }
// }
// function removeItemBill(id) {// xóa hóa đơn
//       let ans = confirm("Bạn có muốn xóa đơn hàng này ?");// gọi hàm confirm, chọn xóa nhấn ok, Ko nhấn cancel
//       if(ans == true) {// chọn ok, billArray lấy dữ liệu
//             let billArray = JSON.parse(localStorage.getItem('bill'));
//             let i ;// for lọc tìm hóa đơn có id trùng id cần xóa
//             for (i = 0; i < billArray.length; i++) {
//                   if(billArray[i].id == id) // nếu có, dùng hàm splice để xóa 1 hóa đơn tại vị trí i
//                         billArray.splice(i,1);
//             }//cập nhật lại localStorage với hóa đơn đã xóa
//             localStorage.setItem('bill',JSON.stringify(billArray));
//             showBillAdmin();// cập nhật danh sách hóa đơn hiển thị
//       }
// }
// function billAdmincolorStatus(i) {// đổi màu trạng thái hóa đơn
//       let billArray = JSON.parse(localStorage.getItem('bill'));
//       let billAdminStatus = document.getElementById('billAdmin-status');
//       if(billArray[i].status == "Chưa xử lý") {
//             billAdminStatus.style.color = "red"; 
//       } else {
//             billAdminStatus.style.color = 'blue'; 
//       }
// }
// function showBillDetail(id) {// chi tiết hóa đơn
//       let billArray = JSON.parse(localStorage.getItem('bill'));// lấy thông tin hóa đơn
//       let billDetail = document.getElementById('billDetail');// lấy chi tiết hóa đơn
//       /* let heightPage = document.body.offsetHeight;
//       modal_bill_detail.style.height = (heightPage+1)+ 'px'; */
//       modal_bill_detail.style.display = 'block';// hiện trang chi tiết sp
//       billDetail.style.display = 'block';// hiện chi tiết sp
//       var i;// for tìm hóa đơn có id chỉ định
//       for (i = 0; i < billArray.length; i++) {
//             if(billArray[i].id == id) {
//                   break;
//             }
//       }// tạo chuỗi chứa thông tin chi tiết hóa đơn
//       let billDetailTemp = '<button id="close_billdetail" onclick="closeBillDetail()" type="button"><i class="fa-solid fa-xmark"></i></button><h2>Chi tiết đơn hàng</h2><h5>Thông tin đơn hàng :</h5><p>'+billArray[i].info+'</p><h5>Tên khách hàng :</h5><p>'+billArray[i].customer.fullname+'</p><h5>Số điện thoại :</h5><p>'+billArray[i].customer.phone+'</p><h5>Tổng giá tiền :</h5><p>'+currency(billArray[i].totalprice)+'</p><h5>Tình trạng :</h5><p id="billdetail-status">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
//       billDetail.innerHTML = billDetailTemp;// cập nhật thông tin vào billDetail
//       billDetailcolorStatus(i)// đổi màu của thông tin hóa đơn
// }
// function billDetailcolorStatus(i) {// màu thông tin chi tiết hóa đơn
//       let billArray = JSON.parse(localStorage.getItem('bill'));
//       let billdetailStatus = document.getElementById('billdetail-status');// lấy thông tin chi tiết hóa đơn
//       if(billArray[i].status == "Chưa xử lý") {
//             billdetailStatus.style.color = "red"; 
//       } else {
//             billdetailStatus.style.color = 'blue'; 
//       }
// }
// function billComplete(i) {// cập nhật trạng thái 
//       let billArray = JSON.parse(localStorage.getItem('bill'));
//       if(billArray[i].status == 'Chưa xử lý') {
//             billArray[i].status = "Đã xử lý";
//             localStorage.setItem('bill',JSON.stringify(billArray));//cập nhật lại vào localStorage
//             showBillAdmin();// gọi hàm để làm mới hiển thị hóa đơn 
//             let billdetailStatus = document.getElementById('billdetail-status');//cập nhật xem hóa đơn chi tiết
//             billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Chưa xử lý</button></p>'
//             billDetailcolorStatus(i);// cập nhật màu trạng thái
//       } else {
//             billArray[i].status = "Chưa xử lý";
//             localStorage.setItem('bill',JSON.stringify(billArray));//cập nhật lại vào localStorage
//             showBillAdmin();// gọi hàm để làm mới hiển thị hóa đơn 
//             let billdetailStatus = document.getElementById('billdetail-status');//cập nhật xem hóa đơn chi tiết
//             billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
//             billDetailcolorStatus(i);// cập nhật màu trạng thái
//       }
// }
// function closeBillDetail() {// đóng xem chi tiết
//       let billDetail = document.getElementById('billDetail');
//       billDetail.style.display = 'none';
//       modal_bill_detail.style.display = 'none';
// }     //                                                    END hóa đơn chi tiết
//? Quản lý Khách hàng
// var manageUser = document.getElementById('content-user-admin');// vùng chứa danh sách hiển thị khách hàng
// function showUserList() {// hiển thị danh sách người dùng
//       let userlist = JSON.parse(localStorage.getItem('userlist'));
//       let manageUser = document.getElementById('content-user-admin');// id bên html admin
//       let manageUserTemp = '<tr><th>STT</th><th>Họ tên khách hàng</th><th>Tên đăng nhập</th><th>Mật khẩu</th><th>Ngày đăng ký</th><th>Xóa</th></tr>'
//       for (let i = 1; i < userlist.length; i++) {// luu thong tin vào manageUser
//             manageUserTemp += '<tr><td>'+(i)+'</td><td>'+userlist[i].fullname+'</td><td>'+userlist[i].username+'</td><td>'+userlist[i].password+'</td><td>'+userlist[i].date_create+'</td><td><button id="removeUser" onclick="removeUser('+i+')">Xóa</button></td></tr>'
//       }// hiển thị
//       manageUser.innerHTML = '<h1 style="margin: 30px auto;">Danh sách khách hàng</h1><table border="1" id="content-order-table">'+manageUserTemp+'</table>'
// }
// function removeUser(i) {// xóa người dùng
//       let ans = confirm('Bạn có chắc muốn xóa người dùng này ?');
//       if(ans == true) { // nhấn ok => true
//             let userlist = JSON.parse(localStorage.getItem('userlist'));
//             userlist.splice(i,1);// xóa người dùng tại vị trí i
//             localStorage.setItem('userlist',JSON.stringify(userlist));// cập nhật localStorage
//             customAlert('Bạn đã xóa sản phẩm thành công','success');
//             showUserList();// gọi hàm để cập nhật danh sách người dùng
//       }
// }

function showSearch() {// hiện tìm kiếm người ch đăng nhập
      modal_search.style.display = 'block';// modal-search: tìm sp khi chưa đ nhập
      let heightPage = document.body.offsetHeight;// chiều cao toàn bộ nội dung tài liệu
      modal_search.style.height = heightPage+'px';// đặt chiều cao của modal_search 
}
function showSearchUser() {// hiện tìm kiếm người dùng
      modal_user_search.style.display = 'block';
      let heightPage = document.body.offsetHeight;
      modal_user_search.style.height = heightPage+'px';
}
function closeSearch() { // đóng tìm kiếm của người chưa đăng nhập
      modal_search.style.display = 'none';
}
function closeSearchUser() {// đóng tìm kiếm của người dùng
      modal_user_search.style.display = 'none';
}
function searchUser() {// tìm kiếm cho người dùng đã đăng nhập
      let searchProductArray; // mảng sản phẩm
      let searchProductPriceFrom = document.getElementById('user-page-search-price-from');
      let searchProductPriceTo = document.getElementById('user-page-search-price-to');
      let search = document.getElementById('user-page-search-info').value.toLowerCase();//giá trị đầu vào tìm kiếm
      let search_product = document.getElementById('user-page-search-product-wrapper');//nơi kết quả tìm kiếm hiển thị
      let searchProductTemp = '';// chứa kết quả tìm kiếm, hiện tại rỗng
      searchProductArray = searchProductPriceUser();// lọc mảng sp dựa trên giá
      if(search == '') { // đầu vào trống
            if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {// phạm vi giá ko chỉ định
                  search_product.innerHTML = '';// xóa tìm kiếm
            } else {// phạm vi gia được chỉ định, Lặp mảng sản phẩm và hiển thị sản phẩm tìm kiếm 
                  for (let i = 0; i < searchProductArray.length; i++) { // productDetail chỗ 658 - 670 ?
                        searchProductTemp += '<div class="search-product" onclick="productDetail('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
                  search_product.innerHTML = searchProductTemp;//cập nhật nội dung tìm kiếm
            }
      } else {// có đầu vào, Lặp mảng sản phẩm và hiển thị sản phẩm tìm kiếm 
            for (let i = 0; i < searchProductArray.length; i++) {
                  if(searchProductArray[i].name.toLowerCase().indexOf(search) !== -1) {
                  searchProductTemp += '<div class="search-product" onclick="productDetail('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
            }
            search_product.innerHTML = searchProductTemp;//cập nhật nội dung tìm kiếm
      }
}

function searchStranger() { // tìm kiếm cho người chưa đăng nhập // khác cái trên chỗ bắt đkí
      let searchProductArray;
      let searchProductPriceFrom = document.getElementById('search-price-from');
      let searchProductPriceTo = document.getElementById('search-price-to');
      let search = document.getElementById('search-info').value.toLowerCase();
      let search_product = document.getElementById('search-product-wrapper');
      let searchProductTemp = '';// chuỗi chứa sản phẩm
      searchProductArray = searchProductPrice();// mảng sản phẩm
      if(search == '') {
            if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {// ko chỉ định giá
                  search_product.innerHTML = '';// xóa tìm kiếm
            } else { // có chỉ định giá, thông báo đăng nhập và hiển thị sp
                  for (let i = 0; i < searchProductArray.length; i++) {
                        searchProductTemp += '<div class="search-product" onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
                  search_product.innerHTML = searchProductTemp;// lưu thay đổi hiển thị
            }     
      } else {
            for (let i = 0; i < searchProductArray.length; i++) {//thông báo đnhap, hiện sp
                  if(searchProductArray[i].name.toLowerCase().indexOf(search) !== -1) {
                        searchProductTemp += '<div class="search-product" onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
            }
            search_product.innerHTML = searchProductTemp;// luư thay đổi hiển thị
      }
}
function searchProductPrice() { // lọc sp theo giá của người chưa đăng kí
      let searchProductPriceFrom = document.getElementById('search-price-from');
      let searchProductPriceTo = document.getElementById('search-price-to');
      let productArray = JSON.parse(localStorage.getItem('product'));// lấy mảng sp gốc từ localStorage
      if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {// ko chỉ định giá
            return productArray;// trả về mảng ban đầu
      } else { // có chỉ định giá from... - to...
            let productArray = JSON.parse(localStorage.getItem('product'));
            let searchProductPriceArray = []; // khởi tạo mảng searchProductPriceArray lưu sp trong khoản giá
            for(let i = 0; i < productArray.length; i++) { //lọc sp có giá trong khoản tìm, thêm vào searchProductPriceArray
                  if(productArray[i].price >= searchProductPriceFrom.value && productArray[i].price <= searchProductPriceTo.value) {
                        searchProductPriceArray.push(productArray[i]); // đẩy sp lọc đc vào mảng
                  }
            }
            return searchProductPriceArray;
      }
}
function searchProductPriceUser() { // lọc sp theo giá của người đã đăng kí
      let searchProductPriceFrom = document.getElementById('user-page-search-price-from');
      let searchProductPriceTo = document.getElementById('user-page-search-price-to');
      let productArray = JSON.parse(localStorage.getItem('product'));
      if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {// ko chỉ định giá
            return productArray;// trả về mảng ban đầu
      } else {
            let productArray = JSON.parse(localStorage.getItem('product'));
            let searchProductPriceArray = [];// khởi tạo mảng lưu sp trong khoản giá
            for(let i = 0; i < productArray.length; i++) { //lọc sp có giá trong khoản tìm, thêm vào searchProductPriceArray
                  if(productArray[i].price >= searchProductPriceFrom.value && productArray[i].price <= searchProductPriceTo.value) {
                        searchProductPriceArray.push(productArray[i]);// đẩy sp lọc đc vào mảng
                  }
            }
            return searchProductPriceArray;
      }
} //                                                 END Quản lý khách hàng


//! Slide Show // ĐÃ XONG ?
function createSlideShowArray() { // tạo mảng slideShow
      if(localStorage.getItem('slideshow') == null) { // kiểm tra, nếu ch có, tạo mảng slideShowArray 
            let slideShowArray = [
                  {slideShowID : 0, img : "./img/slide_1.png"},
                  {slideShowID : 1, img : "./img/slide_2.png"},
                  {slideShowID : 2, img : "./img/slide_3.png"},
                  //{slideShowID : 3, img : "./img/slide_2.png"},
                  //{slideShowID : 4, img : "./img/slide_1.png"},
            ];// lưu vào localStorage
            localStorage.setItem('slideshow',JSON.stringify(slideShowArray)); 
      }
}

var index = 0;// chỉ số của slide
var countDown;// ?

function moveSlideShow(slideShowImg_id) { // chuyển slide
      let slideShow = document.getElementById(slideShowImg_id); 
      let slideShowArray = JSON.parse(localStorage.getItem('slideshow'));

      // Nếu không có dữ liệu, tạo lại và lấy lại mảng
      if (!slideShowArray || slideShowArray.length === 0) {
            console.warn("⚠️ Dữ liệu slideshow chưa có hoặc rỗng → Tạo lại...");
            createSlideShowArray();
            slideShowArray = JSON.parse(localStorage.getItem('slideshow'));
      }

      let numSlides = slideShowArray.length;
      if(index >= numSlides) {
            index = 0;
      } else if(index < 0) {
            index = numSlides - 1;
      }

      slideShow.innerHTML = '<img src="'+slideShowArray[index].img+'" alt="">';

      countDown = setTimeout(function() {
            moveSlideShowAfter(slideShowImg_id);
      }, 2000);
}
function moveSlideShowBefore(slideShowImg_id) { // chuyển sang slide trước
      clearTimeout(countDown);// xóa time hiện tại
      index--;
      moveSlideShow(slideShowImg_id);// gọi moveslideshow típ tục check index rồi hiện ảnh
}
function moveSlideShowAfter(slideShowImg_id) { // chuyển slide sau ( dùng mỗi cái này ? )
      clearTimeout(countDown); // xóa time hiện tại
      index++;
      moveSlideShow(slideShowImg_id);// gọi moveslideshow típ tục check index rồi hiện ảnh
}//                                             END Slide Show


//! Phân trang sản phẩm WebPage
function divideProductPage(array) { // phân trang sản phẩm ( trang chính )
      let pageOfProduct = [];// mảng lưu trữ trang sp
      let productArray = array;
      let pageOfProductTemp = []// mảng chứa sp cho mỗi trang
      let dem = 0;// đặt số lượng sp ddc thêm vào trang
      for(let i = 0; i < productArray.length; i++) { // lặp qua từng sp trong mảng
            pageOfProductTemp.push(productArray[i]); // thêm sp vào trang
            dem++;
            if(dem == 12) {
                  pageOfProduct.push(pageOfProductTemp); // thêm trang vào mảng lưu trữ
                  pageOfProductTemp = []; // reset trang để tạo trang típ theo
                  dem = 0;
            }
      }// thêm trang cuối với những sản phẩm còn dư khi tạo trang (VD: 22sp : 10sp/1trang = 2trang dư 2 sp)
      pageOfProduct.push(pageOfProductTemp);
      /* console.log(pageOfProduct); */
      return pageOfProduct;
}

function divideProductPageAdmin(array) { // phân trang của admin
      let pageOfProduct = []; // mảng chứa trang
      let productArray = array;
      let pageOfProductTemp = []; // trang chứa sp
      let dem = 0;
      for(let i = 0; i < productArray.length; i++) {
            pageOfProductTemp.push(productArray[i]);
            dem++;
            if(dem == 10) { // giới hạn 12 sp trên 1 trang
                  pageOfProduct.push(pageOfProductTemp); // thêm trang vào mảng lưu trữ
                  pageOfProductTemp = [];
                  dem = 0;
            }
      } // thêm trang cuối với những sản phẩm còn dư khi tạo trang
      pageOfProduct.push(pageOfProductTemp);
      /* console.log(pageOfProduct); */
      return pageOfProduct;
}//                                             END Phân trang sản phẩm
//! Sort ( bubble sort )
function showListPageSortedIncrease() { // hiện danh sách trang sp theo tăng dần của người ko đăng nhập
      let productArray = JSON.parse(localStorage.getItem('product'));
      for(let i = 0; i < productArray.length; i++) { // bubble sort sắp tăng dần theo giá 
            for(let j = 0; j < productArray.length - i - 1; j++) {
                  if(productArray[j].price > productArray[j + 1].price) {
                        let temp = productArray[j];
                        productArray[j] = productArray[j + 1];
                        productArray[j + 1] = temp;
                  }
            }
      } // chia mảng đã sắp thành các trang
      let numberOfPageProduct = divideProductPage(productArray).length; // chỉ số trang
      let PageProductTemp = '';// biến lưu thông tin các trang hiển thị
      for(let i = 0; i < numberOfPageProduct; i++) { // in sp + tạo nút cho mỗi trang
            PageProductTemp += '<button onclick="showSortedIncrease('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }// sau khi bấm cái hiện tăng giá thì cái này là số trang hiển thị của sản phẩm tăng theo giá
      PageProduct.innerHTML = PageProductTemp;
}
function showSortedIncrease(i) { // hiện sp tăng dần theo giá của người chưa đăng nhập
      if(i == null) {// kiểm tra trang i có null ko
            i = 0;
      }// lấy dữ liệu từ localstorage
      let productArray = JSON.parse(localStorage.getItem('product'));
            for(let i = 0; i < productArray.length; i++) { // bubble sort sắp xếp tăng dần theo giá
                  for(let j = 0; j < productArray.length - i - 1; j++) {
                        if(productArray[j].price > productArray[j + 1].price) {
                              let temp = productArray[j];
                              productArray[j] = productArray[j + 1];
                              productArray[j + 1] = temp;
                        }
                  }
            }// chia mảng đã sắp thành các trang
            let pageOfProduct = divideProductPage(productArray);
            let contentTemp = '';// chứa nội dung hiển thị
            for(let j = 0; j < pageOfProduct[i].length; j++) {// nội dung hiện thông báo đăng nhập + sp
                  contentTemp += '<div class="product" onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')"><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
            }
            content.innerHTML = contentTemp;// hiển thị sp sắp xếp
}
function showListPageSortedDecrease() {// hiện danh sách trang sp theo giảm dần của người ko đăng nhập
      let productArray = JSON.parse(localStorage.getItem('product'));
      for(let i = 0; i < productArray.length; i++) { // bubble sort sắp giảm dần theo giá 
            for(let j = 0; j < productArray.length - i - 1; j++) {
                  if(productArray[j].price < productArray[j + 1].price) {
                        let temp = productArray[j];
                        productArray[j] = productArray[j + 1];
                        productArray[j + 1] = temp;
                  }
            }
      }// chia mảng đã sắp thành các trang
      let numberOfPageProduct = divideProductPage(productArray).length; // chỉ số trang
      let PageProductTemp = '';// biến lưu thông tin các trang hiển thị
      for(let i = 0; i < numberOfPageProduct; i++) { // in sp + tạo nút cho mỗi trang
            PageProductTemp += '<button onclick="showSortedDecrease('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }// sau khi bấm cái hiện tăng giá thì cái này là số trang hiển thị của sản phẩm giảm theo giá
      PageProduct.innerHTML = PageProductTemp;
}
function showSortedDecrease(i) { // hiện sp giảm dần theo giá của người chưa đăng nhập
      if(i == null) {// kiểm tra trang i có null ko
            i = 0;
      }
      let productArray = JSON.parse(localStorage.getItem('product'));
            for(let i = 0; i < productArray.length; i++) { // bubble sort sắp xếp giảm dần theo giá
                  for(let j = 0; j < productArray.length - i - 1; j++) {
                        if(productArray[j].price < productArray[j + 1].price) {
                              let temp = productArray[j];
                              productArray[j] = productArray[j + 1];
                              productArray[j + 1] = temp;
                        }
                  }
            } // chia mảng đã sắp thành các trang
            let pageOfProduct = divideProductPage(productArray);
            let contentTemp = '';// biến lưu thông tin hiển thị
            for(let j = 0; j < pageOfProduct[i].length; j++) { // nội dung hiện thông báo đăng nhập + sp
                  contentTemp += '<div class="product" onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')"><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
            }
            content.innerHTML = contentTemp;// hiển thị sp sắp xếp
}
// Sắp xếp cho User
function showListPageSortedIncreaseUser() { // hiện danh sách trang sp theo tăng dần của user
      let productArray = JSON.parse(localStorage.getItem('product'));
      for(let i = 0; i < productArray.length; i++) { // bubble sort sắp tăng dần theo giá 
            for(let j = 0; j < productArray.length - i - 1; j++) {
                  if(productArray[j].price > productArray[j + 1].price) {
                        let temp = productArray[j];
                        productArray[j] = productArray[j + 1];
                        productArray[j + 1] = temp;
                  }
            }
      }// chia mảng đã sắp thành các trang
      let numberOfPageProduct = divideProductPage(productArray).length; // chỉ số trang
      let PageProductTemp = '';// biến lưu thông tin các trang hiển thị
      for(let i = 0; i < numberOfPageProduct; i++) { // in sp + tạo nút cho mỗi trang
            PageProductTemp += '<button onclick="showSortedIncrease('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }// User: sau khi bấm cái hiện tăng giá thì cái này là só trang hiển thị của sản phẩm tăng theo giá
      PageProduct_user.innerHTML = PageProductTemp;// hiển thị sp sắp xếp
}
function showSortedIncreaseUser(i) {// hiện sp tăng dần theo giá của user
      if(i == null) {// kiểm tra trang i có null ko
            i = 0;
      }
      let productArray = JSON.parse(localStorage.getItem('product'));
            for(let i = 0; i < productArray.length; i++) {// bubble sort sắp xếp tăng dần theo giá
                  for(let j = 0; j < productArray.length - i - 1; j++) {
                        if(productArray[j].price > productArray[j + 1].price) {
                              let temp = productArray[j];
                              productArray[j] = productArray[j + 1];
                              productArray[j + 1] = temp;
                        }
                  }
            }// chia mảng đã sắp thành các trang
            let pageOfProduct = divideProductPage(productArray);
            let contentTemp = '';// biến lưu thông tin hiển thị
            for(let j = 0; j < pageOfProduct[i].length; j++) { // nội dung hiện sản phẩm
                  contentTemp += '<div class="product" onclick="productDetail('+pageOfProduct[i][j].productID+')""><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
            }
            content_user.innerHTML = contentTemp;// hiển thị sp sắp xếp
}

function showListPageSortedDecreaseUser() { // hiện danh sách trang sp theo giảm dần của user
      let productArray = JSON.parse(localStorage.getItem('product'));
      for(let i = 0; i < productArray.length; i++) { // bubble sort sắp giảm dần theo giá 
            for(let j = 0; j < productArray.length - i - 1; j++) {
                  if(productArray[j].price < productArray[j + 1].price) {
                        let temp = productArray[j];
                        productArray[j] = productArray[j + 1];
                        productArray[j + 1] = temp;
                  }
            }
      }// chia mảng đã sắp thành các trang
      let numberOfPageProduct = divideProductPage(productArray).length; // chỉ số trang
      let PageProductTemp = '';// biến lưu thông tin các trang hiển thị
      for(let i = 0; i < numberOfPageProduct; i++) {// in sp + tạo nút cho mỗi trang
            PageProductTemp += '<button onclick="showSortedDecrease('+i+'),scrollToTop()">'+(i+1)+'</button>'
      }// User: sau khi bấm cái hiện giảm giá thì cái này là só trang hiển thị của sản phẩm giảm theo giá
      PageProduct_user.innerHTML = PageProductTemp;// hiển thị sp sắp xếp
}
function showSortedDecreaseUser(i) { // hiện sp giảm dần theo giá của user
      if(i == null) {// kiểm tra trang i có null ko
            i = 0;
      }
      let productArray = JSON.parse(localStorage.getItem('product'));
            for(let i = 0; i < productArray.length; i++) {// bubble sort sắp giảm dần theo giá 
                  for(let j = 0; j < productArray.length - i - 1; j++) {
                        if(productArray[j].price < productArray[j + 1].price) {
                              let temp = productArray[j];
                              productArray[j] = productArray[j + 1];
                              productArray[j + 1] = temp;
                        }
                  }
            }// chia mảng đã sắp thành các trang
            let pageOfProduct = divideProductPage(productArray);
            let contentTemp = '';// biến lưu thông tin hiển thị
            for(let j = 0; j < pageOfProduct[i].length; j++) { // nội dung hiện sản phẩm
                  contentTemp += '<div class="product" onclick="productDetail('+pageOfProduct[i][j].productID+')""><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
            }
            content_user.innerHTML = contentTemp;// hiển thị sp sắp xếp
}