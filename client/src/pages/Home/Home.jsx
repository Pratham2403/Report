import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    console.log(user);

    return (
        <div className="w-screen h-screen p-8 flex flex-wrap items-start ">
            <Navbar />
        </div>
    );
};

export default Home;
