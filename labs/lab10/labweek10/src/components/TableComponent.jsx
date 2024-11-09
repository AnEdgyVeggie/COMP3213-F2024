import { useState } from "react"
import "./TableComponent.css"

const TableComponent = ({ userInformation }) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Email: </td>
                        <td>{userInformation.email}</td>
                    </tr>
                    <tr>
                        <td>Full Name: </td>
                        <td>{userInformation.name}</td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>{userInformation.address + "   " + userInformation.address2}</td>
                    </tr>
                    <tr>
                        <td>City: </td>
                        <td>{userInformation.city}</td>
                    </tr>
                    <tr>
                        <td>Province: </td>
                        <td>{userInformation.province}</td>
                    </tr>
                    <tr>
                        <td>Postal Code: </td>
                        <td>{userInformation.postalCode}</td>
                    </tr>
                </tbody>
            </table>
        
        </div>
    )
}

export default TableComponent
