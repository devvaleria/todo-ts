import { Itodo } from "../../../app/models";
import { useAppDispatch } from "../../../app/hooks";
import { toggleCompleteTodo, removeTodo } from "../../../app/todoSlice";

function ElementTodo({ title, id, groupId, completed }: Itodo) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch(toggleCompleteTodo({ idTodo: id, groupId }));
        }}
      />
      <button onClick = {() => dispatch(removeTodo({idTodo: id, groupId}))}>Delete task</button>
    </div>
  );
}

export default ElementTodo;
