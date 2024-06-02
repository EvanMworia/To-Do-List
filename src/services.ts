interface IToDoList {
    getAllToDos(): Promise<IToDoItem[]>;
    addNewToDo(title: string, id: string): Promise<IToDoItem>;
    updateToDo(todo: ToDoItem): Promise<IToDoItem>;
    deleteToDo(id: string): Promise<void>;
}
class ToDoList_Services implements IToDoList {
    private url = 'http://localhost:3000/todos/';

    //--------While implementing update i ahve realised i need the id,
    async updateToDo(todo: ToDoItem): Promise<IToDoItem> {
        // const response = await fetch(`${this.url} + ${todo.id}`, {
        const response = await fetch(`${this.url}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' }, //of what significance is this property?????????
            body: JSON.stringify(todo),
        });
        return response.json();
    }
    async deleteToDo(id: string): Promise<void> {
        await fetch(`${this.url} + ${id}`, {
            method: 'DELETE',
        });
    }
    //--------HAPA NIKITAKA KUMAKE AN INSTANCE OF A NEW TODO ITEM INATAKA ID NA SIJUI ID NITATOA WAPI----OPTED to remove the id for the moment and see how i would work without it
    //--------GIVEN THAT ID NA EXPECT IKUWE AUTO GENERATED----

    //----IF IN THE MODELs I WANT TO INCOPARATE THE 'ID' FIELD SOME ERRORS MAY APPEAR HERE, ----REMEMBER TO FIX THEM :0
    async addNewToDo(title: string): Promise<IToDoItem> {
        //create a new instance of a TodoItem
        const newItem = ToDoItem.createToDoItem(title);
        //perfom a post method to add the new instance to our db.json by POST
        const response = await fetch(this.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, //of what significance is this property?????????
            body: JSON.stringify(newItem), //stringifying it converts it to a JSON string
        });
        return response.json(); //since it is already stringifyed
    }

    async getAllToDos(): Promise<IToDoItem[]> {
        const response = await fetch(this.url);
        return response.json();
    }
}
