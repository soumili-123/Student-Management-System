let students = [];

// Add Student
function addStudent() {
    let name = document.getElementById("name").value;
    let studentClass = document.getElementById("class").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;
    let contact = document.getElementById("contact").value;

    if (!name || !studentClass || !roll || !section || !contact) {
        alert("Please fill all fields");
        return;
    }

    let student = { name, studentClass, roll, section, contact };
    students.push(student);
    displayStudents();

    alert("Student added!");

    document.getElementById("name").value = "";
    document.getElementById("class").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("section").value = "";
    document.getElementById("contact").value = "";
}

// Display Students
function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.studentClass}</td>
                <td>${student.roll}</td>
                <td>${student.section}</td>
                <td>${student.contact}</td>
                <td>
                    <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                    <button class="action-btn" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Delete Student
function deleteStudent(i) {
    students.splice(i, 1);
    displayStudents();
}

// Edit Student
function editStudent(i) {
    let student = students[i];

    document.getElementById("name").value = student.name;
    document.getElementById("class").value = student.studentClass;
    document.getElementById("roll").value = student.roll;
    document.getElementById("section").value = student.section;
    document.getElementById("contact").value = student.contact;

    deleteStudent(i);
}

// Search
function searchStudent() {
    let keyword = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.filter(s =>
        s.name.toLowerCase().includes(keyword) ||
        s.studentClass.toLowerCase().includes(keyword) ||
        s.roll.toLowerCase().includes(keyword)
    ).forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.studentClass}</td>
                <td>${student.roll}</td>
                <td>${student.section}</td>
                <td>${student.contact}</td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="action-btn">Delete</button>
                </td>
            </tr>
        `;
    });
}
