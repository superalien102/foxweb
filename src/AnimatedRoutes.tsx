import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from './containers/Homepage';
import ErrorPage from './containers/ErrorPage';
import Events from './containers/Events/Events';
import NightTrip from './containers/Events/NightTrip';
import AnimalShow from './containers/Events/AnimalShow';
import CloseUp from './containers/Events/CloseUp';
import Discover from './containers/Discover/Discover';
import Animals from './containers/Discover/Animals';
import PoultryYard from './containers/Discover/PoultryYard';
import FoxForest from './containers/Discover/FoxForest';
import ThankYou from './components/ThankYou';

const AnimatedRoutes = () => {

    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]); // do this on route change

    return (
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/events' element={<Events />} />
                <Route path='/events/night-trip' element={<NightTrip />} />
                <Route path='/events/animal-show' element={<AnimalShow />} />
                <Route path='/events/close-up' element={<CloseUp />} />
                <Route path='/discover' element={<Discover />} />
                <Route path='/discover/animals' element={<Animals />} />
                <Route path='/discover/poultry-yard' element={<PoultryYard title='Fox Village Of Zsámbék - Our lovely poultry yard' />} />
                <Route path='/discover/fox-forest' element={<FoxForest />} />
                <Route path='/thankyou' element={<ThankYou />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes