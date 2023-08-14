import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { ServicesCompany } from '../pages/ServicesCompany/ServicesCompany';
import { Contact } from '../pages/Contact/Contact';

function Router () {
        const Local = localStorage.getItem("powerstartenergy");
        const userLocal = JSON.parse(Local)

        function PrivateRoute({children} ) {
                return userLocal !== null || userLocal?.type === "client" ? children : <Navigate to="/"/>
            }

    return (
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/quemsomos" element={<About />}/>
            <Route path="/contato" element={<Contact />}/>
            <Route path="/servicos" element={<ServicesCompany />}/>
            <Route path="/processos" element={""}/>

            <Route path="/"
                    element={ <PrivateRoute> <Home /></PrivateRoute>} />


            </Routes>
           
    )
}

export {Router}