var signin_wrapper = document.getElementById('signin-wrapper');
var login_wrapper = document.getElementById('login-wrapper');
var modal_signin = document.getElementById('modal-signin');
var modal_login = document.getElementById('modal-login');
var modal_search = document.getElementById('modal-search');
var modal_user_search = document.getElementById('user-page-modal-search');
var modal_product_detail = document.getElementById('user-page-modal-product-detail');
var modal_bill_detail = document.getElementById('modal-billDetail');
var sectionStranger = document.getElementById('stranger-page');
var sectionUser = document.getElementById('user-page')
var sectionCart = document.getElementById('user-cart-page');
function showSectionStranger() {
      localStorage.removeItem('userlogin');
      sectionCart.style.display = 'none';
      sectionUser.style.display = 'none';
      sectionStranger.style.display = 'block';
      scrollToTop()
}
function showSectionUser() {
      sectionCart.style.display = 'none';
      sectionStranger.style.display = 'none';
      sectionUser.style.display = 'block';
      createAdmin();
      createProduct();
      showProductUser(0);
      helloUser('user-page-helloUser');
      showQuantityOfCart('user-page-cart-quantity');
      createSlideShowArray();
      moveSlideShow('user_page_slideShow_img');
      scrollToTop()
}
function showSectionCart() {
      sectionUser.style.display = 'none';
      sectionStranger.style.display = 'none';
      sectionCart.style.display = 'block';
      createAdmin();
      createProduct();
      showCart();
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
}
function showLogin() {
      modal_signin.style.display = 'none';
      signin_wrapper.style.display = 'none';
      modal_login.style.display = 'block';
      login_wrapper.style.display = 'block';
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

function logoutAdmin() {
      var ans = confirm('Bạn có chắc muốn đăng xuất không ?');
      if (ans == true) {
            localStorage.removeItem('userlogin');
            customAlert('Bạn đã đăng xuất thành công !','success');
            setTimeout(function(){
                  window.location.href = '/index.html'; 
            }, 500);
      } 
}

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
      let helloUser = document.getElementById(helloUserId);
      let userlogin = JSON.parse(localStorage.getItem('userlogin'))
      if(userlogin.value == 100) {
            helloUser.innerHTML += userlogin.fullname;
      }else {
            helloUser.innerHTML = userlogin.fullname;
      }
}
//! USER

var content = document.getElementById('content');
var PageProduct = document.getElementById('numberOfPageProduct')       //! khai báo Stranger
var content_user = document.getElementById('user-page-content');
var PageProduct_user = document.getElementById('user-page-numberOfPageProduct')       //! khai báo User
//! đổi màu button khi nhấn vào 
function scrollToTop() {
      window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth' // Điều này làm cho cuộn mượt hơn
          });
}

