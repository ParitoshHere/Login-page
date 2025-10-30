// Toggle forms
const toggleLink = document.getElementById('toggleLink');
const toggleText = document.getElementById('toggleText');
const formTitle = document.getElementById('formTitle');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const themeToggle = document.getElementById('themeToggle');

toggleLink.addEventListener('click', () => {
  const isLogin = loginForm.classList.contains('d-none');
  if (isLogin) {
    loginForm.classList.remove('d-none');
    registerForm.classList.add('d-none');
    formTitle.innerText = 'Login';
    toggleText.innerText = "Don’t have an account?";
    toggleLink.innerText = "Register";
  } else {
    loginForm.classList.add('d-none');
    registerForm.classList.remove('d-none');
    formTitle.innerText = 'Register';
    toggleText.innerText = "Already have an account?";
    toggleLink.innerText = "Login";
  }
});

// Toggle password eye icon
document.querySelectorAll('.togglePassword').forEach(icon => {
  icon.addEventListener('click', () => {
    const input = icon.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
    icon.classList.toggle('bi-eye');
    icon.classList.toggle('bi-eye-slash');
  });
});

// Emoji update logic
function updateEmoji(id, type, valid) {
  const el = document.getElementById(id);
  if (valid) {
    el.textContent = type === 'email' ? '😎' : type === 'user' ? '😁' : '😊';
  } else {
    el.textContent = type === 'email' ? '😕' : type === 'user' ? '😐' : '😠';
  }
}

// Validation helpers
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Login form validation
document.getElementById('loginEmail').addEventListener('input', e => {
  updateEmoji('loginEmailEmoji', 'email', isValidEmail(e.target.value));
});
document.getElementById('loginPassword').addEventListener('input', e => {
  updateEmoji('loginPassEmoji', 'pass', e.target.value.length >= 6);
});

// Register form validation
document.getElementById('regUsername').addEventListener('input', e => {
  updateEmoji('regUserEmoji', 'user', e.target.value.length >= 3);
});
document.getElementById('regEmail').addEventListener('input', e => {
  updateEmoji('regEmailEmoji', 'email', isValidEmail(e.target.value));
});
document.getElementById('regPassword').addEventListener('input', e => {
  updateEmoji('regPassEmoji', 'pass', e.target.value.length >= 6);
});
document.getElementById('confirmPassword').addEventListener('input', e => {
  const pass = document.getElementById('regPassword').value;
  const valid = e.target.value === pass && e.target.value.length > 0;
  const el = document.getElementById('confirmPassEmoji');
  el.textContent = valid ? '😍' : '😢';
});

// Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('bi-moon');
  icon.classList.toggle('bi-sun');
});
