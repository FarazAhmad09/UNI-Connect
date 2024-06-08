import React, { useState } from "react";
import search_men from "./Images/search-men-img.png";
import { Link } from "react-router-dom";

export default function Overview() {

  const [showFilter, setShowFilter] = useState(false);
  const [showContent, setShowContent] = useState("both"); // Initialize state for content
  const [showMore, setShowMore] = useState(false);



  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  const toggleContent = (content) => {
    setShowContent(content); // Update state based on clicked option
  };

  return (
    <>
      <div className="pt-5" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-screen-xl mx-auto px-4 py-3 items-center justify-between text-gray-500 sm:flex md:px-8">
          <div className="flex gap-x-4">
            <p className="py-2 font-small">
              Showing 4,360 results for Autumn 2024
            </p>
          </div>
          <div className="relative w-72 max-w-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-600 right-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <select className="w-full px-3 py-2 text-1xl font-semibold text-gray-600  border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
              <option>A - Z, Course</option>
              <option>Z - A, Course</option>
              <option>A - Z, Collage/University</option>
              <option>Z - A, Collage/University</option>
              <option>Least to most, Credits</option>
              <option>Most least to, Credits</option>
            </select>
          </div>
        </div>
      </div>

      <div className="" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-screen-xl mx-auto px-4 py-3  justify-between text-gray-600 sm:flex md:px-8" >
          <div className="flex gap-x-4" style={{ height: "fit-content" }}>
            <div className='bg-white ' >
              <div className='left-side-search' style={{ display: 'flex', }}>
                <p className="py-2 font-semibold text-gray-700" style={{ fontSize: 18, }}>
                  Filter
                </p>
                <p className="py-2 font-semibold  hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm p-5 text-red-600" style={{ fontSize: 15, order: 2, marginLeft: 200, }}>
                  Reset(0)
                </p>
              </div>
              <p className="py-2 font-bold text-gray-700" style={{ fontSize: 15, padding: 10, paddingBottom: 15 }}>
                Both courses and programmes
              </p>
              <div className='' style={{ display: 'flex', flexDirection: 'row', cursor: "pointer" }}>
                <p className={`py-2 font-semibold ${showContent === 'both' ? 'bg-slate-800 text-white' : ''} hover:bg-slate-600 hover:text-white active:bg-slate-800 duration-150 rounded-sm p-5 text-gray-600`} style={{ fontSize: 15, order: 2, borderBottom: '1px solid #000', marginLeft: 10 }} onClick={() => toggleContent('both')}>
                  Both
                </p>
                <p className={`py-2 font-semibold ${showContent === 'course' ? 'bg-slate-800 text-white' : ''} hover:bg-slate-600 hover:text-white active:bg-slate-800 duration-150 rounded-sm p-5 text-gray-600`} style={{ fontSize: 15, order: 2, borderBottom: '1px solid #000', marginLeft: 10 }} onClick={() => toggleContent('course')}>
                  Course
                </p>
                <p className={`py-2 font-semibold ${showContent === 'program' ? 'bg-slate-800 text-white' : ''} hover:bg-slate-600 hover:text-white active:bg-slate-800 duration-150 rounded-sm p-5 text-gray-600`} style={{ fontSize: 15, order: 2, borderBottom: '1px solid #000', marginLeft: 10 }} onClick={() => toggleContent('program')}>
                  Programmes
                </p>
              </div>
              <p className="py-2 font-bold text-gray-700" style={{ fontSize: 15, padding: 10, paddingTop: 15 }}>
                University and Subject
              </p>
              <div className="relative w-82 max-w-full " style={{ padding: 10, }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-600 right-3"
                  viewBox="0 0 20 20 "
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <select className="w-full px-3 py-2 text-1xl font-normal text-gray-600  border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                  <option >All University</option>
                  <option>Z - A, Course</option>
                  <option>A - Z, Collage/University</option>
                  <option>Z - A, Collage/University</option>
                  <option>Least to most, Credits</option>
                  <option>Most least to, Credits</option>
                </select>
              </div>
              <div className="relative w-82 max-w-full " style={{ padding: 10, }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-600 right-3"
                  viewBox="0 0 20 20 "
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <select className="w-full px-3 py-2 text-1xl font-normal text-gray-600  border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                  <option >All Subject</option>
                  <option>Z - A, Course</option>
                  <option>A - Z, Collage/University</option>
                  <option>Z - A, Collage/University</option>
                  <option>Least to most, Credits</option>
                  <option>Most least to, Credits</option>
                </select>
              </div>
              <hr />
              <p className="py-2 font-bold text-gray-700" style={{ fontSize: 15, padding: 10, paddingTop: 15 }}>
                University and Subject
              </p>
              <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
                <input type="checkbox" name="" value="" className="py-2 font-semibold text-gray-500 duration-150 rounded-sm  mt-3" style={{ width: '17px', height: '17px', order: 2, marginLeft: 10, }} />
                <p className="py-2 font-normal  text-gray-500  duration-150 rounded-sm p-2" style={{ fontSize: 16, order: 2, marginLeft: 13 }}>
                  Preparatory level
                </p>
                <div className="py-2 font-semibold text-gray-700 duration-150 rounded-sm p-5" style={{ fontSize: 15, order: 2, marginLeft: 103 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </div>
              </div>
              <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
                <input type="checkbox" name="" value="" className="py-2 font-semibold text-gray-500 duration-150 rounded-sm  mt-3" style={{ width: '17px', height: '17px', order: 2, marginLeft: 10, }} />
                <p className="py-2 font-normal  text-gray-500  duration-150 rounded-sm p-2" style={{ fontSize: 16, order: 2, marginLeft: 13 }}>
                  Bachelor's level
                </p>
                <div className="py-2 font-semibold text-gray-700 duration-150 rounded-sm p-5" style={{ fontSize: 15, order: 2, marginLeft: 114 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </div>
              </div>
              <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
                <input type="checkbox" name="" value="" className="py-2 font-semibold text-gray-500 duration-150 rounded-sm  mt-3" style={{ width: '17px', height: '17px', order: 2, marginLeft: 10, }} />
                <p className="py-2 font-normal  text-gray-500  duration-150 rounded-sm p-2" style={{ fontSize: 16, order: 2, marginLeft: 13 }}>
                  Master's level
                </p>
                <div className="py-2 font-semibold text-gray-700 duration-150 rounded-sm p-5" style={{ fontSize: 15, order: 2, marginLeft: 127 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </div>
              </div>
              <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
                <input type="checkbox" name="" value="" className="py-2 font-semibold text-gray-500 duration-150 rounded-sm  mt-3" style={{ width: '17px', height: '17px', order: 2, marginLeft: 10, }} />
                <p className="py-2 font-normal  text-gray-500  duration-150 rounded-sm p-2" style={{ fontSize: 16, order: 2, marginLeft: 13 }}>
                  Show only courses <br></br>and programmes that <br></br>do not require previous<br></br> university studies

                </p>
                <div className="py-2 font-semibold text-gray-700 duration-150 rounded-sm p-5" style={{ fontSize: 15, order: 2, marginLeft: 56 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </div>
              </div>
              <hr className="mt-4" />
              <p className="py-2 font-bold text-gray-700" style={{ fontSize: 15, padding: 10, paddingTop: 15 }}>
                Show only courses that are
              </p>
              <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
                <input type="checkbox" name="" value="" className="py-2 font-semibold text-gray-500 duration-150 rounded-sm  mt-3" style={{ width: '17px', height: '17px', order: 2, marginLeft: 10, }} />
                <p className="py-2 font-normal  text-gray-500  duration-150 rounded-sm p-2" style={{ fontSize: 16, order: 2, marginLeft: 13 }}>
                  Open for application
                </p>
              </div>

              <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
                <input type="checkbox" name="" value="" className="py-2 font-semibold text-gray-500 duration-150 rounded-sm  mt-3" style={{ width: '17px', height: '17px', order: 2, marginLeft: 10, }} />
                <p className="py-2 font-normal  text-gray-500  duration-150 rounded-sm p-2" style={{ fontSize: 16, order: 2, marginLeft: 13 }}>
                  Distance courses
                </p>
                <div className="py-2 font-semibold text-gray-700 duration-150 rounded-sm p-5" style={{ fontSize: 15, order: 2, marginLeft: 106 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </div>
              </div>
              <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
                <input type="checkbox" name="" value="" className="py-2 font-semibold text-gray-500 duration-150 rounded-sm  mt-3" style={{ width: '17px', height: '17px', order: 2, marginLeft: 10, }} />
                <p className="py-2 font-normal  text-gray-500  duration-150 rounded-sm p-2" style={{ fontSize: 16, order: 2, marginLeft: 13 }}>
                  Only distance courses<br></br> without required<br></br> physical meetings
                </p>
                <div className="py-2 font-semibold text-gray-700 duration-150 rounded-sm p-5" style={{ fontSize: 15, order: 2, marginLeft: 70 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </div>
              </div>
              <p className="py-2 font-semibold text-gray-700" style={{ fontSize: 15, padding: 10, paddingTop: 15 }}>
                <Link to={"/login"}>
                  <a href="" className="under-text-line" style={{ fontSize: 17 }}> Log in </a>
                </Link>
                to see your program choices
              </p>
              <hr className="mt-5" />

              {showFilter && (
                <>
                  <div className='bg-white'>
                    <p className="py-2 font-bold text-gray-700" style={{ fontSize: 15, padding: 10, paddingBottom: 15 }}>
                      Start period
                    </p>
                    <div className='' style={{ display: 'flex', flexDirection: 'row', cursor: "pointer" }}>
                      <p className={`py-2 font-semibold ver:bg-slate-600 hover:text-white active:bg-slate-800 duration-150 rounded-sm p-5 text-gray-600`} style={{ fontSize: 15, order: 2, borderBottom: '1px solid #000', marginLeft: 10 }} >
                        All
                      </p>
                      <p className={`py-2 font-semibold hover:bg-slate-600 hover:text-white active:bg-slate-800 duration-150 rounded-sm p-5 text-gray-600`} style={{ fontSize: 15, order: 2, borderBottom: '1px solid #000', marginLeft: 10 }} >
                        Period 1
                      </p>
                      <p className={`py-2 font-semibold  hover:bg-slate-600 hover:text-white active:bg-slate-800 duration-150 rounded-sm p-5 text-gray-600`} style={{ fontSize: 15, order: 2, borderBottom: '1px solid #000', marginLeft: 10 }}>
                        Period 2
                      </p>
                    </div>
                  </div>
                  <hr className="mt-5" />
                  <p className="py-2 font-bold text-gray-700" style={{ fontSize: 15, padding: 10, paddingTop: 15 }}>
                    Instructional time
                  </p>
                  <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
                    <input type="checkbox" name="" value="" className="py-2 font-semibold text-gray-500 duration-150 rounded-sm  mt-3" style={{ width: '17px', height: '17px', order: 2, marginLeft: 10, }} />
                    <p className="py-2 font-normal  text-gray-500  duration-150 rounded-sm p-2" style={{ fontSize: 16, order: 2, marginLeft: 13 }}>
                      Day
                    </p>
                  </div>
                  <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
                    <input type="checkbox" name="" value="" className="py-2 font-semibold text-gray-500 duration-150 rounded-sm  mt-3" style={{ width: '17px', height: '17px', order: 2, marginLeft: 10, }} />
                    <p className="py-2 font-normal  text-gray-500  duration-150 rounded-sm p-2" style={{ fontSize: 16, order: 2, marginLeft: 13 }}>
                      Evening
                    </p>
                  </div>
                  <div className='' style={{ display: 'flex', flexDirection: 'row', }}>
                    <input type="checkbox" name="" value="" className="py-2 font-semibold text-gray-500 duration-150 rounded-sm  mt-3" style={{ width: '17px', height: '17px', order: 2, marginLeft: 10, }} />
                    <p className="py-2 font-normal  text-gray-500  duration-150 rounded-sm p-2" style={{ fontSize: 16, order: 2, marginLeft: 13 }}>
                      Weekend
                    </p>
                  </div>
                  <hr className="mt-5" />

                  <p className="py-2 font-bold text-gray-700" style={{ fontSize: 15, padding: 10, paddingTop: 15 }}>
                    Pace of study
                  </p>
                  <div className="relative w-82 max-w-full " style={{ padding: 10, }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-600 right-3"
                      viewBox="0 0 20 20 "
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <select className="w-full px-3 py-2 text-1xl font-normal text-gray-600  border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                      <option >All</option>
                      <option>Full-time - 100%</option>
                      <option>Up to 75%</option>
                      <option>Up to 50%</option>
                      <option>Up to 25%</option>
                    </select>
                  </div>
                  <hr className="mt-5" />
                  <p className="py-2 font-bold text-gray-700" style={{ fontSize: 15, padding: 10, paddingTop: 15 }}>
                    Language and Degree
                  </p>
                  <div className="relative w-82 max-w-full " style={{ padding: 10, }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-600 right-3"
                      viewBox="0 0 20 20 "
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <select className="w-full px-3 py-2 text-1xl font-normal text-gray-600  border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                      <option >All Language</option>
                      <option>Swedish</option>
                      <option>English</option>
                      <option>Other Language</option>
                    </select>
                  </div>
                  <div className="relative w-82 max-w-full " style={{ padding: 10, }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-600 right-3"
                      viewBox="0 0 20 20 "
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <select className="w-full px-3 py-2 text-1xl font-normal text-gray-600  border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                      <option >Select Degree</option>
                      <option>Swedish</option>
                      <option>English</option>
                      <option>Other Language</option>
                    </select>
                  </div>
                  <hr className="mt-5" />



                </>
              )}
              <button
                className="py-2 font-semibold hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm p-5 text-gray-700 mt-5"
                style={{
                  fontSize: 15,
                  order: 2,
                  marginLeft: 110,
                  marginBottom: 10,
                  display: 'flex',   // Make the button a flex container
                  alignItems: 'center', // Center the text vertically
                }}
                onClick={toggleFilter}
              >
                {showFilter ? "Minimize Filter" : "Show all Filter"}
              </button>

            </div>
          </div>
          <div className='right-side-search' style={{ marginLeft: 20, }}>
            {/* Right side content */}
            {showContent === 'both' && (
              <>
                <div className='right-side-search mb-5' style={{ padding: 10, backgroundColor: "white", }}>
                  <div style={{ display: "flex" }}>
                    <p className="py-2 font-semibold" style={{ fontSize: "1.25rem" }} >
                      3D Data and Visualization in Archaeology and Cultural Heritage Studies
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mt-2" style={{ marginLeft: 100 }}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <p className=" font-normal" style={{ fontSize: "1rem" }} >
                    15 Credits, University of Gothenburg, Location: Varied
                  </p>
                  <p className="font-normal" style={{ fontSize: "1rem" }}>
                    <span className="orangedot" style={{ marginRight: "0.5rem" }}></span>
                    <span>Will open for late application 15 July 2024</span>
                  </p>
                  <button
                    className="py-2 font-semibold hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm p-5 text-gray-700 mt-5"
                    style={{
                      fontSize: 15,
                      order: 2,
                      marginBottom: 10,
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #000', // Add border style
                      padding: '10px', // Adjust padding for better appearance
                    }}
                    onClick={toggleMore}
                  >
                    {showMore ? "Show less" : "Show more"}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {showMore && (
                    <>
                      <div className='bg-gray-100 mt-5'>
                        <h4 className=" font-semibold text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Tuition fee
                        </h4>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", paddingLeft: 10, }}>
                          First tuition fee instalment: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Total tuition fee: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          *EU/EEA Citizens are not required to pay fees
                        </p>
                      </div>
                      <div className='bg-white mt-5' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Period: <span style={{ fontSize: 15, fontWeight: "normal" }}>Autumn 2024 Period 1</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Teaching form: <span style={{ fontSize: 15, fontWeight: "normal" }}> Course, Distance</span>
                        </h4>
                      </div>
                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Course dates: <span style={{ fontSize: 15, fontWeight: "normal" }}>2 Sept - 19 Jan</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Meetings: <span style={{ fontSize: 15, fontWeight: "normal" }}>0</span>
                        </h4>
                      </div>

                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Level: <span style={{ fontSize: 15, fontWeight: "normal" }}>Master's</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Pace of study: <span style={{ fontSize: 15, fontWeight: "normal" }}>Half-time</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Language of instruction: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Instructional time: <span style={{ fontSize: 15, fontWeight: "normal" }}>GU-12053</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Application code: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Location: <span style={{ fontSize: 15, fontWeight: "normal" }}>Varied</span>
                        </h4>
                      </div>
                      <div className='bg-white mt-2' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Subject Areas: <span style={{ fontSize: 15, fontWeight: "normal" }}>Archaeology</span>
                        </h4>
                      </div>
                      <div className='bg-white'>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Read the course/programme information on the university's website.
                        </h4>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", paddingLeft: 10, display: "flex" }}>
                          <a href="/" className="under-text-line" style={{ fontSize: 15 }}>University of Gothenburg - about the course/programme </a>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </h4>
                      </div>
                    </>
                  )}
                </div>
                <div className='right-side-search' style={{ padding: 10, backgroundColor: "white" }}>
                  <div style={{ display: "flex" }}>
                    <p className="py-2 font-semibold" style={{ fontSize: "1.25rem" }} >
                      3D Data and Visualization in Archaeology and Cultural Heritage Studies
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mt-2" style={{ marginLeft: 100 }}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <p className=" font-normal" style={{ fontSize: "1rem" }} >
                    15 Credits, University of Gothenburg, Location: Varied
                  </p>
                  <p className="font-normal" style={{ fontSize: "1rem" }}>
                    <span className="orangedot" style={{ marginRight: "0.5rem" }}></span>
                    <span>Will open for late application 15 July 2024</span>
                  </p>
                  <button
                    className="py-2 font-semibold hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm p-5 text-gray-700 mt-5"
                    style={{
                      fontSize: 15,
                      order: 2,
                      marginBottom: 10,
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #000', // Add border style
                      padding: '10px', // Adjust padding for better appearance
                    }}
                    onClick={toggleMore}
                  >
                    {showMore ? "Show less" : "Show more"}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {showMore && (
                    <>
                      <div className='bg-gray-100 mt-5'>
                        <h4 className=" font-semibold text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Tuition fee
                        </h4>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", paddingLeft: 10, }}>
                          First tuition fee instalment: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Total tuition fee: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          *EU/EEA Citizens are not required to pay fees
                        </p>
                      </div>
                      <div className='bg-white mt-5' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Period: <span style={{ fontSize: 15, fontWeight: "normal" }}>Autumn 2024 Period 1</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Teaching form: <span style={{ fontSize: 15, fontWeight: "normal" }}> Course, Distance</span>
                        </h4>
                      </div>
                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Course dates: <span style={{ fontSize: 15, fontWeight: "normal" }}>2 Sept - 19 Jan</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Meetings: <span style={{ fontSize: 15, fontWeight: "normal" }}>0</span>
                        </h4>
                      </div>

                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Level: <span style={{ fontSize: 15, fontWeight: "normal" }}>Master's</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Pace of study: <span style={{ fontSize: 15, fontWeight: "normal" }}>Half-time</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Language of instruction: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Instructional time: <span style={{ fontSize: 15, fontWeight: "normal" }}>GU-12053</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Application code: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Location: <span style={{ fontSize: 15, fontWeight: "normal" }}>Varied</span>
                        </h4>
                      </div>
                      <div className='bg-white mt-2' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Subject Areas: <span style={{ fontSize: 15, fontWeight: "normal" }}>Archaeology</span>
                        </h4>
                      </div>
                      <div className='bg-white'>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Read the course/programme information on the university's website.
                        </h4>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", paddingLeft: 10, display: "flex" }}>
                          <a href="/" className="under-text-line" style={{ fontSize: 15 }}>University of Gothenburg - about the course/programme </a>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </h4>
                      </div>
                    </>
                  )}
                </div>
                <div className='right-side-search mb-5' style={{ padding: 10, backgroundColor: "white", }}>
                  <div style={{ display: "flex" }}>
                    <p className="py-2 font-semibold" style={{ fontSize: "1.25rem" }} >
                      3D Data and Visualization in Archaeology and Cultural Heritage Studies
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mt-2" style={{ marginLeft: 100 }}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <p className=" font-normal" style={{ fontSize: "1rem" }} >
                    15 Credits, University of Gothenburg, Location: Varied
                  </p>
                  <p className="font-normal" style={{ fontSize: "1rem" }}>
                    <span className="orangedot" style={{ marginRight: "0.5rem" }}></span>
                    <span>Will open for late application 15 July 2024</span>
                  </p>
                  <button
                    className="py-2 font-semibold hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm p-5 text-gray-700 mt-5"
                    style={{
                      fontSize: 15,
                      order: 2,
                      marginBottom: 10,
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #000', // Add border style
                      padding: '10px', // Adjust padding for better appearance
                    }}
                    onClick={toggleMore}
                  >
                    {showMore ? "Show less" : "Show more"}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {showMore && (
                    <>
                      <div className='bg-gray-100 mt-5'>
                        <h4 className=" font-semibold text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Tuition fee
                        </h4>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", paddingLeft: 10, }}>
                          First tuition fee instalment: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Total tuition fee: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          *EU/EEA Citizens are not required to pay fees
                        </p>
                      </div>
                      <div className='bg-white mt-5' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Period: <span style={{ fontSize: 15, fontWeight: "normal" }}>Autumn 2024 Period 1</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Teaching form: <span style={{ fontSize: 15, fontWeight: "normal" }}> Course, Distance</span>
                        </h4>
                      </div>
                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Course dates: <span style={{ fontSize: 15, fontWeight: "normal" }}>2 Sept - 19 Jan</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Meetings: <span style={{ fontSize: 15, fontWeight: "normal" }}>0</span>
                        </h4>
                      </div>

                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Level: <span style={{ fontSize: 15, fontWeight: "normal" }}>Master's</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Pace of study: <span style={{ fontSize: 15, fontWeight: "normal" }}>Half-time</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Language of instruction: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Instructional time: <span style={{ fontSize: 15, fontWeight: "normal" }}>GU-12053</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Application code: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Location: <span style={{ fontSize: 15, fontWeight: "normal" }}>Varied</span>
                        </h4>
                      </div>
                      <div className='bg-white mt-2' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Subject Areas: <span style={{ fontSize: 15, fontWeight: "normal" }}>Archaeology</span>
                        </h4>
                      </div>
                      <div className='bg-white'>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Read the course/programme information on the university's website.
                        </h4>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", paddingLeft: 10, display: "flex" }}>
                          <a href="/" className="under-text-line" style={{ fontSize: 15 }}>University of Gothenburg - about the course/programme </a>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </h4>
                      </div>
                    </>
                  )}
                </div>
                <div className='right-side-search' style={{ padding: 10, backgroundColor: "white" }}>
                  <div style={{ display: "flex" }}>
                    <p className="py-2 font-semibold" style={{ fontSize: "1.25rem" }} >
                      3D Data and Visualization in Archaeology and Cultural Heritage Studies
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mt-2" style={{ marginLeft: 100 }}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <p className=" font-normal" style={{ fontSize: "1rem" }} >
                    15 Credits, University of Gothenburg, Location: Varied
                  </p>
                  <p className="font-normal" style={{ fontSize: "1rem" }}>
                    <span className="orangedot" style={{ marginRight: "0.5rem" }}></span>
                    <span>Will open for late application 15 July 2024</span>
                  </p>
                  <button
                    className="py-2 font-semibold hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm p-5 text-gray-700 mt-5"
                    style={{
                      fontSize: 15,
                      order: 2,
                      marginBottom: 10,
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #000', // Add border style
                      padding: '10px', // Adjust padding for better appearance
                    }}
                    onClick={toggleMore}
                  >
                    {showMore ? "Show less" : "Show more"}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {showMore && (
                    <>
                      <div className='bg-gray-100 mt-5'>
                        <h4 className=" font-semibold text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Tuition fee
                        </h4>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", paddingLeft: 10, }}>
                          First tuition fee instalment: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Total tuition fee: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          *EU/EEA Citizens are not required to pay fees
                        </p>
                      </div>
                      <div className='bg-white mt-5' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Period: <span style={{ fontSize: 15, fontWeight: "normal" }}>Autumn 2024 Period 1</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Teaching form: <span style={{ fontSize: 15, fontWeight: "normal" }}> Course, Distance</span>
                        </h4>
                      </div>
                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Course dates: <span style={{ fontSize: 15, fontWeight: "normal" }}>2 Sept - 19 Jan</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Meetings: <span style={{ fontSize: 15, fontWeight: "normal" }}>0</span>
                        </h4>
                      </div>

                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Level: <span style={{ fontSize: 15, fontWeight: "normal" }}>Master's</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Pace of study: <span style={{ fontSize: 15, fontWeight: "normal" }}>Half-time</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Language of instruction: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Instructional time: <span style={{ fontSize: 15, fontWeight: "normal" }}>GU-12053</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Application code: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Location: <span style={{ fontSize: 15, fontWeight: "normal" }}>Varied</span>
                        </h4>
                      </div>
                      <div className='bg-white mt-2' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Subject Areas: <span style={{ fontSize: 15, fontWeight: "normal" }}>Archaeology</span>
                        </h4>
                      </div>
                      <div className='bg-white'>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Read the course/programme information on the university's website.
                        </h4>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", paddingLeft: 10, display: "flex" }}>
                          <a href="/" className="under-text-line" style={{ fontSize: 15 }}>University of Gothenburg - about the course/programme </a>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </h4>
                      </div>
                    </>
                  )}
                </div>
                <div className='right-side-search' style={{ padding: 10, backgroundColor: "white" }}>
                  <div style={{ display: "flex" }}>
                    <p className="py-2 font-semibold" style={{ fontSize: "1.25rem" }} >
                      3D Data and Visualization in Archaeology and Cultural Heritage Studies
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mt-2" style={{ marginLeft: 100 }}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <p className=" font-normal" style={{ fontSize: "1rem" }} >
                    15 Credits, University of Gothenburg, Location: Varied
                  </p>
                  <p className="font-normal" style={{ fontSize: "1rem" }}>
                    <span className="orangedot" style={{ marginRight: "0.5rem" }}></span>
                    <span>Will open for late application 15 July 2024</span>
                  </p>
                  <button
                    className="py-2 font-semibold hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm p-5 text-gray-700 mt-5"
                    style={{
                      fontSize: 15,
                      order: 2,
                      marginBottom: 10,
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #000', // Add border style
                      padding: '10px', // Adjust padding for better appearance
                    }}
                    onClick={toggleMore}
                  >
                    {showMore ? "Show less" : "Show more"}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {showMore && (
                    <>
                      <div className='bg-gray-100 mt-5'>
                        <h4 className=" font-semibold text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Tuition fee
                        </h4>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", paddingLeft: 10, }}>
                          First tuition fee instalment: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Total tuition fee: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          *EU/EEA Citizens are not required to pay fees
                        </p>
                      </div>
                      <div className='bg-white mt-5' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Period: <span style={{ fontSize: 15, fontWeight: "normal" }}>Autumn 2024 Period 1</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Teaching form: <span style={{ fontSize: 15, fontWeight: "normal" }}> Course, Distance</span>
                        </h4>
                      </div>
                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Course dates: <span style={{ fontSize: 15, fontWeight: "normal" }}>2 Sept - 19 Jan</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Meetings: <span style={{ fontSize: 15, fontWeight: "normal" }}>0</span>
                        </h4>
                      </div>

                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Level: <span style={{ fontSize: 15, fontWeight: "normal" }}>Master's</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Pace of study: <span style={{ fontSize: 15, fontWeight: "normal" }}>Half-time</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Language of instruction: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Instructional time: <span style={{ fontSize: 15, fontWeight: "normal" }}>GU-12053</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Application code: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Location: <span style={{ fontSize: 15, fontWeight: "normal" }}>Varied</span>
                        </h4>
                      </div>
                      <div className='bg-white mt-2' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Subject Areas: <span style={{ fontSize: 15, fontWeight: "normal" }}>Archaeology</span>
                        </h4>
                      </div>
                      <div className='bg-white'>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Read the course/programme information on the university's website.
                        </h4>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", paddingLeft: 10, display: "flex" }}>
                          <a href="/" className="under-text-line" style={{ fontSize: 15 }}>University of Gothenburg - about the course/programme </a>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </h4>
                      </div>
                    </>
                  )}
                </div>
                <div className='right-side-search' style={{ padding: 10, backgroundColor: "white" }}>
                  <div style={{ display: "flex" }}>
                    <p className="py-2 font-semibold" style={{ fontSize: "1.25rem" }} >
                      3D Data and Visualization in Archaeology and Cultural Heritage Studies
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mt-2" style={{ marginLeft: 100 }}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <p className=" font-normal" style={{ fontSize: "1rem" }} >
                    15 Credits, University of Gothenburg, Location: Varied
                  </p>
                  <p className="font-normal" style={{ fontSize: "1rem" }}>
                    <span className="orangedot" style={{ marginRight: "0.5rem" }}></span>
                    <span>Will open for late application 15 July 2024</span>
                  </p>
                  <button
                    className="py-2 font-semibold hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm p-5 text-gray-700 mt-5"
                    style={{
                      fontSize: 15,
                      order: 2,
                      marginBottom: 10,
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #000', // Add border style
                      padding: '10px', // Adjust padding for better appearance
                    }}
                    onClick={toggleMore}
                  >
                    {showMore ? "Show less" : "Show more"}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {showMore && (
                    <>
                      <div className='bg-gray-100 mt-5'>
                        <h4 className=" font-semibold text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Tuition fee
                        </h4>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", paddingLeft: 10, }}>
                          First tuition fee instalment: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Total tuition fee: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          *EU/EEA Citizens are not required to pay fees
                        </p>
                      </div>
                      <div className='bg-white mt-5' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Period: <span style={{ fontSize: 15, fontWeight: "normal" }}>Autumn 2024 Period 1</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Teaching form: <span style={{ fontSize: 15, fontWeight: "normal" }}> Course, Distance</span>
                        </h4>
                      </div>
                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Course dates: <span style={{ fontSize: 15, fontWeight: "normal" }}>2 Sept - 19 Jan</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Meetings: <span style={{ fontSize: 15, fontWeight: "normal" }}>0</span>
                        </h4>
                      </div>

                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Level: <span style={{ fontSize: 15, fontWeight: "normal" }}>Master's</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Pace of study: <span style={{ fontSize: 15, fontWeight: "normal" }}>Half-time</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Language of instruction: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Instructional time: <span style={{ fontSize: 15, fontWeight: "normal" }}>GU-12053</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Application code: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Location: <span style={{ fontSize: 15, fontWeight: "normal" }}>Varied</span>
                        </h4>
                      </div>
                      <div className='bg-white mt-2' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Subject Areas: <span style={{ fontSize: 15, fontWeight: "normal" }}>Archaeology</span>
                        </h4>
                      </div>
                      <div className='bg-white'>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Read the course/programme information on the university's website.
                        </h4>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", paddingLeft: 10, display: "flex" }}>
                          <a href="/" className="under-text-line" style={{ fontSize: 15 }}>University of Gothenburg - about the course/programme </a>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </h4>
                      </div>
                    </>
                  )}
                </div>


              </>
            )}
            {showContent === 'course' && (
              <>
                <div className='right-side-search' style={{ padding: 10, backgroundColor: "white" }}>
                  <div style={{ display: "flex" }}>
                    <p className="py-2 font-semibold" style={{ fontSize: "1.25rem" }} >
                      Course and Visualization in Archaeology and Cultural Heritage Studies
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mt-2" style={{ marginLeft: 100 }}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <p className=" font-normal" style={{ fontSize: "1rem" }} >
                    15 Credits, University of Gothenburg, Location: Varied
                  </p>
                  <p className="font-normal" style={{ fontSize: "1rem" }}>
                    <span className="orangedot" style={{ marginRight: "0.5rem" }}></span>
                    <span>Will open for late application 15 July 2024</span>
                  </p>
                  <button
                    className="py-2 font-semibold hover:bg-blue-50 active:bg-blue-200 duration-150 rounded-sm p-5 text-gray-700 mt-5"
                    style={{
                      fontSize: 15,
                      order: 2,
                      marginBottom: 10,
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #000', // Add border style
                      padding: '10px', // Adjust padding for better appearance
                    }}
                    onClick={toggleMore}
                  >
                    {showMore ? "Show less" : "Show more"}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {showMore && (
                    <>
                      <div className='bg-gray-100 mt-5'>
                        <h4 className=" font-semibold text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Tuition fee
                        </h4>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", paddingLeft: 10, }}>
                          First tuition fee instalment: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          Total tuition fee: 23,000 SEK*
                        </p>
                        <p className="font-normal text-gray-700" style={{ fontSize: "1rem", padding: 10, paddingBottom: 15, }}>
                          *EU/EEA Citizens are not required to pay fees
                        </p>
                      </div>
                      <div className='bg-white mt-5' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Period: <span style={{ fontSize: 15, fontWeight: "normal" }}>Autumn 2024 Period 1</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Teaching form: <span style={{ fontSize: 15, fontWeight: "normal" }}> Course, Distance</span>
                        </h4>
                      </div>
                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Course dates: <span style={{ fontSize: 15, fontWeight: "normal" }}>2 Sept - 19 Jan</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Meetings: <span style={{ fontSize: 15, fontWeight: "normal" }}>0</span>
                        </h4>
                      </div>

                      <div className='bg-white' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Level: <span style={{ fontSize: 15, fontWeight: "normal" }}>Master's</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Pace of study: <span style={{ fontSize: 15, fontWeight: "normal" }}>Half-time</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Language of instruction: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Instructional time: <span style={{ fontSize: 15, fontWeight: "normal" }}>GU-12053</span>
                        </h4>
                      </div>
                      <div className='bg-white ' style={{ display: "flex", marginTop: -10 }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Application code: <span style={{ fontSize: 15, fontWeight: "normal" }}>English</span>
                        </h4>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Location: <span style={{ fontSize: 15, fontWeight: "normal" }}>Varied</span>
                        </h4>
                      </div>
                      <div className='bg-white mt-2' style={{ display: "flex" }}>
                        <h4 className=" font-bold text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Subject Areas: <span style={{ fontSize: 15, fontWeight: "normal" }}>Archaeology</span>
                        </h4>
                      </div>
                      <div className='bg-white'>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", padding: 10, }}>
                          Read the course/programme information on the university's website.
                        </h4>
                        <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", paddingLeft: 10, display: "flex" }}>
                          <a href="/" className="under-text-line" style={{ fontSize: 15 }}>University of Gothenburg - about the course/programme </a>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 under-text-line ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </h4>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
            {showContent === 'program' && (
              <>

                <div className='right-side-search' style={{ padding: 10, backgroundColor: "white" }}>
                  <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
                    <img src={search_men} alt="search-men" width={250} height={250} />
                  </div>
                  <div className="text-center p-5">
                    <h3 className="py-2 font-semibold" style={{ fontSize: "1rem" }} >
                      Your search criteria didn't match any courses or programmes
                    </h3>
                    <p className="py-2 font-normal mb-5" style={{ fontSize: "1rem" }} >
                      Are you currently enrolled in a programme? Try logging in to find the courses you can apply for.
                    </p>
                    <Link to={"/login"}>
                      <h4 className=" font-normal text-gray-900" style={{ fontSize: "1rem", }}>
                        <a href="/" className="under-text-line" style={{ fontSize: 15 }}>Log in</a>
                      </h4>
                    </Link>
                  </div>
                </div>

              </>
            )}
          </div>

        </div>
      </div >
    </>
  )
}

