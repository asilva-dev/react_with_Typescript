import React from "react"
import Button from "./Button";
import Input from "./Input";
// import Checkbox from "./Checkbox";

function user(){
  return {
    nome:  'Amanda',
    profissao: 'Software engineer'
  }
}

type User = {
  nome: string;
  profissao: string;
}

type Venda = {
  id: string;
  nome: string;
  status: string;
}

function App() {
  const [total, setTotal] = React.useState(0);
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  const [data, setData ] = React.useState<null | Venda[]>(null);

  React.useEffect(() => {
    if(inicio !== '' && final !== '')
    fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
    .then((r) => r.json())
    .then((json) => setData(json as Venda[]))
    .catch((error) => console.log(error))
  },[inicio, final])
  return (
    <>
      <div>
        <p>
        Total : {total}
        </p>  
        <Button incrementar={setTotal}/>   
      </div>
      <div>
        <Input label="Início" type="date" setState={setInicio} value={inicio} />
        <Input label="Final" type="date" setState={setFinal} value={final} />
      </div>
      <ul >
       {data && 
        data.map((venda) => (
          <li key={venda.id} >
            {venda.nome}: {venda.status}
          </li>
        ))
       }
      </ul>
    </>
  )
}

export default App
