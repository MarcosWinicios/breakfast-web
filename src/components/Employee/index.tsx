import "./styles.css"
const Employee = () => {
    return (
        <>
            <section className="employeeContainer">
                <div className="personalDataEmployee">
                    <h3>Marcos Winicios</h3>

                    <div className="field">
                        <label htmlFor="cpf">
                            CPF:
                        </label>
                        <p id="cpf">111.111.111-11</p>
                    </div>
                </div>
                <h4>Itens para o café da manhã: </h4>
                <div className="itemsContainer">
                    <span className="tag">
                        <p>Pão de queijo</p>
                    </span>
                    <span className="tag">
                        <p>Chocolate</p>
                    </span>
                    <span className="tag">
                        <p>Manteiga</p>
                    </span>
                    <span className="tag">
                        <p>Leite</p>
                    </span>
                    <span className="tag">
                        <p>Coca cola</p>
                    </span>

                    <span className="tag">
                        <p>Pão de queijo</p>
                    </span>
                    <span className="tag">
                        <p>Chocolate</p>
                    </span>
                    <span className="tag">
                        <p>Manteiga</p>
                    </span>
                    <span className="tag">
                        <p>Leite</p>
                    </span>
                    <span className="tag">
                        <p>Coca cola</p>
                    </span>

                </div>
            </section >

        </>
    );
}

export default Employee;