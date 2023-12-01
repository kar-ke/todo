import { useState } from "react";
import { IoClose } from "react-icons/io5";

const todo = () => {
	const data = [
		{
			id: "1",
			msg: "This is first message",
			isCompleted: true,
		},
		{
			id: "2",
			msg: "This is second message",
			isCompleted: false,
		},
	];
	const [newData, setNewdata] = useState(data);

	const taskAdder = () => {
		const val = document.querySelector("input").value;
		const newTask = {
			id: (data.length + 1).toString(),
			msg: val,
			isCompleted: false,
		};

		data.push(newTask);
		setNewdata(data);
		console.log(newData);
	};

	return (
		<main className="flex flex-col h-screen justify-center items-center ">
			<div className="flex flex-col justify-center items-center outline outline-1 p-8 rounded">
				<div className="">
					<input
						type="text"
						placeholder="enter tasks"
						className="outline outline-1 py-2 px-4 rounded"
					/>
					<button
						type="button"
						onClick={() => {
							taskAdder();
						}}
						className="bg-black text-white px-4 py-2 outline outline-1 ml-4 rounded">
						Add
					</button>
				</div>
				<hr className="w-[290px] mt-10" />
				<div className="w-full">
					{data.map((currData) => {
						return (
							<div
								className="mt-8 flex flex-row items-center justify-between gap-4 "
								key={currData.id}>
								<div className="flex flex-row items-baseline gap-4">
									<div className="w-[10px] h-[10px] rounded-full outline outline-1"></div>
									<p>{currData.msg}</p>
								</div>
								<IoClose />
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
};

export default todo;
