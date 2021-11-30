import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeItem from "../../components/EmployeeItem";
import { BASE_URL } from "../../services/request";
import { EmployeePage } from "../../types/employee";
import "./styles.css";

const EmployeeList = () => {
    const [page, setPage] = useState<EmployeePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/employees`).then(response => {
            setPage(response.data)
        })

    }, []);

    return (
        <>
            <main>
                <div className="list-header-cotainer">
                    <h1>Lista de Colaboradores</h1>
                </div>
                <section className="data-list-container">
                    <ul className="data-list">
                        {page.content?.map(employee => (
                            <li key={employee.id} >
                                <EmployeeItem employee={employee} />
                            </li>
                        ))}
                    </ul>
                </section>

            </main>

        </>
    );
}

export default EmployeeList;