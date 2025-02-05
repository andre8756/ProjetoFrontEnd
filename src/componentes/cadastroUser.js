import Botao from "./botao";

function CadastroUser(){
    return(
        <div>
            <h2 className="text-center m-4">Novo Usuario</h2>
            <form className="container">
                <label className="control-form">Informe nome: </label>
                <input className="form-control mb-2" type="text" placeholder="Informe nome"/>

                <label>Informe email: </label>
                <input className="form-control mb-2" type="email" placeholder="Informe email"/>

                <label>Informe fone: </label>
                <input className="form-control" type="tel" placeholder="Informe telefone"/>

                <div className="mt-4 d-flex justify-content-between">
                    <Botao label="gravar"/>
                    <Botao label="Cancelar"/>
                </div>
            </form>
        </div>
    )
}

export default CadastroUser