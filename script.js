function togglePassword() {
  let pass = document.getElementById("password");
  let icon = document.getElementById("eyeIcon");

  if (pass.type === "password") {
    pass.type = "text";
    icon.src = "./assets/hide.png";
  } else {
    pass.type = "password";
    icon.src = "./assets/show.png";
  }
}

document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // VALIDASI USERNAME (minimal 5 karakter)
  if (username.length < 3) {
    alert("Username tidak valid! Minimal 3 karakter");
    return;
  }

  // VALIDASI PASSWORD (minimal 5 karakter)
  if (password.length < 5) {
    alert("Password minimal 5 karakter!");
    return;
  }

  // JIKA VALID
  alert("Sign in berhasil!");

  // RESET FORM
  this.reset();

  // KEMBALIKAN KE DEFAULT
  document.getElementById("eyeIcon").src = "./assets/show.png";
  document.getElementById("password").type = "password";
});
