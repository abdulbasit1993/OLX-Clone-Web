import React from 'react'
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import ImageMain from '../Components/ImageMain';
import Recommendation from '../Components/Recommendation';
import OlxApp from '../Components/OlxApp'
import Footer from '../Components/Footer'



import '../App.css'

export default function Home() {
    return (
        <div className='Home'>
            <Header />
            <Navbar />
            <ImageMain />
            <Recommendation />
            <OlxApp />
            <h2 className='text-center'>Made by: Abdul Basit Mehtab (WM1187)</h2>
            <Footer />
        </div>
    )
}
