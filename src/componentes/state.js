import { useRef, useState } from "react"
import Nomes from "./nomes"

function State(){
    const [nome, setNome] = useState("123")
    const [nomes, setNomes] = useState(['teste'])
    const nomeRef = useRef(null)

function adicionaNome(){
    if(nome==''){
        alert("O nome deve ser informado")
        nomeRef.current.focus()
        return
    }
    setNomes([...nomes, nome])
    setNome("")
}

function removeNome(){
    setNomes(nomes.filter(n => n !== nome))
    setNome("")
}

    return(
        <div className="container mt-5">
            <input type="text" value={nome} 
            onChange={(e) => setNome(e.target.value)}
            ref={nomeRef}
            />
            <button className="m-2" onClick={adicionaNome}>Adicionar</button>
            <button className="m-2" onClick={removeNome}>Remover</button>
            <hr />
            <Nomes nomes={nomes} />

        </div>
        
    )
}

export default State