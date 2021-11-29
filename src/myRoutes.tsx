import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import EmployeeList from "./pages/EmployeeList";
import EmployeeRegistration from "./pages/EmployeeRegistration";

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/registration" element={<EmployeeRegistration />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default MyRoutes;
