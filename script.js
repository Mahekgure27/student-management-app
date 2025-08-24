let sForm = document.getElementById("studentForm");
let ul = document.getElementById("studentList");
let filter = document.getElementById("filter");

sForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // input values lo
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;

    // li create karo
    let list = document.createElement("li");
    list.setAttribute("data-grade", grade); // grade ko attribute me store kar diya
    list.textContent = `${name}, Age: ${age}, Grade: ${grade}`;

    // delete button create karo
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");

    // delete ka event
    delBtn.addEventListener("click", function() {
        list.remove();
    });

    // delete button ko li ke andar add karo
    list.appendChild(delBtn);

    // list ko ul me add karo
    ul.appendChild(list);

    // form reset karo
    sForm.reset();
});


// FILTER FUNCTIONALITY

filter.addEventListener("change", function() {
    let selectedGrade = filter.value; // dropdown me jo select hua

    let students = ul.querySelectorAll("li"); // saare students

    students.forEach(function(student) {
        let studentGrade = student.getAttribute("data-grade");

        // agar "all" select hai to sab dikhayega, warna sirf matching grade
        if (selectedGrade === "all" || studentGrade === selectedGrade) {
            student.style.display = "flex"; 
        } else {
            student.style.display = "none";
        }
    });
});
