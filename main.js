function toogleDetail(e) {
  const target = $(e.target);

  if ($(target).hasClass("active")) {
    $(target).html("More Info").removeClass("active");
  } else {
    $(target).html("Less Info").addClass("active");
  }

  const item = $(target).parents(".about-exp-items");
  const detail = $(item).children(".about-detail");

  $(detail).slideToggle();
}

// function onFormSubmit(e) {
//   e.preventDefault();
//   const email = $("#input-email");
//   const subject = $("#input-subject");
//   const message = $("#input-message");

//   console.log("asdasdsa");
//   if (!$(email).val()) {
//     alert("Email is required");
//   } else if (!$(subject).val()) {
//     alert("Subject is required");
//   } else if (!$(message).val()) {
//     alert("Message is required");
//   } else {
//     $(email).val("");
//     $(subject).val("");
//     $(message).val("");
//     alert("Form Completed Submit");
//   }
// }

function onFormSubmit(e) {
  e.preventDefault();

  const fields = {
    email: $("#input-email"),
    subject: $("#input-subject"),
    message: $("#input-message"),
  };

  function showAlert(message) {
    alert(message);
  }

  for (const field in fields) {
    if (!fields[field].val()) {
      showAlert(
        `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
      );
      return;
    }
  }

  Object.values(fields).forEach((field) => field.val(""));
  showAlert("Form Completed Submit");
}
