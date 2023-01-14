function logout() {
    document.location.href = "./index.html";
}


function getData() {

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            setDataToTable(json)
        })
}

function completeTask(id) {
    if (id == 7) {
        alert("Congrats. 5 Tasks have been Successfully Completed");

    }
}

function setDataToTable(json) {
    json.reverse()
    json.map(e => {
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = e.id;
        cell2.innerHTML = e.title;
        if (e.completed) {
            cell3.innerHTML = `<input type="checkbox" disabled name="${e.id}" checked id="${e.id}" />`
        } else {
            cell3.innerHTML = `<input type="checkbox" name="${e.id}"  id="${e.id}" onclick="completeTask(${e.id})" />`

        }
    })

}

function fetchData() {
    getData()
}