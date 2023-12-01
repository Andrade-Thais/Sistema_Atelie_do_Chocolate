import React from 'react';
import {Link} from 'react-router-dom';
import './listacliente.css';

function ListaClientes(props){
    
    return <table className="table table-hover table-bordered">
            <thead>
            <tr className="table-secondary table">
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
                <th scope="col">CEP</th>
                <th scope="col">Número</th>
                <th scope="col" className="col-acao">Ações</th>
            </tr>
            </thead>
            <tbody>

            {
                props.arrayClientes.map((cliente) => {
                    return <tr key={cliente.id}>
                    <th scope="row">{cliente.id}</th>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                        <td>{cliente.telefone}</td>
                        <td>{cliente.cep}</td>
                        <td>{cliente.numero}</td>
                    <td>
                        <Link to={'/app/admin/editarcliente/' + cliente.id}><i className="fas fa-edit icone-acao"></i></Link>
                        <Link to='#' onClick={() => props.clickDelete(cliente.id)}><i className="far fa-trash-alt icone-acao red"></i></Link>
                    </td>
                </tr>
                })
            }
                       
            
            </tbody>
        </table>
}

export default ListaClientes;