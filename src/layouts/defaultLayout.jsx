import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default DefaultLayout
