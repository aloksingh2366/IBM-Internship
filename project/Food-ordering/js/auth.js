// SIGNUP FUNCTION
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;
    const role = document.querySelector('input[name="role"]:checked').value;

    // Clear all errors first
    clearError("nameError");
    clearError("emailError");
    clearError("passwordError");
    clearError("confirmPasswordError");
    clearError("termsError");

    // Validate name
    if (!name || name.length < 3) {
      showError("nameError", "Name must be at least 3 characters");
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      showError("emailError", "Please enter a valid email address");
      return;
    }

    // Check if email already exists
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(u => u.email === email)) {
      showError("emailError", "Email already registered. Please login.");
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      showError("passwordError", "Password must be at least 6 characters");
      return;
    }

    if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      showError("passwordError", "Password must contain letters and numbers");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      showError("confirmPasswordError", "Passwords do not match");
      return;
    }

    // Validate terms acceptance
    if (!terms) {
      showError("termsError", "Please accept the Terms & Conditions");
      return;
    }

    // Create user object
    const user = {
      id: Date.now(),
      name,
      email,
      password,
      role: role || 'user',
      createdAt: new Date().toISOString()
    };

    // Save user to localStorage
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(user));

    // Show success message
    showSuccessMessage("Account created successfully! Redirecting to login...");
    
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
}

// SIGNUP PASSWORD VISIBILITY TOGGLE
const togglePasswordBtn = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePasswordBtn && passwordInput) {
  togglePasswordBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });
}

// CONFIRM PASSWORD VISIBILITY TOGGLE
const toggleConfirmPasswordBtn = document.getElementById("toggleConfirmPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");

if (toggleConfirmPasswordBtn && confirmPasswordInput) {
  toggleConfirmPasswordBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
    confirmPasswordInput.setAttribute("type", type);
    
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });
}

// SIGNUP FORM - CLEAR ERRORS ON FOCUS
const nameInput = document.getElementById("name");
if (nameInput) {
  nameInput.addEventListener("focus", function() {
    clearError("nameError");
  });
}

const signupEmailInput = document.getElementById("email");
if (signupEmailInput && signupForm) {
  signupEmailInput.addEventListener("focus", function() {
    clearError("emailError");
  });
}

if (passwordInput && signupForm) {
  passwordInput.addEventListener("focus", function() {
    clearError("passwordError");
  });
}

if (confirmPasswordInput) {
  confirmPasswordInput.addEventListener("focus", function() {
    clearError("confirmPasswordError");
  });
}

const termsInput = document.getElementById("terms");
if (termsInput) {
  termsInput.addEventListener("change", function() {
    clearError("termsError");
  });
}

// LOGIN FUNCTION
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate email format
    if (!validateEmail(email)) {
      showError("emailError", "Please enter a valid email address");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      showError("passwordError", "Password must be at least 6 characters");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      showSuccessMessage("Login Successful! Redirecting...");
      
      // Redirect based on role
      setTimeout(() => {
        if (user.role === 'admin') {
          window.location.href = "admin/dashboard.html";
        } else {
          window.location.href = "index.html";
        }
      }, 1000);
    } else {
      showError("passwordError", "Invalid email or password!");
    }
  });
}

// PASSWORD VISIBILITY TOGGLE
const togglePasswordBtn = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePasswordBtn && passwordInput) {
  togglePasswordBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });
}

// EMAIL VALIDATION
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// SHOW ERROR MESSAGE
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
}

// CLEAR ERROR MESSAGE
function clearError(elementId) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

// SHOW SUCCESS MESSAGE
function showSuccessMessage(message) {
  // You can replace this with a toast notification later
  console.log(message);
}

// CLEAR ERRORS ON INPUT FOCUS
const emailInput = document.getElementById("email");
if (emailInput) {
  emailInput.addEventListener("focus", function() {
    clearError("emailError");
  });
}

if (passwordInput) {
  passwordInput.addEventListener("focus", function() {
    clearError("passwordError");
  });
}
