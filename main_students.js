



function getStudent_school() {

    let param =
    {
        headers: { "Content-type": "application/jason; charset=UTF-8" },
        method: "GET"
    }

    let url;

    let student_id = document.getElementById("inputStudentId").value;

    if (student_id) {
        url = "http://localhost:3000/students?id=" + student_id
    } else {
        url = "http://localhost:3000/students"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()
        })


        .then(function (result) {
            console.log(result)

            let tabla = document.getElementById("tablaStudents");

            tabla.innerHTML = ``;

            for (let i = 0; i < result.length; i++) {
                tabla.innerHTML +=
                    ` <tr>
                    <th scope="row">${result[i].student_id}</th>
                    <td>${result[i].first_name}</td>
                    <td>${result[i].last_name}</td>
                    <td>${result[i].group_id}</td>
                    <td>${result[i].anyo_ingreso}</td>
                </tr>`
            }
        })

        .catch(function (error) {
            console.log(error)
        })
}








function postStudent_school() {

    let first_name = document.getElementById("inputF_NameStudent").value;
    let last_name = document.getElementById("inputL_NameStudent").value;
    let group = document.getElementById("inputGroupStudent").value;
    let anyo_ingreso = document.getElementById("inputAnyo_ingresoStudent").value;


    let student = {
        "first_name": first_name,
        "last_name": last_name,
        "group_id": group,
        "anyo_ingreso": anyo_ingreso
    }
    //o crear una clase Student y crear student con el metodo constructor de la clase:
    // let student= new Student(first_name, last_name, group)

    console.log(student);


    const url = "http://localhost:3000/students";
    let param =
    {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(student),
        // body: student,
        method: "POST"
    }



    fetch(url, param)
        .then(function (data) {
            return data.json()

        })
        .then(function (result) {

            console.log(result)
        })
        .catch(function (error) {
            console.log(error)
        })
}
















function putStudent_school() {

    let student_id = document.getElementById("inputStudentId").value;
    let first_name = document.getElementById("inputF_NameStudent").value;
    let last_name = document.getElementById("inputL_NameStudent").value;
    let group = document.getElementById("inputGroupStudent").value;
    let anyo_ingreso = document.getElementById("inputAnyo_ingresoStudent").value;


    let student = { //body(1)
        "student_id": student_id,
        "first_name": first_name,
        "last_name": last_name,
        "group_id": group,
        "anyo_ingreso": anyo_ingreso
    }
    console.log(student);


    let url = "http://localhost:3000/students"




    let param =
    {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(student),//body(1)
        method: "PUT"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {

            console.log(result)
        })
        .catch(function (error) {
            console.log(error)
        })
}













function deleteStudent_school() {

    let url = "http://localhost:3000/students"

    let student_id = document.getElementById("inputStudentId").value;
    let student = { "student_id": student_id }

    let param =
    {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(student), //siempre tiene que ser un json
        method: "DELETE"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()

        })
        .then(function (result) {

            console.log(result)
        })
        .catch(function (error) {
            console.log(error)
        })
}



