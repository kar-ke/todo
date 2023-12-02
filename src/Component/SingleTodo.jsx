import React, { useState } from "react";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

const SingleTodo = ({ task }) => {
	const [isDone, setIsdone] = useState(false);

	const handleCheck = (e) => {
		setIsdone(!isDone);
	};

	return (
		<div className="flex flex-row items-center justify-between text-white hover:text-black hover:font-semibold bg-black hover:bg-purple-500">
			<div className="flex flex-row items-center ">
				{isDone === true ? (
					<>
						<FaCheckCircle
							className="ml-[1rem] "
							onClick={handleCheck}
						/>
						<s className=" py-2 ml-[1rem]" onClick={handleCheck}>
							{task}
						</s>
					</>
				) : (
					<>
						<MdOutlineRadioButtonUnchecked
							className="ml-[1rem] "
							onClick={handleCheck}
						/>
						<h5 className=" py-2 ml-[1rem]" onClick={handleCheck}>
							{task}
						</h5>
					</>
				)}
			</div>
			<div className="flex flex-row items-center gap-3 ">
				<FiEdit3 />
				<IoClose className="mr-[1rem] text-xl" />
			</div>
		</div>
	);
};

export default SingleTodo;
