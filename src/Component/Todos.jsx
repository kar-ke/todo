import React from "react";
import SingleTodo from "./SingleTodo";

const Todos = ({ todos, setTodos, task, setTask }) => {
	const handleDelete = (todo) => {
		setTodos(todos.filter((tasks) => tasks.task !== todo.task));
	};

	const handleChange = (e) => {
		setTask(e.target.value);
	};

	return (
		<div className="flex flex-col gap-4  mt-10">
			{todos.map((todo, index) => (
				<SingleTodo
					key={index}
					todo={todo}
					handleDelete={handleDelete}
					handleChange={handleChange}
					setTodos={setTodos}
					task={task}
					todos={todos}
				/>
			))}
		</div>
	);
};

export default Todos;
