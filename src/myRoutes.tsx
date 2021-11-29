import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import EmployeeRegistration from "./pages/EmployeeRegistration";
import ItemRegistration from "./pages/ItemRegistration";

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="*" element={<EmployeeList />} />
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/itemRegistration/:id" element={<ItemRegistration />} />
                    <Route path="/employeeRegistration" element={<EmployeeRegistration />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default MyRoutes;
