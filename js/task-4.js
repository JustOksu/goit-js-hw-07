document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();

    if (!emailValue || !passwordValue) {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);

    form.reset();
  });
});
