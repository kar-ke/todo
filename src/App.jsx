import "./App.css";
import todo from "./data";
import Todos from "./Component/Todos";
import { useState } from "react";

function App() {
	const [todos, setTodos] = useState(todo);
	const [task, setTask] = useState(null);

	const handleChange = (event) => {
		event.preventDefault();
		setTask(event.target.value);
	};

  const found = todos.some((todo)=> todo.task===task)

	const handleClick = () => {
    if(task !== null){
      setTodos((prev) => [...prev, { task: task }]);
    }
    setTask(null)
	};

	return (
		<div className=" mx-8 md:mx-[m-20%] lg:mx-[30%] mt-[5%]">
			<h1 className="text-3xl font-bold ">
				todolist <span className="text-purple-600">;</span>
			</h1>
			<div className="flex flex-row gap-2 mt-5">
				<input
					type="text"
					onChange={handleChange}
					placeholder="Add task"
					className="outline outline-1 py-2 px-4 w-full"
				/>
				<button
					type="button"
					onClick={handleClick}
					className="bg-black hover:bg-purple-500 text-white px-4 py-2">
					Add
				</button>
			</div>
			<Todos
				todos={todos}
				setTodos={setTodos}
				task={task}
				setTask={setTask}
			/>
		</div>
	);
}

export default App;
