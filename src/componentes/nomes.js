function Nomes({nomes}){
    return(
        <table class="table table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nomes</th>
            </tr>
        </thead>
        <tbody>
           {nomes.map((nome, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{nome}</td>
                </tr>
           ))}
        </tbody>
    </table>
        
    )
}

export default Nomes