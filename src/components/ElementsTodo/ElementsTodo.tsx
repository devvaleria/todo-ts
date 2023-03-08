import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { changeGroupTitle, toggleChangeMode } from "../../app/todoSlice";
import ElementTodo from "./ElementTodo/ElementTodo";
import { IchangeGroupTitlePayload } from "../../app/models";
import { useState } from "react";

function ElementsTodo() {
  const selectedGroupData = useAppSelector(
    (state: RootState) => state.todo.selectedGroup
  );
  const todoGroupsData = useAppSelector(
    (state: RootState) => state.todo.groupsTodo
  );
  const todosData = todoGroupsData.find((group) => group.id === selectedGroupData);
  const dispatch = useAppDispatch();

  const changeTitle = ({ groupId, newText }: IchangeGroupTitlePayload) => {
    if (text.trim()) {
      dispatch(toggleChangeMode(groupId));
      dispatch(changeGroupTitle({ groupId, newText }));
      setText("");
    }
  };

  const [text, setText] = useState("");

  return (
    <div className="elements-todo">
      {todosData && (
        <div className="elements-todo__title-group">
          {todosData.changeMode ? (
            <div>
              <input value={text} onChange={(e) => setText(e.target.value)} />
              <button
                onClick={(e) =>
                  changeTitle({ groupId: todosData.id, newText: text })
                }
              >
                Finish editing
              </button>
            </div>
          ) : (
            <div>
              <h3>{todosData.title.toUpperCase()}</h3>
              <button onClick={() => dispatch(toggleChangeMode(todosData.id))}>
                Edit
              </button>
            </div>
          )}

          <hr />
        </div>
      )}
      {!todoGroupsData && (
        <div>
          <h3>Please, add a group</h3>
        </div>
      )}
      <div className='elements-todo__element-list'>
        {todosData &&
          todosData.todos.map((todosData, key) => (
            <ElementTodo
              title={todosData.title}
              id={todosData.id}
              completed={todosData.completed}
              groupId={todosData.groupId}
              key={key}
              index={key}
            />
          ))}
      </div>
    </div>
  );
}

export default ElementsTodo;
