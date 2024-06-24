/** @format */

import User from "../models/userModel.js";
import mongoose from "mongoose";

export const searchUser = async (req, res) => {
	const { query } = req.query;
	console.log("Search Controller Query : ", query);
	try {
		// Check if the query is a valid ObjectId
		const isObjectId = mongoose.Types.ObjectId.isValid(query);
		const user = await User.findOne({
			$or: [
				{ username: { $regex: query, $options: "i" } },
				...(isObjectId ? [{ _id: query }] : []),
			],
		});

		console.log("Search Controller User : ", user);
		if (!user) {
			return res
				.status(404)
				.json({ message: "User not found from Search Controller" });
		}
		res.status(200).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Search Controller Internal Fault" });
	}
};
