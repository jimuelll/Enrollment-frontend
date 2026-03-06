const content = document.querySelector("#content");
const submit = document.querySelector("#add");
window.addEventListener("load", () => {
  getUsers();
});

function getUsers() {
  let html = "";
  //FETCH API
  fetch("https://enrollment-1-e9pe.onrender.com/api/enrollments", {
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
  const student = {
    fullName: document.querySelector("#fullName").value,
    course: document.querySelector("#course").value,
    yearLevel: document.querySelector("#yearLevel").value,
    email: document.querySelector("#email").value,
  };
  fetch("https://enrollment-1-e9pe.onrender.com/api/enrollments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  }).catch((error) => {
    console.log(error);
  });
  alert("Student enrolled successfully");
  location.reload();
});

