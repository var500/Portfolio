let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username");
  let email = document.getElementById("email-id");
  let textmsg = document.getElementById("text-area");

  if (username.value == "" || email.value == "" || textmsg == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `Thanks ${username.value} for your response. I will get back to you asap`
    );

    username.value = "";
    email.value = "";
    textmsg.value = "";

  }
  // handle submit
});
