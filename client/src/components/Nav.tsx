
import { BsCart, BsSearch } from "react-icons/bs";
import { FaBars, FaTimes, FaUser, FaUserLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCart, ToggleLogin, ToggleSignUp } from "../redux/popUPSlice";
import { RootState } from "../redux";

function Nav() {


    // Function to toggle the sidebar  

    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => (state.userReducer))
    const cartLength = useSelector((state: RootState) => (state.cartReducer.length))


    return (
        <>
            <header className='sm:border-b-[1px] sm:border-green-400/30 sm:h-14 w-[100%] mb-3 bg-white/90 fixed z-20 top-0 right-0'>
                <nav className='webNav flex justify-between items-center px-4'>
                    <h1 className='text-green-400/30 font-mono text-lg font-bold sm:font-medium  sm:text-3xl flex'>
                        {
                            // Animated Logo  
                            ["B", "a", "k", "o", "P", "e", "t"].map((letter, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ x: index % 2 === 0 ? -200 : 200, rotate: 180 }}
                                    animate={{ x: 0, rotate: 0 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    {letter}
                                </motion.p>
                            ))
                        }
                    </h1>
                    <div className='border-[1px] w-48 h-10 border-green-400/30 rounded-lg flex justify-between items-center px-2 sm:w-72'>
                        <input
                            type="text"
                            className='w-40 h-8 rounded-lg pl-2 outline-none'
                            placeholder='Search...'
                        />
                        <BsSearch />
                    </div>
                    <div className='hidden sm:flex justify-between w-[20%] '>
                        <p className=''><span>about</span> </p>
                        <p className=''><span>our services</span> </p>
                        <p className=''><span className=" ">contactUs </span> </p>
                    </div>
                    <div className="flex relative mr-10">
                        {user ? <FaUser className=" w-8 h-8 px-1 text-green-400" /> : <FaUserLock className=" w-8 h-8 px-1 text-green-400" onClick={() => { dispatch(ToggleSignUp()) }} />}
                        {user && <> <BsCart className=" w-8 h-8  text-green-400"
                            onClick={() => {
                                dispatch(ToggleCart())
                            }}
                        />
                            <span className=" absolute right-2 top-0.5 ">{cartLength < 99 ? cartLength : "99+"}</span></>
                        }

                    </div>
                </nav>
            </header>

            {/* Mobile Sidebar */}

        </>
    );
}

export default Nav;  