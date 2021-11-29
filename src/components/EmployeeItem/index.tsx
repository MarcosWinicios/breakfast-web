import { useState } from "react";
import { Link } from "react-router-dom";
import { Employee } from "../../types/employee";
import { Item } from "../../types/item";
import ItemPopPup from "../ItemPopUp";

import "./styles.css";

interface EmployeeProps {
    employee: Employee
}
const EmployeeItem = ({ employee }: EmployeeProps) => {
    const [showPopup, setShowpopup] = useState(false);
    const [currentItem, setCurrentItem] = useState<Item>({
        id: 0,
        name: ""
    });

    function openPopup(item: Item) {
        setCurrentItem(item);
        setShowpopup(!showPopup);
    }

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
                        <>
                            <span className="tag" key={item.id}>
                                <p>
                                    {item.name}
                                </p>
                                <button onClick={() => openPopup(item)}>
                                    edit
                                </button>
                            </span>
                        </>
                    ))}
                </div>

                {
                    showPopup && (
                        <ItemPopPup
                            id={currentItem?.id}
                            itemName={currentItem?.name}
                            employee={employee}
                            closePopup={setShowpopup}
                        />
                    )
                }

                <div className="buttons">

                    <Link to={`/itemRegistration/${employee.id}`}>
                        Cadastrar Item
                    </Link>
                </div>
            </section >
        </>
    );
}
export default EmployeeItem;