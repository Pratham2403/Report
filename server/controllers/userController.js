/** @format */

import { getAllUsers } from "../DAOs/userDao.js";

export const getAllUsersController = async (req, res) => {
	try {
		const users = await getAllUsers();
		res.json(users);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
