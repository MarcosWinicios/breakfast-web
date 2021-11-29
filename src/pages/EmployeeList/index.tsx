import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeItem from "../../components/EmployeeItem";
import { BASE_URL } from "../../services/request";
import { EmployeePage } from "../../types/employee";
import "./styles.css";

interface Item {
    id: number;
    name: string;
}
interface Employee {
    id: number;
    name: string;
    cpf: string;
    items: Item[];
}
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