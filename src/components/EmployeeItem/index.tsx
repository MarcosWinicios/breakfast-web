import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Employee } from "../../types/employee";
import { Item } from "../../types/item";
import EmployeePopup from "../EmployeePopup ";
import ItemPopup from "../ItemPopup";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";

import "./styles.css";

interface EmployeeProps {
    employee: Employee
}
const EmployeeItem = ({ employee }: EmployeeProps) => {
    const [showItemPopup, setShowItemPopup] = useState(false);
    const [showEmployeePopup, setShowEmployeePopup] = useState(false);

    const [currentItem, setCurrentItem] = useState<Item>({
        id: 0,
        name: ""
    });

    function openItemPopup(item: Item) {
        setCurrentItem(item);
        setShowItemPopup(!showItemPopup);
    }

    function openEmployeePopup() {
        setShowEmployeePopup(!showEmployeePopup)
    }

    function handleDeleteItem(itemId: number) {
        api.delete(`items/${itemId}`).then(() => {
            window.location.reload();
        })
    }

    function handleDeleteEmployee() {
        api.delete(`employees/${employee.id}`).then(() => {
            window.location.reload();
        })
    }
    return (
        <>
            <section className="employee-container panel">
                <div className="personal-data-employee-container">
                    <div className="informations">
                        <h3>{employee.name}</h3>

                        <div className="informations-item-container">
                            <label htmlFor="cpf">
                                CPF:
                            </label>
                            <p id="cpf">{employee.cpf}</p>
                        </div>
                    </div>
                    <div className="employee-buttons-container">
                        <MdEdit
                            className="link-icons"
                            onClick={openEmployeePopup}
                            size={30}
                            color="gray"
                        />
                        <MdDelete
                            className="link-icons"
                            onClick={handleDeleteEmployee}
                            size={30}
                            color="red"
                        />
                    </div>
                </div>

                <h4>Itens para o café da manhã: </h4>
                <div className="items-container">
                    <ul>
                        {employee.items.map(item => (
                            <li key={item.id}>
                                <span className="tag panel">
                                    <p>
                                        {item.name}
                                    </p>
                                    <div className="tag-icons-container">
                                        <MdEdit
                                            onClick={() => openItemPopup(item)}
                                            size={20}
                                            className="link-icons"
                                            color="gray"
                                        />
                                        <MdDelete
                                            onClick={() => { handleDeleteItem(item.id) }}
                                            size={20}
                                            className="link-icons"
                                            color="red"
                                        />
                                    </div>

                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="items-icons-container">
                        <Link to={`/itemRegistration/${employee.id}`}>
                            <MdAdd
                                size={40}
                                className="link-icons"
                                color="green"
                            >

                            </MdAdd>
                        </Link>

                    </div>
                </div>

                {
                    showItemPopup && (
                        <ItemPopup
                            id={currentItem?.id}
                            itemName={currentItem?.name}
                            employee={employee}
                            closePopup={setShowItemPopup}
                        />
                    )
                }
                {
                    showEmployeePopup && (
                        <EmployeePopup
                            employee={employee}
                            closePopup={setShowEmployeePopup}
                        />
                    )
                }
            </section >
        </>
    );
}
export default EmployeeItem;