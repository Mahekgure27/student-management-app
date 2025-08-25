let sForm = document.getElementById("studentForm");
let ul = document.getElementById("studentList");
let filter = document.getElementById("filter");

sForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;

    let list = document.createElement("li");
    list.setAttribute("data-grade", grade);
    list.textContent = `${name}, Age: ${age}, Grade: ${grade}`;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");

    delBtn.addEventListener("click", function() {
        list.remove();
    });

    list.appendChild(delBtn);
    ul.appendChild(list);
    sForm.reset();
});

filter.addEventListener("change", function() {
    let selectedGrade = filter.value;
    let students = ul.querySelectorAll("li");

    students.forEach(function(student) {
        let studentGrade = student.getAttribute("data-grade");

        if (selectedGrade === "all" || studentGrade === selectedGrade) {
            student.style.display = "flex"; 
        } else {
            student.style.display = "none";
        }
    });
});
