let input = document.getElementById("noteinput");
let click1 = document.getElementById("button1");
let listing = document.getElementById("list");
let savedNotes = JSON.parse(localStorage.getItem("notes"));

click1.addEventListener("click", () => {
    let data = input.value.trim();
    if (data === "") {
        alert("Write Something");
    }

    else{
        input.value = "";
        alert("Saved");

        let li = document.createElement("li");
        li.textContent = data;
        localStorage.setItem("notes", JSON.stringify(savedNotes));
        let click2 = document.createElement("button");

        click2.textContent = "x";
        click2.style.width = "30px";
        click2.style.height = "30px";
        click2.style.cursor = "pointer";

        li.appendChild(click2);
        listing.appendChild(li);
        savedNotes.push(data);

        click2.addEventListener("click", () => {
            alert("Deleted");
            li.remove();
            deleteNoteFromLocalStorage(data);
        });
    }
});

savedNotes.forEach(note => {
    let li = document.createElement("li");
    li.textContent = note;      
    let click2 = document.createElement("button");

    li.appendChild(click2);
    listing.appendChild(li);
    
    click2.textContent = "x";
    click2.style.width = "30px";
    click2.style.height = "30px";
    click2.style.cursor = "pointer";

    click2.addEventListener("click", () => {
        alert("Deleted");
        li.remove();
        deleteNoteFromLocalStorage(note);
    });
});
