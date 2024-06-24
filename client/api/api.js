/** @format */

import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:8000/api/" });

axiosInstance.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
	}
	return req;
});
export default axiosInstance;
