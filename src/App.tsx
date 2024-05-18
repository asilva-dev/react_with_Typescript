import React from "react"
import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";

function App() {
  const [total, setTotal] = React.useState(0);
  const [data, setData] = React.useState("");

  function incrementar() {
    setTotal((total) => total + 1);
  }
  
  return (
    <>
      <p>Total: {total}</p>
      <Button onClick={incrementar} tamanho="1.25rem">
        Incrementar
      </Button>
      <p>Inicio da viagem: {data}</p>
      <Input id="email" label="Email" type="email" />
      <Input id="nome" label="Nome" />
      <Input 
        value={data} 
        id="inicio" 
        onChange={(event) =>  setData(event.currentTarget.value)}
        label="Inicio da viagem" 
        type="date"
      />
      <Input id="horario" label="Horario" type="time" />
      <Checkbox label="Termos e condições" /> 
    </>
   
  )
}

export default App
