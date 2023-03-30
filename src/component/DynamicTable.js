import React from 'react'

const DynamicTable = ({ arr, searchFilter, }) => {
    const column = Object.keys(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        for (let j in arr[i]) {
            if (!column.includes(j)) {
                column.push(j)
            }
        }
    }
    return (
        <table border='1'>
            <thead>
                <tr>{column.map((data, index) => {
                    return <th key={index}>{data}</th>
                })}
                </tr>
            </thead>
            <tbody>
                {searchFilter.map((data, index) => {
                    return (
                        <tr key={index}>
                            {
                                column.map((v) => {
                                    return <td key={v}>{data[v]}</td>
                                })
                            }
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default DynamicTable