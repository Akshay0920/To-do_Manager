/* eslint-disable no-undef */
const todoList = () => {
  let all = [];
  const todoList = () => {
    const all = [];

    const today = new Date().toISOString().split("T")[0];

    const add = (todoItem) => {
      all.push(todoItem);
    };

    const markAsComplete = (index) => {
      all[index].completed = true;
    };

    const overdue = () => {
      return all.filter((todo) => todo.dueDate < today);
    };

    const dueToday = () => {
      return all.filter((todo) => todo.dueDate === today);
    };

    const dueLater = () => {
      return all.filter((todo) => todo.dueDate > today);
    };

    const toDisplayableList = (list) => {
      return list
        .map(
          (todo) =>
            `${todo.completed ? "[x]" : "[ ]"} ${todo.title} ${
              todo.dueDate === today ? "" : todo.dueDate
            }`,
        )
        .join("\n");
    };

    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };

  module.exports = todoList;
  const today = new Date().toISOString().split("T")[0];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((todo) => todo.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((todo) => todo.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((todo) => todo.dueDate > today);
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        const checkbox = todo.completed ? "[x]" : "[ ]";
        const datePart = todo.dueDate === today ? "" : ` ${todo.dueDate}`;
        return `${checkbox} ${todo.title}${datePart}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
