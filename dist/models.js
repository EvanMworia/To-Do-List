"use strict";
//definition of a 'To-Do item'
class ToDoItem {
    // public readonly id: string;
    //set the constructor to private to ensure immutability and control instance creation
    // private constructor(title: string, id: string) {
    constructor(title) {
        this.title = title;
        // this.id = id;
    }
    //-------WHY DO WE NEED THIS STATIC FACTORY FUNCTION?-----GOT TO UNDERSTAND WHY AFTER I STARTED WORKING IN THE SERVICE----ITS needed when adding a new item, we need an instance of it
    //-------WHAT REALLY IS THE USE OF THIS METHOD?
    //------IF WE ARE PROVIDED WITH AN AUTOMATIC ID WHY DO WE NEED TO PASS IT HERE AS A PARAM THEN?
    //----OPTED TO COMMENT OUT ALL APPEARANCES OF THE ID FIELD
    //----INCASE---IN--FUTURE UNATAKA KURUDISHA ID JUST UNCOMMENT
    // public static createToDoItem(title: string, id: string): ToDoItem {
    static createToDoItem(title) {
        return new ToDoItem(title);
    }
}
