/* VARIABLES */

var selectedIndex = null;

const ships = [
    { nev: "Baross Gábor", tipus: "komp", uzemel: true },
    { nev: "Akali", tipus: "személyhajó", uzemel: true },
    { nev: "101-Z toló-önjáró uszály", tipus: "önjáró uszály", uzemel: true },
    { nev: "Almádi", tipus: "személyhajó", uzemel: true },
    { nev: "Aqua Pannonia", tipus: "személyhajó", uzemel: true },
    { nev: "Arács", tipus: "személyhajó", uzemel: true },
    { nev: "Badacsony", tipus: "személyhajó", uzemel: true },
    { nev: "Balaton", tipus: "személyhajó", uzemel: true },
    { nev: "Brutus", tipus: "kisgéphajó", uzemel: true },
    { nev: "Calypso", tipus: "kisgéphajó", uzemel: true },
    { nev: "Csiga-Biga", tipus: "kisgéphajó", uzemel: true },
    { nev: "Csobánc", tipus: "személyhajó", uzemel: true },
    { nev: "Csongor", tipus: "személyhajó", uzemel: true },
    { nev: "Echo", tipus: "szolgálati hajó", uzemel: true },
    { nev: "Ederics", tipus: "személyhajó", uzemel: true },
    { nev: "Érd", tipus: "szolgálati hajó", uzemel: true },
    { nev: "Fonyód", tipus: "személyhajó", uzemel: true },
    { nev: "Füred", tipus: "személyhajó", uzemel: true },
    { nev: "Györök", tipus: "személyhajó", uzemel: true },
    { nev: "Hableány", tipus: "személyhajó", uzemel: true },
    { nev: "Helka", tipus: "személyhajó", uzemel: true },
    { nev: "Hévíz", tipus: "személyhajó", uzemel: true },
    { nev: "Izsó", tipus: "szolgálati hajó", uzemel: true },
    { nev: "Jégmadár", tipus: "szolgálati hajó", uzemel: true },
    { nev: "Jókai", tipus: "személyhajó", uzemel: true },
    { nev: "Kelén", tipus: "személyhajó", uzemel: true },
    { nev: "Keszthely", tipus: "személyhajó", uzemel: true },
    { nev: "Kisfaludy Sándor", tipus: "komp", uzemel: true },
    { nev: "Klára", tipus: "személyhajó", uzemel: true },
    { nev: "Koloska", tipus: "kisgéphajó", uzemel: true },
    { nev: "Kossuth Lajos", tipus: "komp", uzemel: true },
    { nev: "Lelle", tipus: "személyhajó", uzemel: true },
    { nev: "Scharnebeck", tipus: "szolgálati hajó", uzemel: true },
    { nev: "Révfülöp", tipus: "személyhajó", uzemel: true },
    { nev: "Sió", tipus: "szolgálati hajó", uzemel: true },
    { nev: "Siófok", tipus: "személyhajó", uzemel: true },
    { nev: "St Benedek", tipus: "személyhajó", uzemel: true },
    { nev: "Szántód", tipus: "személyhajó", uzemel: true },
    { nev: "Széchenyi István", tipus: "komp", uzemel: true },
    { nev: "Szent Miklós", tipus: "személyhajó", uzemel: true },
    { nev: "Szikra", tipus: "szolgálati hajó", uzemel: true },
    { nev: "Tátika", tipus: "személyhajó", uzemel: true },
    { nev: "Thetis", tipus: "kisgéphajó", uzemel: true },
    { nev: "Tünde", tipus: "személyhajó", uzemel: true },
    { nev: "Tündér", tipus: "kisgéphajó", uzemel: true },
    { nev: "VI-736-Z önjáró tankuszály", tipus: "önjáró uszály", uzemel: true },
    { nev: "Vízvédelem", tipus: "szolgálati hajó", uzemel: true },
    { nev: "Z-424 önjáró uszály", tipus: "önjáró uszály", uzemel: true },
    { nev: "Z-426 önjáró uszály", tipus: "önjáró uszály", uzemel: true },
    { nev: "Zánka", tipus: "személyhajó", uzemel: true },
    { nev: "Juditta", tipus: "vitorlás", uzemel: true },
    { nev: "Katamarán", tipus: "vitorlás", uzemel: true },
    { nev: "Nemere II.", tipus: "vitorlás", uzemel: true },
    { nev: "Öszöd", tipus: "vitorlás", uzemel: true },
    { nev: "Phoenix", tipus: "vitorlás", uzemel: true },
    { nev: "Sirocco", tipus: "vitorlás", uzemel: true },
    { nev: "Sissy hercegnő", tipus: "vitorlás", uzemel: true },
    { nev: "Szaturnusz", tipus: "vitorlás", uzemel: true },
    { nev: "Talizmán", tipus: "vitorlás", uzemel: true },
    { nev: "Róza", tipus: "vitorlás", uzemel: true },
    { nev: "Balatonboglár", tipus: "halászhajó", uzemel: true },
    { nev: "Vonyarc", tipus: "halászhajó", uzemel: true },
    { nev: "Busa", tipus: "halászhajó", uzemel: true },
    { nev: "Angolna", tipus: "halászhajó", uzemel: true },
    { nev: "102-Z bárka", tipus: "uszály", uzemel: true },
    { nev: "442 uszály", tipus: "uszály", uzemel: true },
    { nev: "443 uszály", tipus: "uszály", uzemel: true },
    { nev: "463 uszály", tipus: "uszály", uzemel: true },
    { nev: "465 uszály", tipus: "uszály", uzemel: true },
    { nev: "Óriás 469 uszály", tipus: "uszály", uzemel: true },
    { nev: "103 uszály", tipus: "uszály", uzemel: true },
    { nev: "107 uszály", tipus: "uszály", uzemel: true },
    { nev: "Óriás uszály", tipus: "uszály", uzemel: true },
    { nev: "51 uszály", tipus: "uszály", uzemel: true },
    { nev: "Góliát", tipus: "uszály", uzemel: true },
    { nev: "Épvízkör 3", tipus: "uszály", uzemel: true },
    { nev: "Épvízkör 4", tipus: "uszály", uzemel: true },
    { nev: "211 elevátor", tipus: "úszó munkagép", uzemel: true },
    { nev: "254 strandhomokozó", tipus: "úszó munkagép", uzemel: true },
    { nev: "50-II úszódaru", tipus: "úszó munkagép", uzemel: true },
    { nev: "Szerhajó", tipus: "úszó munkagép", uzemel: true },
    { nev: "Radzeer", tipus: "kisgéphajó", uzemel: false },
    { nev: "Beloiannisz", tipus: "személyhajó", uzemel: false },
    { nev: "Gulács", tipus: "személyhajó", uzemel: false },
    { nev: "Bakony", tipus: "személyhajó", uzemel: false },
    { nev: "Szárszó", tipus: "személyhajó", uzemel: false },
    { nev: "Tihany II", tipus: "személyhajó", uzemel: false },
    { nev: "Földvár", tipus: "személyhajó", uzemel: false },
    { nev: "Csopak", tipus: "személyhajó", uzemel: false },
    { nev: "Dörgicse", tipus: "személyhajó", uzemel: false },
    { nev: "Szemes", tipus: "személyhajó", uzemel: false },
    { nev: "Kenese", tipus: "személyhajó", uzemel: false },
    { nev: "Balaton II.", tipus: "személyhajó", uzemel: false }
];

function onFormSubmit() {

    if (validate()) {
        var formData = readFormData();
        if (selectedIndex == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }


}

showTable();
function showTable() {
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
        cell4.innerHTML = '<a onClick="edit(' + i + ')">✏️</a>' + '<a onClick="del(' + i + ')">🗑️</a>';
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
    selectedIndex = null;
}

function edit(index) {
    document.getElementById("name").value = ships[index].nev;
    document.getElementById("type").value = ships[index].tipus;
    document.getElementById("active").checked = ships[index].uzemel;
    selectedIndex = index;
    document.getElementById("ship-form").scrollIntoView({
        behavior: "smooth"
    });
}

function updateRecord(formData) {
    ships[selectedIndex].nev = formData.name;
    ships[selectedIndex].tipus = formData.type;
    ships[selectedIndex].uzemel = formData.active;
    showTable();
}
function del(index) {
    if (confirm('Biztosan törlöd?')) {
        ships.splice(index, 1); // Deleting the entry with the specified index
        resetForm();
        showTable();
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