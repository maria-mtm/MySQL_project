
const connection = require("../database"); //en vez de la clase, como en el modulo anterior

let student = null;


function getStudent(request, response) {
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM students";
    else
        sql = "SELECT * FROM students WHERE student_id=" + request.query.id;

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })

};

function postStudent(request, response) {
    console.log(request.body);
    let sql = `INSERT INTO students (first_name, last_name, group_id, anyo_ingreso)` +
        `VALUES("${request.body.first_name}",
            "${request.body.last_name}",
            ${request.body.group_id},
            ${request.body.anyo_ingreso})`;
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId));
            else {
                response.send("No se ha creado el registro")
            }
        }

    })
};

function putStudent(request, response) {
    console.log(request.body);
    let sql = `UPDATE school.students SET first_name="${request.body.first_name}", last_name="${request.body.last_name}", group_id=${request.body.group_id}, anyo_ingreso= ${request.body.anyo_ingreso} WHERE (student_id = ${request.body.student_id})`

    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }

    })
    // UPDATE `school`.`students` SET `first_name` = 'Marisa', `last_name` = 'Garcia', `group_id` = '302', `anyo_ingreso` = '2022' WHERE (`student_id` = '412');
};




function deleteStudent(request, response) {
    console.log(request.body);
    let sql = `DELETE FROM school.students WHERE (student_id = ${request.body.student_id})`

    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            response.send(result);
        }
    })

    // DELETE FROM `school`.`students` WHERE (`student_id` = '412');

};

module.exports = { getStudent, postStudent, putStudent, deleteStudent }