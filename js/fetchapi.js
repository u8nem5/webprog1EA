/* VARIABLES */
const api = "./api/api.php"
var selectedId = null;
let ships = []


function onFormSubmit() {

    if (validate()) {
        var formData = readFormData();
        if (selectedId == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }


}

showTable();

function fetchShips() {
    return fetch(api)
        .then(res => res.json())
        .then(data => {
            ships.length = 0;
            ships = data.readData;
        });
}

async function showTable() {
    await fetchShips()
    var table = document.getElementById("shipList").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    var newRow;
    for (i = 0; i < ships.length; i++) {
        newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = ships[i].nev;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = ships[i].tipus;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = ships[i].uzemel ? '✅' : '❌';
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = '<a onClick="edit(' + ships[i].az + ')">✏️</a>' + '<a onClick="del(' + ships[i].az + ')">🗑️</a>';
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["type"] = document.getElementById("type").options[document.getElementById("type").selectedIndex].text;
    formData["active"] = document.getElementById("active").checked;
    return formData;
}

function insertNewRecord(data) {
    ships.push({ "nev": data.name, "tipus": data.type, "uzemel": data.active });
    showTable();
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("type").value = "";
    document.getElementById("active").checked = false;
    selectedId = null;
}

function edit(id) {
    const ship = ships.find(s => s.az === id);
    document.getElementById("name").value = ship.nev;
    document.getElementById("type").value = ship.tipus;
    document.getElementById("active").checked = ship.uzemel;
    selectedId = id;  
    document.getElementById("ship-form").scrollIntoView({
        behavior: "smooth"
    });
}

function updateRecord(formData) {
 
        formData.id = selectedId;
        fetch(api, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        
        body: JSON.stringify(formData)
        })
        
        .then(res => res.json())
        .then(data => {
      
     
            showTable();
        });
}
function del(id) {
    if (confirm('Biztosan törlöd?')) {
        fetch(api, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({'id': id})
            })
            .then(res => res.json())
            .then(data => {
            showTable();
            });
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}