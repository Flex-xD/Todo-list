import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {

    const [todo, setTodo] = useState("");

    const tabs: string[] = ["All", "Done", "Not Done"];

    const handleTodo = () => {
        console.log(todo);
    }

    return (
        <div className="flex justify-center items-center h-[10vh] w-full bg-white border-b-2 border-black">
            {tabs.map((tab, tabIndex) => {
                return (
                    <li key={tabIndex} className={`list-none p-2 font-medium m-1 border-1 border-black h-10 w-23 flex items-center justify-center shadow-xl rounded-xl ${tab === "All" ? `bg-[#c6d8ff]` : tab === "Done" ? `bg-[#c4fbcc]` : `bg-[#e6f9bb]`} hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer`}>{tab}</li>
                )
            })}
            <Input type="text"
                placeholder="Enter a Todo ..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-[20%] border-black shadow-xl  p-3 ml-5 hover:scale-105 transition-all ease-in-out duration-300" />

            <Button
                type="submit"
                onClick={() => handleTodo()}
                className="bg-[#5a64f0] m-4 p-3 hover:scale-110 hover:shadow-2xl hover:ring-2 hover:ring-white transition-all ease-in duration-300">
                ADD TODO
            </Button>
        </div>
    )
}

export default Header;
