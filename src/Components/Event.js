import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./Images/UNI-Connect logo.png";



export default function Event() {

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


            <header className="bg-white shadow-md ">
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav className={`md:text-sm ${state ? "absolute z-20  shadow-lg top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
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



            <section className="mt-8 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 mb-5 shadow-lg p-3">
                <div className=" space-y-4 mt-5">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-3xl">
                        3rd National E-Gaming
                        <span className="text-indigo-600"> Event</span>
                    </h1>
                    <div style={{ display: "flex" }}>
                        <div className="p-1" style={{ display: "flex", backgroundColor: "blue", color: "white", borderRadius: 5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>

                            <h1 className="text-white  font-semibold text-1xl md:text-1xl ml-1">
                                18 - 2 - 2024
                            </h1>
                        </div>
                        <div className="p-1 ml-5" style={{ display: "flex", backgroundColor: "blue", color: "white", borderRadius: 5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <h1 className="text-white  font-semibold text-1xl md:text-1xl ml-1">
                                Main Campus
                            </h1>
                        </div>
                    </div>
                    <p className="text-gray-500 max-w-xcl  leading-relaxed">
                        3rd National E-Gaming Event, a prestigious competition attracting passionate gamers nationwide.
                        The event will be held on the 8th and 9th of May at the NUML Islamabad campus.
                        <Link to={"/eventdetail"}>
                            <a href="" style={{ color: "blue", fontWeight: "bold" }}> Read more...</a>
                        </Link>
                    </p>
                </div>
            </section>



            
            <section className="mt-8 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 mb-5 shadow-lg p-3">
                <div className=" space-y-4 mt-5">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-3xl">
                    TA/ RA Opportunities for 
                        <span className="text-indigo-600"> Students</span>
                    </h1>
                    <div style={{ display: "flex" }}>
                        <div className="p-1" style={{ display: "flex", backgroundColor: "blue", color: "white", borderRadius: 5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>

                            <h1 className="text-white  font-semibold text-1xl md:text-1xl ml-1">
                                18 - 2 - 2024
                            </h1>
                        </div>
                        <div className="p-1 ml-5" style={{ display: "flex", backgroundColor: "blue", color: "white", borderRadius: 5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <h1 className="text-white  font-semibold text-1xl md:text-1xl ml-1">
                                Main Campus
                            </h1>
                        </div>
                    </div>
                    <p className="text-gray-500 max-w-xcl  leading-relaxed">
                    Deserving and shining students of will be given jobs during their studies. Desirous students to contact the HR department.
                        <Link to={"/eventtwodetail"}>
                            <a href="" style={{ color: "blue", fontWeight: "bold" }}> Read more...</a>
                        </Link>
                    </p>
                </div>
            </section>



            
            <section className="mt-8 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 mb-5 shadow-lg p-3">
                <div className=" space-y-4 mt-5">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-3xl">
                    3rd International Conference on Engineering and Computing Technologies 
                        <span className="text-indigo-600"> (ICECT 2024)</span>
                    </h1>
                    <div style={{ display: "flex" }}>
                        <div className="p-1" style={{ display: "flex", backgroundColor: "blue", color: "white", borderRadius: 5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>

                            <h1 className="text-white  font-semibold text-1xl md:text-1xl ml-1">
                                18 - 2 - 2024
                            </h1>
                        </div>
                        <div className="p-1 ml-5" style={{ display: "flex", backgroundColor: "blue", color: "white", borderRadius: 5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <h1 className="text-white  font-semibold text-1xl md:text-1xl ml-1">
                                Main Campus
                            </h1>
                        </div>
                    </div>
                    <p className="text-gray-500 max-w-xcl  leading-relaxed">
                    3rd International Conference on Engineering and Computing Technologies
                        <Link to={"/eventthreedetail"}>
                            <a href="" style={{ color: "blue", fontWeight: "bold" }}> Read more...</a>
                        </Link>
                    </p>
                </div>
            </section>


          

        


        </>
    )
}
