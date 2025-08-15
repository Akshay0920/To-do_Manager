/* eslint-disable no-undef */
const todoList = require("../todo");

describe("TodoList Test Suite", () => {
  let todos;

  beforeEach(() => {
    todos = todoList();
  });

  test("should add new todo", () => {
    todos.add({ title: "New Task", dueDate: "2025-08-15", completed: false });
    expect(todos.all.length).toBe(1);
    expect(todos.all[0].title).toBe("New Task");
  });

  test("should mark a todo as complete", () => {
    todos.add({ title: "Task", dueDate: "2025-08-15", completed: false });
    todos.markAsComplete(0);
    expect(todos.all[0].completed).toBe(true);
  });

  test("should retrieve overdue items", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    todos.add({
      title: "Overdue Task",
      dueDate: yesterday.toISOString().split("T")[0],
      completed: false,
    });
    expect(todos.overdue().length).toBe(1);
    expect(todos.overdue()[0].title).toBe("Overdue Task");
  });

  test("should retrieve due today items", () => {
    const today = new Date().toISOString().split("T")[0];
    todos.add({ title: "Today Task", dueDate: today, completed: false });
    expect(todos.dueToday().length).toBe(1);
    expect(todos.dueToday()[0].title).toBe("Today Task");
  });

  test("should retrieve due later items", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    todos.add({
      title: "Future Task",
      dueDate: tomorrow.toISOString().split("T")[0],
      completed: false,
    });
    expect(todos.dueLater().length).toBe(1);
    expect(todos.dueLater()[0].title).toBe("Future Task");
  });
});
