import { Outlet } from "react-router-dom";
import Header from "../utils/Header";
const ContextLayout = () => {
    return (
        <>
            <main >
                <div >
                    <Header />
                    <Outlet />
                </div>
            </main>

        </>
    )
}

export default ContextLayout