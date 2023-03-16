function getById(id) {
  return document.getElementById(id);
}

function createItem(title, description) {
  return ` 
        <div>
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
        <input type="checkbox" class="checkbox" onclick="checkItem(event)"/>
    `;
}

let form = document.querySelector("form");

form.addEventListener("submit", insertTask);

function insertTask(evt) {
  evt.preventDefault();

  let title = getById("title").value;
  let description = getById("description").value;

  let list = document.querySelector("ul");

  let newItem = document.createElement("li");
  newItem.innerHTML = createItem(title, description);
  newItem.classList = "list-item";

  list.appendChild(newItem);

  form.reset();
}

function checkItem(evt) {
  evt.srcElement.disabled = true;
  evt.srcElement.parentElement.classList.add("task-done");
}
