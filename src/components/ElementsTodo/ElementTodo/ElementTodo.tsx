import { Itodo } from "../../../app/models";
import { useAppDispatch } from "../../../app/hooks";
import { toggleCompleteTodo, removeTodo } from "../../../app/todoSlice";

function ElementTodo({ title, id, groupId, completed, index }: Itodo) {
  if (index !== undefined) ++index
  const dispatch = useAppDispatch();
  return (
    <div className="element-todo">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch(toggleCompleteTodo({ idTodo: id, groupId }));
        }}
      />
      <h4 className="element-todo__todo-title">{index}. {title}</h4>
      <label className = "element-todo__removeTodo" onClick = {() => dispatch(removeTodo({idTodo: id, groupId}))}>&times;</label>
    </div>
  );
}

export default ElementTodo;
