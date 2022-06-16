import React from 'react'
import { Route, Routes } from 'react-router-dom';
import DetailMobilePage from './pages/detailMobile';
import MainMobilePage from './pages/main';

const Mobile = (props) => {


    return (
        <>

            <Routes>
                <Route path="/" element={<MainMobilePage />} />
                <Route path="/:id" element={<DetailMobilePage />} />
                <Route path="/detailMobile" element={<DetailMobilePage />} />
            </Routes>
            
        </>

    )
}

export default Mobile
