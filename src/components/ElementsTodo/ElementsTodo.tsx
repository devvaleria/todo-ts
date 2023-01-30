import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { changeGroupTitle, toggleChangeMode } from "../../app/todoSlice";
import ElementTodo from "./ElementTodo/ElementTodo";
import {  IchangeGroupTitlePayload } from '../../app/models'
import { useState } from "react";

function ElementsTodo() {
  const selectedGroup = useAppSelector(
    (state: RootState) => state.todo.selectedGroup
  );
  const todoGroups = useAppSelector(
    (state: RootState) => state.todo.groupsTodo
  );
  const todos = todoGroups.find((group) => group.id === selectedGroup);
  const dispatch = useAppDispatch()


  const changeTitle = ({groupId, newText} : IchangeGroupTitlePayload) => {
    dispatch(toggleChangeMode(groupId))
    dispatch(changeGroupTitle({groupId, newText}))
    setText('')
  }

  const [text, setText] = useState('')

  
  return (
    <div className="elements-todo">
      {todos && (
        <div>
          {todos.changeMode ? (
            <div>
              <input value = {text} onChange={(e) => setText(e.target.value)} />
              <button onClick={(e) => changeTitle({groupId :todos.id, newText: text})}>Finish editing</button>
            </div>
          ) : (
            <div>
              <h3 className="elements-todo__title-group">
                {todos.title.toUpperCase()}
              </h3>
              <button onClick={() => dispatch(toggleChangeMode(todos.id))}>Edit</button>
            </div>
          )}

          <hr />
        </div>
      )}
      {!todos && (
        <div>
          <h3>Please, add a group</h3>
        </div>
      )}

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
