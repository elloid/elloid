function sendMail(e) {
  var params = {
    Fname: document.getElementById("Fname").value,
    Lname: document.getElementById("Lname").value,
    mobileNo: document.getElementById("mobileNo").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  if (
    params.Fname == null ||
    params.Fname == "" ||
    params.Lname == null ||
    params.Lname == "" ||
    params.email == null ||
    params.email == "" ||
    params.mobileNo == null ||
    params.mobileNo == "" ||
    params.message == null ||
    params.message == ""
  ) {
    Swal.fire({
      icon: "error",
      showConfirmButton: false,
      timer: 3000,
      title: "Oops...",
      text: "Fields Can’t be blank or empty",
    });
    e.preventDefault();
  } else {
    const serviceID = "service_yvts048";
    const templateID = "template_6eukvdi";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 6000,
            title: "Message Sent Successfully!",
            text: "A member of our support team will respond to your message within hours. Thank you for your patience",
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            showConfirmButton: false,
            timer: 6000,
            title: "Error, Check your internet connection!",
          });
        }
      })
      .catch((err) => console.log(err));
  }
}
