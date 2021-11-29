import { FormEvent, useState } from "react";
import api from "../../services/api";
import { Employee } from "../../types/employee";



interface propsPopup {
    id: number,
    itemName: string,
    employee: Employee,
    closePopup: Function
}
const ItemPopup = ({ id, itemName, employee, closePopup }: propsPopup) => {
    const [newName, setNewName] = useState(itemName);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await api.put(`items/${id}`, {
            name: newName,
            employee: {
                id: employee.id
            }
        }
        ).then(() => {
            closePopup(false);
            alert("Alteração realizada com sucesso")
            window.location.reload();
        }).catch(() => {
            alert("Não possível realizar esta operação")
        })
    }

    return (

        <div className="form-popup" id="myForm">
            <form onSubmit={handleSubmit} className="form-container">
                <h1>Editar Item: {itemName}</h1>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={itemName}
                    onChange={(event) => (setNewName(event.target.value))}
                    required
                />

                <button
                    type="submit"
                    className="btn"
                >
                    Salvar
                </button>
                <button
                    type="button"
                    className="btn cancel"
                    onClick={() => closePopup(false)}
                >
                    Cancelar
                </button>
            </form>
        </div>
    );
}

export default ItemPopup;