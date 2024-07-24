import { useState } from "react";
import Inputform from "../Inputform/Inputform";
import Tasklist from "../Tasklist/Tasklist";
import "./content.css";
function Content() {
  const[todos,setTodos] = useState([
    {
      
    }
  ]);
  function addTodo(value){
setTodos([
  {
    id:0,
    title:value,
    isCompleted:false,
  },
]);

  }
  return (
 <>
 <div className="content">
<Inputform handleAddTodo={addTodo}/>
<Tasklist todos={todos}/>
 </div>
 </>
  )
}

export default Content