function showProductUser(i) {
      
      showListPageProductUser();
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPage(productArray);
      let contentTemp = '';
      for(let j = 0; j < pageOfProduct[i].length; j++) {
            contentTemp += '<div class="product" onclick="productDetail('+pageOfProduct[i][j].productID+')"><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
      }
      content_user.innerHTML = contentTemp;
}
//! ADMIN 
var content_product_table = document.getElementById('content-product-table');
var addProductContainer = document.getElementById('addProduct-container-img');
function addProductAdmin_showIMG() {
      let addProductIMG = document.getElementById('addproduct-img');
      if(addProductIMG.value !== "") {
            addProductContainer.innerHTML = '<img id="showIMGNow"src="'+addProductIMG.value+'" alt="">';
      } else {
            addProductContainer.innerHTML = '';
      }
}
function showListPageProductAdmin() {
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPageAdmin(productArray).length //? = 5
      let PageProductTemp = '';
      for(let i = 0; i < pageOfProduct; i++) {
            PageProductTemp += '<button onclick="showProductAdmin('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct.innerHTML = PageProductTemp;
}
function showProductAdmin(i) {
      showListPageProductAdmin();
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPageAdmin(productArray);
      var tableProduct = '<tr><th>ID</th> <th>Ảnh</th> <th>Tên sản phẩm</th> <th>Giá</th> <th>Option</th></tr>';
      for(let j = 0; j < pageOfProduct[i].length; j++) {      
            tableProduct += '<tr><td>'+pageOfProduct[i][j].productID+'</td><td><img src="'+pageOfProduct[i][j].img+'" alt=""></td><td class="table-name">'+pageOfProduct[i][j].name+'</td><td class="table-price">'+currency(pageOfProduct[i][j].price)+'</td><td><button class="option-btn-admin" onclick="deleteProduct('+pageOfProduct[i][j].productID+')">Xóa</button><br><button class="option-btn-admin" onclick="changeProductAdmin('+pageOfProduct[i][j].productID+')">Sửa</button></td></tr>';
      }
      content_product_table.innerHTML = tableProduct;
      /* ------ */
}
function changeProductAdmin(id) {
      let productArray = JSON.parse(localStorage.getItem('product'));

      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');
      var i;
      for (i = 0; i < productArray.length; i++) {
            if(productArray[i].productID == id) {
                  break;
            }
      }
      addProductName.value = productArray[i].name;
      addProductPrice.value = productArray[i].price;
      addProductImg.value = productArray[i].img;
      addProductAdmin_showIMG()
}
//! chú ý -----------------------------------------------------------------------------------------------------------------------------
function addProductAdmin() {
      let flag = false;
      let productArray = JSON.parse(localStorage.getItem('product'));
      
      var productID = productArray[(productArray.length) - 1].productID + 1;
      //xử lí khi trường hợp mảng bị rỗng không thể add sản phẩm
      /*var productID = productArray.length > 0 ? productArray[productArray.length - 1].productID + 1 : 100;*/

      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');
      
            if (addProductName.value == '' || addProductPrice.value == '') {
                  customAlert('Thông tin sản phẩm không hợp lệ','warning')
            } else {
                  customAlert('Thêm sản phẩm thành công','success')
                  var productTemp = {
                        productID:productID,
                        img:addProductImg.value,
                        name:addProductName.value,
                        price:parseInt(addProductPrice.value),
                  }
                  for(let i = 0; i < productArray.length; i++) {
                        if(productArray[i].img == addProductImg.value) {
                              flag = true;
                              productArray[i] = productTemp;
                              
                              localStorage.setItem('product',JSON.stringify(productArray));
                              let pageOfProduct = divideProductPageAdmin(productArray);
                              addProductAdmin_format();
                              showProductAdmin(pageOfProduct.length-1);
                        }
                  }
                  if(flag == false) {
                        productArray.push(productTemp);
                        localStorage.setItem('product',JSON.stringify(productArray));
                        let pageOfProduct = divideProductPageAdmin(productArray);
                        addProductAdmin_format();
                        showProductAdmin(pageOfProduct.length-1);
                  }
            }
}
function addProductAdmin_format() {
      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');

      addProductName.value = '';
      addProductImg.value = '';
      addProductPrice.value = '';
      addProductAdmin_showIMG()
}
function deleteProduct(ProductIdDelete) {
      let ans = confirm("Bạn có muốn xóa sản phẩm này ?");
      if(ans == true) {
            let productArray = JSON.parse(localStorage.getItem('product'));
            for (let i = 0; i < productArray.length; i++) {
                  if(productArray[i].productID == ProductIdDelete) {
                        productArray.splice(i,1);
                  }
            }
            localStorage.setItem('product',JSON.stringify(productArray));
            customAlert('Bạn đã xóa sản phẩm thành công','success');
            showProductAdmin(0);
      }
}

function customAlert(message,type) {
	if (type =='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type =='warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 500);
}




function opencontent(id) {
      closecontent();
      var temp = document.getElementById(id);
      temp.style.display = 'block';
}
function closecontent() {
      let product = document.getElementById('content-product-admin');
      let order = document.getElementById('content-order-admin');
      let user = document.getElementById('content-user-admin');
      product.style.display = 'none';
      order.style.display = 'none';
      user.style.display = 'none';

}
//? Đơn hàng
function showBillAdmin() { // phú
      if(JSON.parse(localStorage.getItem('bill')) == null) {
            let billContent = document.getElementById('content-order-admin')
            billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><h4>Không có đơn hàng</h4>'
      } else {
            let billArray = JSON.parse(localStorage.getItem('bill'));
            var billTableTemp = '<tr><th>Ngày Đặt Hàng</th><th>Khách Hàng</th><th>Số Điện Thoại</th><th>Giá</th><th>Trạng Thái</th><th>Quản lý</th></tr>';

            for (let i = 0; i < billArray.length; i++) {
                  billTableTemp += '<tr onclick="onclickTagTr(event,'+billArray[i].id+')"><td class="table-td">'+billArray[i].time+'</td><td class="table-name table-td">'+billArray[i].customer.fullname+'</td><td class="table-phone table-td">'+billArray[i].customer.phone+'</td><td class="table-price table-td">'+currency(billArray[i].totalprice)+'</td>'
                  if(billArray[i].status == "Chưa xử lý") {
                        billTableTemp +='<td style="color:red;" class="table-td">'+billArray[i].status+'</td>'
                  } else {
                        billTableTemp +='<td style="color:blue;" class="table-td">'+billArray[i].status+'</td>'
                  }
                  billTableTemp += '<td class="delete-bill-btn">Xóa</td></tr>';
            }
            let billContent = document.getElementById('content-order-admin')
            billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><table border="1" id="content-order-table">'+billTableTemp+'</table>';
      }
}
function onclickTagTr(event,id) {
      if(event.target.tagName == "TD" && event.target.classList.contains('delete-bill-btn')) {
            removeItemBill(id);
      } else {
            showBillDetail(id);
      }
}
function removeItemBill(id) {
      let ans = confirm("Bạn có muốn xóa đơn hàng này ?");
      if(ans == true) {
            let billArray = JSON.parse(localStorage.getItem('bill'));
            let i ;
            for (i = 0; i < billArray.length; i++) {
                  if(billArray[i].id == id) 
                        billArray.splice(i,1);
            }
            localStorage.setItem('bill',JSON.stringify(billArray));
            showBillAdmin();
      }
}
function billAdmincolorStatus(i) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      let billAdminStatus = document.getElementById('billAdmin-status');
      if(billArray[i].status == "Chưa xử lý") {
            billAdminStatus.style.color = "red"; 
      } else {
            billAdminStatus.style.color = 'blue'; 
      }
}
function showBillDetail(id) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      let billDetail = document.getElementById('billDetail');

      /* let heightPage = document.body.offsetHeight;
      modal_bill_detail.style.height = (heightPage+1)+ 'px'; */

      modal_bill_detail.style.display = 'block';
      billDetail.style.display = 'block';
      var i;
      for (i = 0; i < billArray.length; i++) {
            if(billArray[i].id == id) {
                  break;
            }
      }
      let billDetailTemp = '<button id="close_billdetail" onclick="closeBillDetail()" type="button"><i class="fa-solid fa-xmark"></i></button><h2>Chi tiết đơn hàng</h2><h5>Thông tin đơn hàng :</h5><p>'+billArray[i].info+'</p><h5>Tên khách hàng :</h5><p>'+billArray[i].customer.fullname+'</p><h5>Số điện thoại :</h5><p>'+billArray[i].customer.phone+'</p><h5>Tổng giá tiền :</h5><p>'+currency(billArray[i].totalprice)+'</p><h5>Tình trạng :</h5><p id="billdetail-status">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
      billDetail.innerHTML = billDetailTemp;
      billDetailcolorStatus(i)
}
function billDetailcolorStatus(i) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      let billdetailStatus = document.getElementById('billdetail-status');
      if(billArray[i].status == "Chưa xử lý") {
            billdetailStatus.style.color = "red"; 
      } else {
            billdetailStatus.style.color = 'blue'; 
      }
}
function billComplete(i) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      if(billArray[i].status == 'Chưa xử lý') {
            billArray[i].status = "Đã xử lý";
            localStorage.setItem('bill',JSON.stringify(billArray));
            showBillAdmin();
            let billdetailStatus = document.getElementById('billdetail-status');
            billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Chưa xử lý</button></p>'
            billDetailcolorStatus(i)
      } else {
            billArray[i].status = "Chưa xử lý";
            localStorage.setItem('bill',JSON.stringify(billArray));
            showBillAdmin();
            let billdetailStatus = document.getElementById('billdetail-status');
            billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
            billDetailcolorStatus(i)
      }
}
function closeBillDetail() {
      let billDetail = document.getElementById('billDetail');
      billDetail.style.display = 'none';
      modal_bill_detail.style.display = 'none';
}
// ? Đơn hàng // Phú
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
                  // if(billArray[i].id == id) // nếu có, dùng hàm splice để xóa 1 hóa đơn tại vị trí i
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



