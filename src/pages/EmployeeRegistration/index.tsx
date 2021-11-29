import axios from "axios";
import { FormEvent, useState } from "react";
import api from "../../services/api";
import "./styles.css";

const EmployeeRegistration = () => {
    const [employeeName, setEmployeeName] = useState("");
    const [employeeCpf, setEmployeeCpf] = useState("");

    function employeeRegistration(e: FormEvent) {
        e.preventDefault();
        console.log(employeeName + ":" + typeof employeeName);
        console.log(employeeCpf + ":" + typeof employeeCpf);
        api.post("employees", {
            name: employeeName,
            cpf: employeeCpf
        }).then(() => {
            alert("Cadastro realizado com sucesso")
        }).catch(() => {
            alert("Erro ao cadastar");
        });


    }
    return (
        <>
            <h1>Cadastrar Colaborador</h1>

            <section>
                <form onSubmit={employeeRegistration}>
                    <div className="input-block">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={employeeName}
                            onChange={(e) => (setEmployeeName(e.target.value))}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            value={employeeCpf}
                            onChange={(e) => (setEmployeeCpf(e.target.value))}
                        />
                    </div>
                    <div className="input-block button-container">
                        <input type="submit" id="name" value="Cadastrar" />
                    </div>


                </form>
            </section>
        </>

    );
}
export default EmployeeRegistration;