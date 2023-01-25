import { useState } from "react";
import { IgroupTodo } from "../../../app/models";
import { useAppDispatch } from "../../../app/hooks";
import { addTodo, selectGroup } from "../../../app/todoSlice";

function Group({ id, title, todos }: IgroupTodo) {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()
  const addTask = () => {
    dispatch(addTodo({title: text, groupId: id}))
    setText('')
  }
  return (
    <div className="group-todo">
      <h2 onClick={() => dispatch(selectGroup(id))} >{title}</h2>
      <input value = {text} onChange={(e) => setText(e.target.value)}/>
      <button onClick = {() => addTask()}>Add a task</button>
    </div>
  );
}

export default Group;