//? Quản lý Khách hàng - phú
var manageUser = document.getElementById('content-user-admin');
function showUserList() {
      let userlist = JSON.parse(localStorage.getItem('userlist'));
      let manageUser = document.getElementById('content-user-admin');
      
      let manageUserTemp = '<tr><th>STT</th><th>Họ tên khách hàng</th><th>Tên đăng nhập</th><th>Mật khẩu</th><th>Ngày đăng ký</th><th>Xóa</th></tr>'

      for (let i = 1; i < userlist.length; i++) {
            manageUserTemp += '<tr><td>'+(i)+'</td><td>'+userlist[i].fullname+'</td><td>'+userlist[i].username+'</td><td>'+userlist[i].password+'</td><td>'+userlist[i].date_create+'</td><td><button id="removeUser" onclick="removeUser('+i+')">Xóa</button></td></tr>'
      }
      manageUser.innerHTML = '<h1 style="margin: 30px auto;">Danh sách khách hàng</h1><table border="1" id="content-order-table">'+manageUserTemp+'</table>'
}
function removeUser(i) {
      let ans = confirm('Bạn có chắc muốn xóa người dùng này ?');
      if(ans == true) {
            let userlist = JSON.parse(localStorage.getItem('userlist'));
            userlist.splice(i,1);
            localStorage.setItem('userlist',JSON.stringify(userlist));
            customAlert('Bạn đã xóa sản phẩm thành công','success');
            showUserList();
      }
}
function showSearch() {
      modal_search.style.display = 'block';
      let heightPage = document.body.offsetHeight;
      modal_search.style.height = heightPage+'px';
}
function showSearchUser() {
      modal_user_search.style.display = 'block';
      let heightPage = document.body.offsetHeight;
      modal_user_search.style.height = heightPage+'px';
}

