import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Group from "./Group/Group";
import { addGroup, selectGroup } from "../../app/todoSlice";

function GroupsTodo() {
  const groupsTodo = useAppSelector(
    (state: RootState) => state.todo.groupsTodo
  );

  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const addTodoGroup = () => {
    if (text.trim()) {
      dispatch(addGroup(text));
      /// сюда нужно получить айдишник добавленного элемента
      // dispatch(selectGroup(lastGroupId))
      setText("");
    }
  };
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTodoGroup()}>Add a task group</button>
      <ul>
        {groupsTodo.map((group, key) => (
          <li key={key}>
            <Group id={group.id} title={group.title} todos={group.todos} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroupsTodo;
