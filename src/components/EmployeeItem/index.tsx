import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Employee } from "../../types/employee";
import { Item } from "../../types/item";
import EmployeePopup from "../EmployeePopup ";
import ItemPopup from "../ItemPopup";
import { MdDelete, MdEdit } from "react-icons/md";

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
            <section className="employee-container">
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
                            onClick={openEmployeePopup}
                            size={30}
                        />
                        <MdDelete
                            onClick={handleDeleteEmployee}
                            size={30}
                        />
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
                                <div className="tag-icons-container">
                                    <MdEdit
                                        onClick={() => openItemPopup(item)}
                                        size={20}
                                    />
                                    <MdDelete
                                        onClick={() => { handleDeleteItem(item.id) }}
                                        size={20}
                                    />
                                </div>

                            </span>
                        </>
                    ))}
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