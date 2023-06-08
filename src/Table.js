/**
 * Table.js
 * 
 * This table shows a simple list of students
 */

import React, { Component } from "react";

/**
 * write the table header
 * @returns 
 */
function Header() {
    return (
        <thead>
            <tr>
                <th>Matricula</th>
                <th>Tipo</th>
                <th>Cor</th>
                <th>Marca</th>
                <th>Proprietario</th>
                <th>Photo</th>
                <th></th>
            </tr>
        </thead>
    )
}

/**
 * write the table body
 * @param {*} props : the data to be writed: a list of students
 * @returns 
 */
const Body = (props) => {
    // we are building each table row, with the data we receive
    // <=> foreach()
    const rows = props.dataTableIN.map((row) => {
        return (
            <tr key={row.id}>
                <td>{row.matricula}</td>
                <td>{row.marca}</td>
                <td>{row.tipo}</td>
                <td>{row.cor}</td>
                <td>{row.proprietario}</td>
                <td><img src={'Animals/' + row.photo}
                    alt={'photo of ' + row.name}
                    title={row.name}
                    height="50" />
                </td>
                <td>
                    <button className="btn btn-outline-danger"
                            onClick={() => props.carroToBeDeletedOUT(row.id)}
                    >Delete</button>
                </td>
            </tr>
        )
    })

    // we return the body of table, with the 'rows' defined up
    return <tbody>{rows}</tbody>
}


/**
 * the code of component Table
 */
class Table extends Component {
    render() {
        // 'read' data that was supplied to component 'Table'
        const { carrosDataIN, deleteCarroOUT } = this.props

        return (
            <table className="table table-striped table-sucess">
                <Header />
                <Body dataTableIN={carrosDataIN} carroToBeDeletedOUT={deleteCarroOUT} />
                {/*        <-----------                      --------------->*/}
            </table>
        )
    }
}

export default Table;
