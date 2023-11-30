function show() {
    const board = document.querySelector("#board");
    const checkboxes = document.querySelectorAll('input[name="lang"]:checked');
    const values = Array.from(checkboxes).map(checkbox => checkbox.value);
    board.innerHTML = values.join(", ");
}
