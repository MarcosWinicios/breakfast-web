import { FormEvent, useState } from "react";
import api from "../../services/api";
import { Employee } from "../../types/employee";


import "./styles.css";
interface propsPopup {
    employee: Employee,
    closePopup: Function
}
const EmployeePopup = ({ employee, closePopup }: propsPopup) => {
    const [employeeName, setEmployeeName] = useState(employee.name);
    const [employeeCpf, setEmployeeCpf] = useState(employee.cpf);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await api.put(`employees/${employee.id}`, {
            name: employeeName,
            cpf: employeeCpf
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
                <h1>Editar Colaborador: {employee.name}</h1>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={employee.name}
                    onChange={(event) => (setEmployeeName(event.target.value))}
                    required
                />
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder={employee.cpf}
                    onChange={(event) => (setEmployeeCpf(event.target.value))}
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

export default EmployeePopup;