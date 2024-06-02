document.addEventListener('DOMContentLoaded', () => {
    //creating a new instance of the srvice class that has all our CRUD methods.
    const todoService = new ToDoList_Services();
    //selecting necessary htmlElements
    const todoInput = document.getElementById('new-item')! as HTMLInputElement;
    const addButton = document.getElementById('btn')! as HTMLButtonElement;
    const todoList = document.getElementById(
        'items-display'
    )! as HTMLUListElement;

    const renderToDos = async () => {
        const allToDos = await todoService.getAllToDos();
        let htmlToBeRendered = '';
        allToDos.forEach((item) => {
            htmlToBeRendered = `${item.title} ---- <input type="checkbox" />`;
            todoList.innerHTML = htmlToBeRendered;
        });
    };

    // Event listener for the "Add Todo" button
    addButton.addEventListener('click', async () => {
        // Get the title of the new todo from the input field
        const title = todoInput.value.trim();
        // If the title is not empty, proceed to add the new todo
        if (title) {
            // Add the new todo using the TodoService
            await todoService.addNewToDo(title);
            // Clear the input field
            todoInput.value = '';
            // Re-render the list of todos
            renderToDos();
        }
    });

    // Initial rendering of the list of todos
    // await renderToDos();
});
