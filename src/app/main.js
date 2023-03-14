// let form = document.querySelector("form");
// let buttonSubmit = document.getElementById("button-submit");

// function addAndRemoveClass(element, classToAdd, classToRemove) {
//   element.classList.add(classToAdd);
//   element.classList.remove(classToRemove);
// }

// function formSubmited(evt) {
//   evt.preventDefault();
//   console.log(evt);

//   let name = evt.target[0];
//   let age = evt.target[1];
//   let email = evt.target[2];

//   let errorMessages = document.getElementsByClassName("text-danger");

//   console.log(errorMessages);
//   if (name.value === "") {
//     name.className = "input-error";
//     addAndRemoveClass(errorMessages[0], "d-block", "d-none");
//   }
//   if (age.value === "") {
//     age.className = "input-error";
//     addAndRemoveClass(errorMessages[1], "d-block", "d-none");
//   }
//   if (email.value === "") {
//     email.className = "input-error";
//     addAndRemoveClass(errorMessages[2], "d-block", "d-none");
//   }
// }

// form.addEventListener("submit", formSubmited);

// buttonSubmit.disabled = true;
// form.addEventListener("input", (evt) => {
//   let nameValid = document.getElementById("name").checkValidity();
//   let ageValid = document.getElementById("age").checkValidity();
//   let emailValid = document.getElementById("email").checkValidity();

//   if (nameValid && emailValid && ageValid) {
//     buttonSubmit.disabled = false;
//   } else {
//     buttonSubmit.disabled = true;
//   }
// });
