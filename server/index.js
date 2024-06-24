/** @format */

import app from "./server.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeneres
const PORT = process.env.PORT || 8000;
connectToDatabase()
	.then(() => {
		app.listen(PORT, () =>
			console.log(`Server Running on ${PORT} & Connected To Database `)
		);
	})
	.catch((err) => console.log(err));
