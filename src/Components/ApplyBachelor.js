import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img_apply_master from "./Images/apply-admission-bachelor.jpg";
import logo from "./Images/UNI-Connect logo.png";





export default function ApplyBachelor() {


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
            <header className="bg-white shadow-md">
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav className={`md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
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


            <div className="mt-5 mb-5">
                <section className="max-w-screen-xl mx-auto py-4 px-4 md:px-8">
                    <div className="max-w-xl">
                        <div className="py-4">
                            <h3 className="text-4xl text-gray-800 font-bold md:text-5xl mb-6">
                                Apply to bachelor's
                            </h3>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 20 }}>
                                If you're interested in bachelor's studies, find step-by-step instructions on how to apply to University Admissions.
                            </p>
                        </div>
                        <img src={img_apply_master} alt="" />
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{display: "flex"}} >
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Short overview</a>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                Need a quick introduction to application to bachelor's? Drop in and get yourself acquainted.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{display: "flex"}} >
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Create a user account</a>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                The application starts - and continues - with a user account. Find out how to create one here at Universityadmissions.se.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{display: "flex"}} >
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Search for courses and programmes</a>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                There can be no application without courses and programmes. Sweden has a huge selection to choose from. Get a brief overview of how search works.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{display: "flex"}} >
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Provide application documents</a>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                After you've submitted your electronic application, you must document your previous studies. Find out what documents you need - and how you should prepare and submit them.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{display: "flex"}} >
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Rank your selections</a>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                The order you rank your selected courses and programmes is super important in Sweden. Find out why - and how to rank correctly.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{display: "flex"}} >
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Document your citizenship (EU/EEA)</a>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                EU/EEA and Swiss citizens don't have to pay an application fee - but not so fast! You do need to document your citizenship status for your application to be processed. Find out how to do that.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{display: "flex"}} >
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Provide application documents</a>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                After you've submitted your electronic application, you must document your previous studies. Find out what documents you need - and how you should prepare and submit them.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{display: "flex"}} >
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Pay your application fee (non-EU/EEA)</a>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                If you're a citizen of a country outside the EU/EEA, you need to pay a fee to have your application processed. Find out more about the application fee and how you can pay it.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{display: "flex"}} >
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Document your citizenship (EU/EEA)</a>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                EU/EEA and Swiss citizens don't have to pay an application fee - but not so fast! You do need to document your citizenship status for your application to be processed. Find out how to do that.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{display: "flex"}} >
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Have you previously applied?</a>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                If you've previously applied, any application documents - and your account - are still on file. Find out how to proceed to make sure your current application is complete and up-to-date.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5" style={{ display: "flex" }}>
                                <a href="/" className="under-text-line" style={{ fontSize: "1.25rem", }} >Applying after the deadline</a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </h4>
                            <p className="text-gray-900  mt-3 md:text-2xl" style={{ fontSize: 18 }}>
                                It's best to apply by the deadline, but some courses and programmes can still be open later for application. Find out how to submit a late application - and what this means for your chances.
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-normal text-gray-900 mt-5 opacity-65" style={{ marginTop: 50 }} >
                                <a href="/" style={{ fontSize: "0.95rem", }} >Last updated: 15 October 2021</a>
                            </h4>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}







