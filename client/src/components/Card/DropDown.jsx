/** @format */
import { useState } from "react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@nextui-org/react";
import axios from "axios";

const DropDown = ({ postId }) => {
	const handleAction = async (key) => {
		try {
			if (key === "flag") {
				await axios.patch(`/post/flagPost/${postId}`);
			} else if (key === "delete") {
				await axios.delete(`/post/deletePost/${postId}`);
			}
		} catch (error) {
			console.error("Error performing action:", error);
		}
	};

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button variant="bordered" color="danger">
					Actions
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				aria-label="Action event example"
				onAction={(key) => handleAction(key)}
				variant="bordered"
				color="danger"
			>
				<DropdownItem key="flag">Flag Post</DropdownItem>
				<DropdownItem
					key="delete"
					className="text-danger"
					color="danger"
				>
					Delete Post
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default DropDown;
