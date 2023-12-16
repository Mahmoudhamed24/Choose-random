var allContestants = [];
var selectedContestants = [];

function selectRandomPair() {
    var selectedContestantsList = document.getElementById("selectedContestantsList");

    if (allContestants.length < 2) {
        alert("تم اختيار الجميع!");
        return;
    }

    // إضافة المتسابقين المختارين إلى المصفوفة
    var randomIndex1 = Math.floor(Math.random() * allContestants.length);
    var randomIndex2;

    do {
        randomIndex2 = Math.floor(Math.random() * allContestants.length);
    } while (randomIndex2 === randomIndex1); // التأكد من أن الفردين مختلفين

    var contestant1 = allContestants[randomIndex1];
    var contestant2 = allContestants[randomIndex2];

    selectedContestants.push({ contestant1, contestant2 });

    // إضافة المتسابقين المختارين إلى القائمة
    var listItem = document.createElement("li");

    listItem.className = "selected-list-item";
    listItem.innerHTML = `<span>${contestant1}</span> 🆚 <span>${contestant2}</span>`;

    selectedContestantsList.appendChild(listItem);

    // إزالة المتسابقين المختارين من القائمة
    allContestants.splice(randomIndex1, 1);
    allContestants.splice(randomIndex2 > randomIndex1 ? randomIndex2 - 1 : randomIndex2, 1);

    if (allContestants.length === 0) {
        alert("تم اختيار الجميع!");
    }
}

function addContestant() {
    var newContestantInput = document.getElementById("newContestant");
    var newContestantName = newContestantInput.value.trim();

    if (newContestantName !== "") {
        // إضافة المتسابق الجديد إلى المصفوفة
        allContestants.push(newContestantName);

        // إضافة المتسابق الجديد إلى قائمة الأسماء
        var namesList = document.getElementById("namesList");
        var listItem = document.createElement("li");
        listItem.textContent = newContestantName;

        // لا يوجد أي تفاعل عند النقر

        namesList.appendChild(listItem);

        // مسح قيمة حقل الإدخال
        newContestantInput.value = "";
    }
}

// توضع الأسماء في القائمة
var namesList = document.getElementById("namesList");

allContestants.forEach(function (name) {
    var listItem = document.createElement("li");
    listItem.textContent = name;

    // لا يوجد أي تفاعل عند النقر

    namesList.appendChild(listItem);
});
