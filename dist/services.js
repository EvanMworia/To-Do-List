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
class ToDoList_Services {
    constructor() {
        this.url = 'http://localhost:3000/todos/';
    }
    //--------While implementing update i ahve realised i need the id,
    updateToDo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            // const response = await fetch(`${this.url} + ${todo.id}`, {
            const response = yield fetch(`${this.url}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' }, //of what significance is this property?????????
                body: JSON.stringify(todo),
            });
            return response.json();
        });
    }
    deleteToDo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch(`${this.url} + ${id}`, {
                method: 'DELETE',
            });
        });
    }
    //--------HAPA NIKITAKA KUMAKE AN INSTANCE OF A NEW TODO ITEM INATAKA ID NA SIJUI ID NITATOA WAPI----OPTED to remove the id for the moment and see how i would work without it
    //--------GIVEN THAT ID NA EXPECT IKUWE AUTO GENERATED----
    //----IF IN THE MODELs I WANT TO INCOPARATE THE 'ID' FIELD SOME ERRORS MAY APPEAR HERE, ----REMEMBER TO FIX THEM :0
    addNewToDo(title) {
        return __awaiter(this, void 0, void 0, function* () {
            //create a new instance of a TodoItem
            const newItem = ToDoItem.createToDoItem(title);
            //perfom a post method to add the new instance to our db.json by POST
            const response = yield fetch(this.url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, //of what significance is this property?????????
                body: JSON.stringify(newItem), //stringifying it converts it to a JSON string
            });
            return response.json(); //since it is already stringifyed
        });
    }
    getAllToDos() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.url);
            return response.json();
        });
    }
}
