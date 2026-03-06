const content = document.querySelector("#content");
const submit = document.querySelector("#add");
window.addEventListener("load", () => {
  getUsers();
});

function getUsers() {
  let html = "";
  //FETCH API
  fetch("https://enrollment-ylkk.onrender.com/api/enrollments", {
    mode: "cors",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        html += `<li>${element.id} - ${element.fullName} - ${element.course} - ${element.yearLevel} - ${element.email} - ${element.createdAt}</li>`;
      });
      content.innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

//POST API
submit.addEventListener("click", () => {
  if (fullName === "") {
    alert("Full Name must be filled out");
    event.preventDefault();
  }
  if (course === "") {
    alert("Course must be filled out");
    event.preventDefault();
  }
  if (yearLevel === "") {
    alert("Year Level must be filled out");
    event.preventDefault();
  }
  if (email === "") {
    alert("Email must be filled out");
    event.preventDefault();
  }
  const student = {
    fullName: document.querySelector("#fullName").value,
    course: document.querySelector("#course").value,
    yearLevel: document.querySelector("#yearLevel").value,
    email: document.querySelector("#email").value,
  };
  fetch("https://enrollment-ylkk.onrender.com/api/enrollments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  }).catch((error) => {
    console.log(error);
  });
  alert("Student enrolled successfully");
  location.reload();
});
