import { useEffect, useState } from "react";
import EmployeeItem from "../../components/EmployeeItem";
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


    return (
        <>
            <EmployeeItem employee={novoEmployee2} />
            <EmployeeItem employee={novoEmployee} />
            <EmployeeItem employee={novoEmployee} />
            <EmployeeItem employee={novoEmployee} />
            <EmployeeItem employee={novoEmployee} />

        </>
    );
}

export default EmployeeList;