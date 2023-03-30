import React from 'react'

const CustomCheckbox = ({ array, onHandleChange, checked, setChecked }) => {
    return (
        <div style={{ marginTop: 10 }}>
            {array.map((data, index) =>
                <div key={index}>
                    <input type={'checkbox'} value={data} onChange={(e) => onHandleChange(e, checked, setChecked)} />
                    {/* <input type={'checkbox'} value={data} onChange={handleCityChange} /> */}
                    <label>{data}</label>
                </div>
            )}
        </div>
    )
}

export default CustomCheckbox