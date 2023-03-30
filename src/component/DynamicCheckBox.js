import React from 'react'

const DynamicCheckBox = ({ title, arr, handleChange, setSearchInput }) => {
    return (
        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginTop: 20, padding: 20 }}>
            {title.slice(2).map((data, index) => {
                let arrayData = []
                return (<div style={{ padding: 20 }} key={index}>
                    <label key={data}> {data} : </label>
                    {arr.map((item, index) => {
                        if (!arrayData.includes(item[data]) && item[data]) {
                            arrayData.push(item[data])
                            return (
                                <>
                                    <div style={{ alignItems: 'flex-start', flexDirection: 'column' }} key={index}>
                                        <input type='checkbox' value={item[data]} onChange={handleChange} name={data} key={data}></input>
                                        <label key={item[data]}>{item[data]}</label>
                                    </div>
                                </>
                            )
                        }
                    })}
                    {/* <div style={{ width: 20, height: 20, marginTop: 20 }}></div> */}
                </div>)
            }
            )}
            <input type='text' placeholder='Search Name' name='name' onChange={(e) => setSearchInput(e.target.value)} style={{ marginTop: 30 }} key='name' />
        </div>
    )
}

export default DynamicCheckBox