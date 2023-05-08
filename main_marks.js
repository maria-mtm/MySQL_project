function notaMedia() {

    let param =
    {
        headers: { "Content-type": "application/jason; charset=UTF-8" },
        method: "GET"
    }

    let student_id = document.getElementById("inputStudentId").value;
    
    let url;
    if(student_id){
        url = "http://localhost:3000/media?id="+student_id
    }else{
        url = "http://localhost:3000/media"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()
        })


        .then(function (result) {
            console.log(result)
            let notaMedia = document.getElementById("notaMedia");
            notaMedia.innerHTML = `${parseInt(result[0].nota_media)}`;
        })

        .catch(function (error) {
            console.log(error)
        })
}






// ---------------------------------APUNTADAS-----------------------------------------------






function apuntadas() {

    let param =
    {
        headers: { "Content-type": "application/jason; charset=UTF-8" },
        method: "GET"
    }

    let student_id = document.getElementById("inputStudentId").value;
    
    let url;
    if(student_id){
        url = "http://localhost:3000/apuntadas?id="+student_id
    }else{
        url = "http://localhost:3000/apuntadas"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            console.log(result)

            let tablaApuntadas = document.getElementById("tablaApuntadas");

            tablaApuntadas.innerHTML = ``;

            for (let i = 0; i < result.length; i++) {
                tablaApuntadas.innerHTML +=
                // <th scope="row">${result[i].student_id}</th>
                    ` <tr>
                    <td>${result[i].title}</td>
                    <td>${result[i].first_name}</td>
                    <td>${result[i].last_name}</td>
                </tr>`
            }
        })

        .catch(function (error) {
            console.log(error)
        })
}





// ---------------------------------------IMPARTIDAS-----------------------------------------------






function impartidas() {

    let param =
    {
        headers: { "Content-type": "application/jason; charset=UTF-8" },
        method: "GET"
    }

    let teacher_id = document.getElementById("inputTeacherId").value;
    
    let url;
    if(teacher_id){
        url = "http://localhost:3000/impartidas?id="+teacher_id
    }else{
        url = "http://localhost:3000/impartidas"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()
        })


        .then(function (result) {
            console.log(result)

            let tablaImpartidas = document.getElementById("tablaImpartidas");

            tablaImpartidas.innerHTML = ``;

            for (let i = 0; i < result.length; i++) {
                tablaImpartidas.innerHTML +=
                // <th scope="row">${result[i].teacher_id}</th>
                    ` <tr>
                    <td>${result[i].title}</td>
                    <td>${result[i].first_name}</td>
                    <td>${result[i].last_name}</td>
                </tr>`
            }
        })

        .catch(function (error) {
            console.log(error)
        })
}