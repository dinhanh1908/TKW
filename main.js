function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = {
    username: username,
    email: email,
    password: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Chúc mừng bạn đã đăng ký thành công");
  window.location.href = "logins.html";
}
function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (!user) {
    alert("Vui lòng thử lại!");
  } else if (
    username == data.username &&
    email == data.email &&
    password == data.password
  ) {
    alert("Đăng nhập thành công");
    window.location.href = "index.html";
  } else {
    alert("Đăng nhập thất bại. Xin vui lòng thử lại!");
  }
}
