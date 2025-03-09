import Header from "./Header";
import Todo from "./Todo";

const Home = () => {
    return (
        <div className="h-[100vh] w-[100vw] bg-fuchsia-100 overflow-hidden">
            <Header/>
            <div className="w-full h-[90vh] border-2 p-20 flex items-center justify-center">
                <div className="h-130 w-400 bg-white border-1 border-black">
                    <Todo/>
                </div>
            </div>
        </div>
    )
}

export default Home;
