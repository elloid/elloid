let emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
//   ageReg = /^[1-9][0-9]?$|^100$/,
//   passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Global variables
let mobileNo = document.getElementById("mobileNo"),
  email = document.getElementById("email");

let emailValid = () => {
  if (emailReg.test(email.value)) {
    $("#emailAlert").css("display", "none");
  } else $("#emailAlert").css("display", "block");
};

let mobileNoValid = () => {
  if (phoneReg.test(mobileNo.value)) {
    $("#phoneAlert").css("display", "none");
  } else $("#phoneAlert").css("display", "block");
};

email.addEventListener("keyup", emailValid),
  mobileNo.addEventListener("keyup", mobileNoValid);

// Contact Word Count
$(function () {
  let maxChar = 300;

  $("textarea").keyup(function () {
    let charLength = $(this).val().length;
    let character = maxChar - charLength;

    if (character <= 0) {
      // Setting Text
      $("#char").text("You have exceeded the limited characters");
    } else {
      // Getting Text
      $("#char").text(character);
    }
  });
});
