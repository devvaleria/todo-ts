import { useAppSelector } from "../../app/hooks";
import { Itodo } from "../../app/models";
import { RootState } from "../../app/store";
import ElementTodo from "./ElementTodo/ElementTodo";

function ElementsTodo() {
  const selectedGroup = useAppSelector((state: RootState) => state.todo.selectedGroup)
  const todoGroups = useAppSelector((state: RootState) => state.todo.groupsTodo)
  const todos = todoGroups.find(group => group.id === selectedGroup)
    return (
      <div className="element-todo">
        {todos && todos.todos.map(todo => (
          <ElementTodo title = {todo.title} id = {todo.id} completed = {todo.completed} groupId={todo.groupId}/>
        ))}
      </div>
    );
  }
  

export default ElementsTodo;
