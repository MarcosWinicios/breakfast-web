import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../../services/api";

const ItemRegistration = () => {
    const [itemName, setItemName] = useState("");
    const [employeeName, setEmployeeName] = useState();
    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        api.get(`employees/${id}`).then((response) => {
            const { name } = response.data;
            setEmployeeName(name)
        })
    }, [])

    async function itemRegistration(e: FormEvent) {
        e.preventDefault();
        console.log({
            itemName,
            employee: {
                id: id
            }
        })
        await api.post("items", {
            itemName,
            employee: {
                id: id
            }
        }).then(() => {
            alert("Item cadastrado com sucesso");
            navigate("/employees")
        }).catch(() => {
            alert("Erro ao cadastar Item");
        });
    }
    return (
        <>
            <main>

                <section className="form-container form-page">
                    <h1>Cadastrar Item para {employeeName}</h1>
                    <form onSubmit={itemRegistration}>
                        <div className="input-block">
                            <label htmlFor="name">Nome:</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={itemName}
                                onChange={(e) => (setItemName(e.target.value))}
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
            </main>
        </>
    );
}

export default ItemRegistration;