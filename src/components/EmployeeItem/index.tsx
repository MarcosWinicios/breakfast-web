import { useState } from "react";
import "./styles.css"

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

interface EmployeeProps {
    employee: Employee
}
const EmployeeItem = ({ employee }: EmployeeProps) => {

    return (
        <>
            <section className="employeeContainer">
                <div className="personalDataEmployee">
                    <h3>{employee.name}</h3>

                    <div className="field">
                        <label htmlFor="cpf">
                            CPF:
                        </label>
                        <p id="cpf">{employee.cpf}</p>
                    </div>
                </div>
                <h4>Itens para o café da manhã: </h4>
                <div className="itemsContainer">
                    {employee.items.map(item => (
                        <span className="tag">
                            <p key={item.id}>
                                {item.name}
                            </p>
                        </span>
                    ))}
                </div>
            </section >

        </>
    );
}

export default EmployeeItem;