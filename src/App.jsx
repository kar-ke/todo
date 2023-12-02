import "./App.css";
import data from "./data";
import Todos from "./Component/Todos";
import { useState } from "react";

function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState(data)

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleClick = () => {
    setTodos((prev) => [...prev, {task:task}])
  }

	return (
		<div className=" mx-8 md:mx-[m-20%] lg:mx-[30%] mt-[5%]">
        <h1 className="text-3xl font-bold ">todolist <span className="text-purple-600">;</span></h1>
			<div className="flex flex-row gap-2 mt-5">
        <input type="text" onChange={handleChange} placeholder="Add task" className="outline outline-1 py-2 px-4 w-full"/>
        <button type="button" onClick={handleClick} className="bg-black hover:bg-purple-500 text-white px-4 py-2">Add</button>
      </div>
      <Todos todo={todos}/>
		</div>
	);
}

export default App;
