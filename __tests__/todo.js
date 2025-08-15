const todoList = require("../todo");
const{all, markAsComplete, add} = todoList();

describe("TodoList Test Suite", () => {
    beforeAll(() => {
        add({title: "Test Todo", dueDate: new Date().toLocaleDateString("en-CA") , completed: false});


    })
    test("should add new todo", () => {
        const todoItemCount = all.length;
        add({title: "Test Todo", dueDate: new Date().toLocaleDateString("en-CA") , completed: false});
        expect(all.length).toBe(todoItemCount + 1);
    })

    test("should mark a todo as complete", () => {
        
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
})