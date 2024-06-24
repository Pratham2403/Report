/** @format */

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Input,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Avatar,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { SearchIcon } from "./SearchIcon.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

const NavBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [searchQuery, setSearchQuery] = useState("");

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("profile")).token
	);

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
		setUser(null);
		navigate("/auth");
	};

	///Handling seaches
	const handleSearchQueryChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSearchSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.get(`/search?query=${searchQuery}`);
		console.log(response);
		if (response.status === 200) {
			navigate(`/profile/${response.data._id}`);
		} else {
			console.log("User Response not recieved in Navbar.jsx");
		}
	};

	// console.log(user);
	return (
		<Navbar isBordered>
			<NavbarContent justify="start">
				<NavbarBrand className="mr-4">
					<AcmeLogo />
					<p className="hidden sm:block font-bold text-inherit">
						ACME
					</p>
				</NavbarBrand>
				<NavbarContent className="sm:flex gap-3">
					<NavbarItem>
						<Link color="foreground" href="#">
							Features
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link href="#" aria-current="page" color="secondary">
							Customers
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="#">
							Integrations
						</Link>
					</NavbarItem>
				</NavbarContent>
			</NavbarContent>

			<NavbarContent
				as="form"
				onSubmit={handleSearchSubmit}
				className="items-center"
				justify="end"
			>
				<Input
					classNames={{
						base: "max-w-full sm:max-w-[10rem] h-10",
						mainWrapper: "h-full",
						input: "text-small",
						inputWrapper:
							"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
					}}
					placeholder="Type to search..."
					size="sm"
					startContent={<SearchIcon size={18} />}
					type="search"
					value={searchQuery}
					onChange={handleSearchQueryChange}
				/>
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="secondary"
							name="Jason Hughes"
							size="sm"
							src={user.picture}
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="profile" className="h-14 gap-2">
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">{user.email}</p>
						</DropdownItem>
						{/* <DropdownItem key="settings">
								My Settings
							</DropdownItem>
							<DropdownItem key="team_settings">
								Team Settings
							</DropdownItem>
							<DropdownItem key="analytics">
								Analytics
							</DropdownItem>
							<DropdownItem key="system">System</DropdownItem>
							<DropdownItem key="configurations">
								Configurations
							</DropdownItem>
							<DropdownItem key="help_and_feedback">
								Help & Feedback
							</DropdownItem> */}
						<DropdownItem
							type="button"
							onClick={handleLogout}
							key="logout"
							color="danger"
						>
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
};

export default NavBar;
