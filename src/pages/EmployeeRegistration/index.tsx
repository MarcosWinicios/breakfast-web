import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";

import api from "../../services/api";

import "./styles.css";

const EmployeeRegistration = () => {
    const [employeeName, setEmployeeName] = useState("");
    const [employeeCpf, setEmployeeCpf] = useState("");
    const navigate = useNavigate();

    async function employeeRegistration(e: FormEvent) {
        e.preventDefault();
        await api.post("employees", {
            name: employeeName,
            cpf: employeeCpf
        }).then(() => {
            alert("Cadastro realizado com sucesso");
            navigate("/employees")
        }).catch(() => {
            alert("Erro ao cadastar");
        });
    }
    return (
        <>
            <h1>Cadastrar Colaborador</h1>
            <section className="form-container form-page">
                <form onSubmit={employeeRegistration}>
                    <div className="input-block">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={employeeName}
                            onChange={(e) => (setEmployeeName(e.target.value))}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            required
                            value={employeeCpf}
                            onChange={(e) => (setEmployeeCpf(e.target.value))}
                        />
                    </div>
                    <div className="buttons-container">
                        <button type="submit" className="btn">
                            Cadastrar
                        </button>
                        <button
                            onClick={() => navigate("/employees")}
                            className="btn cancel"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
export default EmployeeRegistration;