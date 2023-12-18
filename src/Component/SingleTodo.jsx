import React, { useState } from "react";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

const SingleTodo = ({
	todo,
	handleDelete,
	handleChange,
	setTodos,
	task,
	todos,
}) => {
	const [isDone, setIsdone] = useState(false);
	const [isEdit, setIsedit] = useState(false);

	const handleDone = () => {
		setIsdone(!isDone);
	};

	const handleEdit = () => {
		setIsedit(true);
	};

	const handleClick = (todo) => {
		setIsedit(false);
		if (task !== null) {
			setTodos(
				todos.map((tod) => {
					if (tod.task === todo.task) {
						tod.task = task;
					}
					return tod;
				})
			);
		}
		setTask(null);
	};

	return (
		<div className="flex flex-row items-center justify-between text-white   bg-black outline outline-1 hover:bg-purple-700  ">
			<div className="flex flex-row items-center mx-4 ">
				{isDone === true ? (
					<s
						className="flex flex-row items-center"
						onClick={handleDone}>
						<FaCheckCircle />
						<p
							className="py-2 mx-3 cursor-pointer"
							onClick={handleDone}>
							{todo.task}
						</p>
					</s>
				) : isEdit === false ? (
					<>
						<MdOutlineRadioButtonUnchecked onClick={handleDone} />
						<h4
							className="py-2 mx-3 cursor-pointer"
							onClick={handleDone}>
							{todo.task}
						</h4>
					</>
				) : (
					<div className="text-black py-2  ">
						<input
							className="mx-4 px-2 rounded"
							type="text"
							defaultValue={todo.task}
							onChange={(e) => handleChange(e)}
						/>
						<button
							className="bg-white px-2 rounded"
							onClick={() => handleClick(todo)}>
							Edit
						</button>
					</div>
				)}
			</div>
			<div className="flex flex-row items-center gap-3 ">
				<FiEdit3 onClick={handleEdit} />
				<IoClose
					onClick={() => handleDelete(todo)}
					className="mr-[1rem] text-xl"
				/>
			</div>
		</div>
	);
};

export default SingleTodo;
