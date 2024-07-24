import { FiPlusCircle } from "react-icons/fi";
import "./Inputform.css";
import { useState } from "react";
export default function Inputform(props) {
  const[value,setValue] = useState('')

  return (
        <div className="input-form">
            <input
value={value}
onChange={(e) => setValue(e.target.value)}
             type="text"
             placeholder="Add your next task"/>
            <button onClick={() => props.handleAddTodo(value)}>Create <FiPlusCircle className="button-icon"/></button>
        </div>
  )
}