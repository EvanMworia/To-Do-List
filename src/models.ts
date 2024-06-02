//AN interface that sets the structure of a to-do item
//using an interface sets the blue print of the object in question and the laid out structure must be followed
interface IToDoItem {
    title: string;
    // id: string;
}

//definition of a 'To-Do item'
class ToDoItem implements IToDoItem {
    public readonly title: string;
    // public readonly id: string;

    //set the constructor to private to ensure immutability and control instance creation
    // private constructor(title: string, id: string) {
    private constructor(title: string) {
        this.title = title;
        // this.id = id;
    }

    //-------WHY DO WE NEED THIS STATIC FACTORY FUNCTION?-----GOT TO UNDERSTAND WHY AFTER I STARTED WORKING IN THE SERVICE----ITS needed when adding a new item, we need an instance of it
    //-------WHAT REALLY IS THE USE OF THIS METHOD?
    //------IF WE ARE PROVIDED WITH AN AUTOMATIC ID WHY DO WE NEED TO PASS IT HERE AS A PARAM THEN?

    //----OPTED TO COMMENT OUT ALL APPEARANCES OF THE ID FIELD
    //----INCASE---IN--FUTURE UNATAKA KURUDISHA ID JUST UNCOMMENT

    // public static createToDoItem(title: string, id: string): ToDoItem {
    public static createToDoItem(title: string): ToDoItem {
        return new ToDoItem(title);
    }
}
