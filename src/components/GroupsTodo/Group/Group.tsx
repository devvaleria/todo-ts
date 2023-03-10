import { useState } from "react";
import { IgroupTodo } from "../../../app/models";
import { useAppDispatch } from "../../../app/hooks";
import { addTodo, selectGroup, removeGroup } from "../../../app/todoSlice";

function Group({ id, title, active }: IgroupTodo) {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const addTask = () => {
    if (text.trim()) {
      dispatch(addTodo({ title: text, groupId: id }));
      setText("");
    }
  };
  return (
    <div className={`group-todo` + ` ${active ? "group-todo__active" : ""}`}>
      <button onClick={() => dispatch(removeGroup(id))}>Delete group</button>
      <h2 onClick={() => dispatch(selectGroup(id))}>{title}</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(ev) => ev.key === "Enter" && addTask()}
      />
      <button onClick={() => addTask()}>Add a task</button>
    </div>
  );
}

export default Group;
