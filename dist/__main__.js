"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    //creating a new instance of the srvice class that has all our CRUD methods.
    const todoService = new ToDoList_Services();
    //selecting necessary htmlElements
    const todoInput = document.getElementById('new-item');
    const addButton = document.getElementById('btn');
    const todoList = document.getElementById('items-display');
    const renderToDos = () => __awaiter(void 0, void 0, void 0, function* () {
        const allToDos = yield todoService.getAllToDos();
        let htmlToBeRendered = '';
        allToDos.forEach((item) => {
            htmlToBeRendered = `${item.title} ---- <input type="checkbox" />`;
            todoList.innerHTML = htmlToBeRendered;
        });
    });
    // Event listener for the "Add Todo" button
    addButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        // Get the title of the new todo from the input field
        const title = todoInput.value.trim();
        // If the title is not empty, proceed to add the new todo
        if (title) {
            // Add the new todo using the TodoService
            yield todoService.addNewToDo(title);
            // Clear the input field
            todoInput.value = '';
            // Re-render the list of todos
            renderToDos();
        }
    }));
    // Initial rendering of the list of todos
    // await renderToDos();
});
