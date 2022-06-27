import Layout from "../componentes/Layout"
import Tabela from "../componentes/Tabela";
import Cliente from "../core/Cliente";

export default function Home(){


  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Breno', 45, '2'),
    new Cliente('Julio', 24, '3'),
    new Cliente('Juliete', 34, '4')

  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)

  }
  function clienteExcluido(cliente: Cliente) {

    console.log(cliente.nome)
  }

  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}
         clienteSelecionado={clienteSelecionado}
         clienteExcluido={clienteExcluido}
         />
         
      </Layout>
    </div>
  );
}