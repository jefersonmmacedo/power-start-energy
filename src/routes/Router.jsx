import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../pages/Home/Home';

function Router () {
        const Local = localStorage.getItem("powerstartenergy");
        const userLocal = JSON.parse(Local)

        function PrivateRoute({children} ) {
                return userLocal !== null || userLocal?.type === "client" ? children : <Navigate to="/"/>
            }

    return (
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre-nos" element={""}/>
            <Route path="/contato" element={""}/>
            <Route path="/servicos" element={""}/>
            <Route path="/processos" element={""}/>

            <Route path="/"
                    element={ <PrivateRoute> <Home /></PrivateRoute>} />


            </Routes>
           
    )
}

export {Router}