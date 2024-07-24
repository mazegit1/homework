import "./Tasklist.css"
import Task from "./Task.jsx"
import tasklist from "../../img/tasklist.png"
function Tasklist({todos}) {
  return (
<>
<div className="task-list">
    <div className="task-list-top">
<div className="left"><h1>Current tasks</h1><h3>0</h3></div> 
<div className="right"> <h2>Completed</h2><h3>0</h3></div>  
    </div>
   {todos.length > 0 ?(
    <div className="task-list-items">
      <Task/>
</div>
):(
    <div className="task-list-items task-list-items-empty">
    <img src={tasklist} className="tasklist-img" alt="" />
    <h4>The Todo list is empty please add task to be done Organize with todo</h4>
</div>
   )}
</div>

</>
  )
}
export default Tasklist;