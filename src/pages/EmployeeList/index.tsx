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
            <h1>Lista de Colaboradores</h1>
            <Link to="/employeeRegistration">
                Cadastrar Colaborador
            </Link>
            <ul>
                {page.content?.map(employee => (
                    <li key={employee.id} >
                        <EmployeeItem employee={employee} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default EmployeeList;