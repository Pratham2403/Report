import { useState, useEffect } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Avatar,
	Button,
	Divider,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import axios from "axios";

const CustomCard = ({ post, onDelete, onFlag }) => {
	const [comments, setComments] = useState([]);
	const [isFlagged, setIsFlagged] = useState(post.isFlagged || false);
	const [isDeleted, setIsDeleted] = useState(false);
	const [flaggedItems, setFlaggedItems] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const response = await axios.get(
					`/comment/getCommentsByPost/${post._id}`
				);
				setComments(response.data);
			} catch (error) {
				console.error("Error fetching comments:", error);
			}
		};

		fetchComments();
	}, [post._id]);

	const handlePostAction = async (key) => {
		try {
			if (key === "flag") {
				await axios.patch(`/post/flagPost/${post._id}`);
				setIsFlagged(true);
				onFlag(post._id);
			} else if (key === "delete") {
				await axios.delete(`/post/deletePost/${post._id}`);
				setIsDeleted(true);
				onDelete(post._id);
			}
		} catch (error) {
			console.error("Error performing action:", error);
		}
	};

	const handleCommentAction = async (key, commentId) => {
		try {
			if (key === "flag") {
				await axios.patch(`/comment/flagComment/${commentId}`);
				setFlaggedItems([...flaggedItems, commentId]);
			} else if (key === "delete") {
				await axios.delete(`/comment/deleteComment/${commentId}`);
				setComments(
					comments.filter((comment) => comment._id !== commentId)
				);
				setFlaggedItems(
					flaggedItems.filter((item) => item !== commentId)
				);
			}
		} catch (error) {
			console.error("Error performing action:", error);
		}
	};

	const handleReplyAction = async (key, replyId) => {
		try {
			if (key === "flag") {
				await axios.patch(`/reply/flagReply/${replyId}`);
				setFlaggedItems([...flaggedItems, replyId]);
			} else if (key === "delete") {
				await axios.delete(`/reply/deleteReply/${replyId}`);
				setComments(
					comments.map((comment) => ({
						...comment,
						replies: comment.replies.filter(
							(reply) => reply._id !== replyId
						),
					}))
				);
				setFlaggedItems(
					flaggedItems.filter((item) => item !== replyId)
				);
			}
		} catch (error) {
			console.error("Error performing action:", error);
		}
	};

	if (isDeleted) {
		return null;
	}

	return (
		<Card
			className={`max-w-[500px] bg-gray-900 text-white m-4 ${isFlagged ? "border border-red-500" : ""}`}
		>
			<CardHeader className="justify-between">
				<div className="flex-col gap-10">
					<Avatar
						isBordered
						radius="full"
						size="md"
						src={post.authorProfile}
					/>
					<div className="flex flex-col gap-1 items-start justify-center">
						<h4 className="text-small mt-7 font-semibold leading-none text-default-600">
							{post.authorName}
						</h4>
						<h5 className="text-small tracking-tight text-default-400">
							{post.title}
						</h5>
					</div>
				</div>
				<Dropdown>
					<DropdownTrigger>
						<Button variant="bordered" color="danger">
							Actions
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Post actions"
						onAction={(key) => handlePostAction(key)}
						variant="bordered"
						color="danger"
					>
						<DropdownItem key="flag">Flag Post</DropdownItem>
						<DropdownItem key="delete" className="text-danger">
							Delete Post
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</CardHeader>
			<CardBody className="px-3 py-0 text-small text-default-400">
				<p>{post.content}</p>
				<Divider className="my-4" />
				<div className="text-small text-default-400">
					{comments.map((comment) => (
						<div
							key={comment._id}
							className={`my-2 ${
								flaggedItems.includes(comment._id)
									? "bg-red-100 shadow-md"
									: ""
							}`}
						>
							<div className="flex justify-between items-center">
								{comment.content}
								<Dropdown>
									<DropdownTrigger>
										<Button
											variant="bordered"
											color="danger"
										>
											Actions
										</Button>
									</DropdownTrigger>
									<DropdownMenu
										aria-label="Comment actions"
										onAction={(key) =>
											handleCommentAction(
												key,
												comment._id
											)
										}
										variant="bordered"
										color="danger"
									>
										<DropdownItem key="flag">
											Flag Comment
										</DropdownItem>
										<DropdownItem
											key="delete"
											className="text-danger"
										>
											Delete Comment
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</div>
							{comment.replies.map((reply) => (
								<div
									key={reply._id}
									className={`ml-4 mt-2 ${
										flaggedItems.includes(reply._id)
											? "bg-red-100 shadow-md"
											: ""
									}`}
								>
									<div className="flex justify-between items-center">
										{reply.content}
										<Dropdown>
											<DropdownTrigger>
												<Button
													variant="bordered"
													color="danger"
												>
													Actions
												</Button>
											</DropdownTrigger>
											<DropdownMenu
												aria-label="Reply actions"
												onAction={(key) =>
													handleReplyAction(
														key,
														reply._id
													)
												}
												variant="bordered"
												color="danger"
											>
												<DropdownItem key="flag">
													Flag Reply
												</DropdownItem>
												<DropdownItem
													key="delete"
													className="text-danger"
												>
													Delete Reply
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</CardBody>
			<CardFooter className="gap-3">
				<div className="flex gap-1">
					<p className="font-semibold text-default-400 text-small">
						{post.likes.length}
					</p>
					<p className="text-default-400 text-small">Likes</p>
				</div>
				<div className="flex gap-1">
					<p className="font-semibold text-default-400 text-small">
						{comments.length}
					</p>
					<p className="text-default-400 text-small">Comments</p>
				</div>
			</CardFooter>
		</Card>
	);
};

export default CustomCard;
