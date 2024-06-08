import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./Images/UNI-Connect logo.png";

export default function Navbar() {

    const [state, setState] = useState(false)
    const [isMenuVisible, setIsMenuVisible] = useState(false);



    const handleMenuVisibility = () => {
        console.log("clicked");
        setIsMenuVisible(true);
    };



    // Replace javascript:void(0) paths with your paths
    const navigation = [
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])



    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="/">
                <img
                    src={logo}
                    width={160}
                    height={120}
                    alt="Float UI logo"
                />
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    )



    return (
        <>
            <header className="bg-white ">
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav className={`md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8 main-md-bg">
                        <Brand />
                        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                            <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0" style={{ marginRight: 150 }}>
                                {
                                    navigation.map((item, idx) => {
                                        return (
                                            <li key={idx} className="text-gray-300 hover:text-gray-400">
                                                <a href={item.path} className="block">
                                                    {item.title}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                                <Link to={"/login"}>
                                    <li className="pt-2 pb-2">
                                        <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray font-medium  hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm md:inline-flex" style={{ display: "block", fontSize: 16 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>

                                            Log in
                                        </a>
                                    </li>
                                </Link>
                                <li className="pt-2 pb-2" >
                                    <a href="javascript:void(0)" onClick={() => handleMenuVisibility()} className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray font-medium  hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm md:inline-flex" style={{ display: "block", fontSize: 16 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                        Menu
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="bg-main-img">
                <section className="relative">
                    <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-8 md:px-8 lg:py-28">
                        <div className="space-y-5 max-w-4xl mx-auto ">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mx-auto" style={{ lineHeight: 1.3, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                               Search to courses and programmes in all of World
                            </h2>

                            <div className="p-5 bg-white">
                                <div className="searcharea flex flex-col md:flex-row items-center justify-center md:justify-start">
                                    <label htmlFor="semesters-transparent" className="dropdown-label">Semester</label>
                                    <div className="dropdown">
                                        <select id="semesters-transparent" name="period" data-initiated="" className="changed-show-error">
                                            <option value="19">Spring 2024</option>
                                            <option value="20">Summer 2024</option>
                                            <option value="21" selected>Autumn 2024</option>
                                            <option value="22">Spring 2025</option>
                                        </select>
                                    </div>
                                    <div className="textfield md:ml-4">
                                        <input type="search" id="freetext" name="freeText" autoComplete="off" placeholder="Keywords e.g. subject/course name/location" maxLength="999" />
                                        <label htmlFor="freetext" className="textfield-label">Courses and programmes</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 24 24" fill="#888">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.95-5-5.78-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.83 2.56 5.31 5.34 5.78a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                        </svg>
                                    </div>
                                    <Link to={"/course"} className="block md:ml-4 mt-4 md:mt-0">
                                        <button className="find-course-button">
                                            Find Courses
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
                </section>
            </div>




            {
                isMenuVisible && (
                    <>
                        <div className=" bg-white menu-right-side shadow-lg">
                            <div style={{ backgroundColor: "#f5f5f5", padding: 20 }}>
                                <div style={{ display: "flex", justifyContent: "space-between", }}>
                                    <h2 className="text-1xl text-gray-600 font-semibold  md:text-1xl" style={{ fontSize: 20 }}>
                                        Menu
                                    </h2>
                                    <div style={{ cursor: "pointer" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-1" onClick={() => setIsMenuVisible(false)}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <Link to={"/course"}>
                                <div style={{ padding: 20 }} className="hover:bg-gray-200">
                                    <div style={{ display: "flex", justifyContent: "space-between", }} >
                                        <h2 className="text-1xl font-semibold  md:text-1xl" style={{ fontSize: 17, color: "rgba(0, 0, 0, .87)", }} >
                                            Search for Course
                                        </h2>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <hr />
                            <Link to={"/applymaster"}>
                                <div style={{ padding: 20 }} className="hover:bg-gray-200">
                                    <div style={{ display: "flex", justifyContent: "space-between", }} >
                                        <h2 className="text-1xl font-semibold  md:text-1xl" style={{ fontSize: 17, color: "rgba(0, 0, 0, .87)", }} >
                                            Apply to master's
                                        </h2>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <hr />
                            <Link to={"/applybachelor"}>
                                <div style={{ padding: 20 }} className="hover:bg-gray-200">
                                    <div style={{ display: "flex", justifyContent: "space-between", }} >
                                        <h2 className="text-1xl font-semibold  md:text-1xl" style={{ fontSize: 17, color: "rgba(0, 0, 0, .87)", }} >
                                            Apply to bachelor's
                                        </h2>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <hr />
                            <Link to={"/event"}>
                                <div style={{ padding: 20 }} className="hover:bg-gray-200">
                                    <div style={{ display: "flex", justifyContent: "space-between", }} >
                                        <h2 className="text-1xl font-semibold  md:text-1xl" style={{ fontSize: 17, color: "rgba(0, 0, 0, .87)", }} >
                                           Events
                                        </h2>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <hr/>
                        </div>

                    </>

                )
            }

        </>
    )
}



