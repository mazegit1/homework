import { useState } from "react"
import "./Task.css"
function Task() {
    const [isCompleted,setIsCompleted] = useState(false);
  return (
   <>
   <div className="task">
<div className={!isCompleted ? "task-check" : "task-check completed"} 
onClick={() => setIsCompleted(!isCompleted)}></div>
</div>
   </>
  )
}

export default Task
