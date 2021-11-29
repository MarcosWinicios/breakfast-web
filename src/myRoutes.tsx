import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/employees" element={<EmployeeList />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default MyRoutes;