function closeSearch() {
      modal_search.style.display = 'none';
}
function closeSearchUser() {
      modal_user_search.style.display = 'none';
}
function searchUser() {
      
      let searchProductArray;
      
      let searchProductPriceFrom = document.getElementById('user-page-search-price-from');
      let searchProductPriceTo = document.getElementById('user-page-search-price-to');

      let search = document.getElementById('user-page-search-info').value.toLowerCase();
      let search_product = document.getElementById('user-page-search-product-wrapper');
      let searchProductTemp = '';
      
      searchProductArray = searchProductPriceUser();

      if(search == '') {
            if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
                  search_product.innerHTML = '';
            } else {
                  for (let i = 0; i < searchProductArray.length; i++) {
                        searchProductTemp += '<div class="search-product" onclick="productDetail('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
                  search_product.innerHTML = searchProductTemp;
            }
      } else {
            for (let i = 0; i < searchProductArray.length; i++) {
                  if(searchProductArray[i].name.toLowerCase().indexOf(search) !== -1) {
                  searchProductTemp += '<div class="search-product" onclick="productDetail('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
            }
            search_product.innerHTML = searchProductTemp;
      }
}

function divideProductPageAdmin(array) {
      let pageOfProduct = [];
      let productArray = array;
      let pageOfProductTemp = []
      let dem = 0;
      for(let i = 0; i < productArray.length; i++) {
            pageOfProductTemp.push(productArray[i]);
            dem++;
            if(dem == 10) {
                  pageOfProduct.push(pageOfProductTemp);
                  pageOfProductTemp = [];
                  dem = 0;
            }
      }
      pageOfProduct.push(pageOfProductTemp); //? thêm những sản phẩm còn dư khi tạo trang (VD: 22sp : 10 = 2 dư 2)
      /* console.log(pageOfProduct); */
      return pageOfProduct;
}
function currency(num) {//? hàm tiền
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' đ';//? hiện kiểu tiền vd:curency(123): 123 đ
}