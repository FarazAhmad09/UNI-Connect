import React from 'react';
import Overview from '../Components/Overview';
import Faq from '../Components/Faq';
import Blog from '../Components/Blog';
import Navbar from '../Components/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <Overview />
            <Faq />
            <Blog />
        </>
    )
}
