// FUNGSI Password
function togglePass(inputId, iconId) {
  let input = document.getElementById(inputId);
  let icon = document.getElementById(iconId);

  if (input.type === "password") {
    input.type = "text";
    icon.src = "./assets/hide.png";
  } else {
    input.type = "password";
    icon.src = "./assets/show.png";
  }
}

// VALIDASI FORM
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;

  if (!username || !email || !pass || !confirm) {
    alert("Semua field wajib diisi!");
    return;
  }

  if (pass !== confirm) {
    alert("Password tidak sama!");
    return;
  }

  alert("Sign up berhasil!");

  this.reset();

  document.getElementById("icon1").src = "./assets/show.png";
  document.getElementById("icon2").src = "./assets/show.png";

  document.getElementById("password").type = "password";
  document.getElementById("confirm").type = "password";
});
