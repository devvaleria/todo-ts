import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import ElementTodo from "./ElementTodo/ElementTodo";

function ElementsTodo() {
  const selectedGroup = useAppSelector(
    (state: RootState) => state.todo.selectedGroup
  );
  const todoGroups = useAppSelector(
    (state: RootState) => state.todo.groupsTodo
  );
  const todos = todoGroups.find((group) => group.id === selectedGroup);
  return (
    <div className="elements-todo">
      {todos && (
        <div>
          <h3 className="elements-todo__title-group">
            {todos.title.toUpperCase()}
          </h3>
          <hr />
        </div>
      )}
      {!todos && (<div>
        <h3>Please, add a group</h3>
      </div>)}

      {todos &&
        todos.todos.map((todo, key) => (
          <ElementTodo
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
            groupId={todo.groupId}
            key={key}
            index={key}
          />
        ))}
    </div>
  );
}

export default ElementsTodo;
