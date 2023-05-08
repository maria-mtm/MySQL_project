const connection = require("../database");

//let mark = null;

//let mark = {};


function getMedia(request, response) {
    let sql;

    sql= `SELECT AVG(mark) AS nota_media FROM school.marks WHERE student_id= ${request.query.id};`


    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })

};

function getApuntadas(request, response) {
    let sql;
    if (request.query.id) {
        sql = `SELECT title FROM school.students st JOIN school.groups gr ON (st.group_id = gr.group_id) 
    JOIN school.subject_teachers sub_te ON (gr.group_id = sub_te.group_id)
    JOIN school.subjects sub ON (sub.subject_id = sub_te.subject_id)
    WHERE student_id=${request.query.id};`
    }
    else {
        sql = `SELECT title, st.first_name, st.last_name FROM school.students st JOIN school.groups gr ON (st.group_id = gr.group_id) 
        JOIN school.subject_teachers sub_te ON (gr.group_id = sub_te.group_id)
        JOIN school.subjects sub ON (sub.subject_id = sub_te.subject_id)`
    }

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })

};

function getImpartidas(request, response) {
    let sql;

    if (request.query.id) {
        sql = `SELECT title FROM school.teachers te JOIN school.subject_teachers sub_te ON (te.teacher_id = sub_te.teacher_id) 
        JOIN school.subjects sub ON (sub.subject_id = sub_te.subject_id)
        WHERE te.teacher_id=${request.query.id};`
    }
    else {

        sql = `SELECT title, te.first_name, te.last_name FROM school.teachers te JOIN school.subject_teachers sub_te ON (te.teacher_id = sub_te.teacher_id) 
        JOIN school.subjects sub ON (sub.subject_id = sub_te.subject_id);`
    }

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })

};


module.exports = { getMedia, getApuntadas, getImpartidas}
