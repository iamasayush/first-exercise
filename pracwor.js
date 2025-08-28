let input = document.getElementById("noteinput");
let click1 = document.getElementById("button1");
let listing = document.getElementById("list");
let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(savedNotes));
}

function createNoteElement(note) {
    let li = document.createElement("li");
    li.textContent = note;

    let click2 = document.createElement("button");
    click2.textContent = "x";
    click2.style.cssText = "width: 30px; height: 30px; cursor: pointer;";
    li.appendChild(click2);
    listing.appendChild(li);

    click2.addEventListener("click", () => {
        alert("Deleted");
        li.remove();
        savedNotes = savedNotes.filter(n => n !== note);
        saveNotes();
    });
}

click1.addEventListener("click", () => {
    let data = input.value.trim();
    if (data) {
        input.value = "";
        alert("Saved");
        savedNotes.push(data);
        saveNotes();
        createNoteElement(data);
    } else {
        alert("Write Something");
    }
});

savedNotes.forEach(createNoteElement);
