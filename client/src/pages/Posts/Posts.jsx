/** @format */

import { useEffect, useState } from "react";
import CustomCard from "../../components/Card/CustomCard";
import { Grid, CircularProgress, Box } from "@mui/material";
import PostNavbar from "../../components/Card/PostNavbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Posts = () => {
	const { userId } = useParams();
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [flaggedPosts, setFlaggedPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get(`/post/getAllPosts/${userId}`);
				setPosts(response.data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, [userId]);

	const handlePostDelete = (postId) => {
		setPosts(posts.filter((post) => post._id !== postId));
	};

	const handlePostFlag = (postId) => {
		setFlaggedPosts([...flaggedPosts, postId]);
	};

	if (loading) {
		return <CircularProgress size={40} />;
	}

	return (
		<div className="w-screen h-screen p-8 flex flex-wrap items-start ">
			<PostNavbar />
			<Box sx={{ flexGrow: 1, padding: 2 }}>
				<Grid container spacing={1}>
					{posts.map((post) => (
						<Grid item xs={12} sm={6} md={4} key={post._id}>
							<CustomCard
								post={post}
								onDelete={handlePostDelete}
								onFlag={handlePostFlag}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
};

export default Posts;
