import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeItem from "../../components/EmployeeItem";
import { BASE_URL } from "../../services/request";
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
    const [novoEmployee, setEmployee] = useState({
        id: 1,
        name: "João",
        cpf: "111.111.141.11",
        items: [
            {
                id: 1,
                name: "Pão"
            },
            {
                id: 2,
                name: "Salcicha"
            },
            {
                id: 3,
                name: "Leite"
            },
            {
                id: 4,
                name: "Café"
            },
        ]

    });
    const [novoEmployee2, setEmployee2] = useState({
        id: 2,
        name: "Pedro",
        cpf: "111.111.141-41",
        items: [
            // {
            //     id: 1,
            //     name: "Pão"
            // },
        ]

    });

    const [employeeList, setEmployeeList] = useState<Employee[]>([]);
    const [page, setPage] = useState();
    useEffect(() => {
        const response = axios.get(`${BASE_URL}/employees`);
        console.log(response)
    }, []);

    return (
        <>
            <h1>Lista de Colaboradores</h1>
            <ul>
                {employeeList.map(employee => (
                    <li key={employee.id}>
                        <EmployeeItem employee={employee} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default EmployeeList;