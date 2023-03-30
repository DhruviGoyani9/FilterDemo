import React, { useEffect, useState } from 'react'
import DynamicCheckBox from '../component/DynamicCheckBox';
import DynamicTable from '../component/DynamicTable';
import { arr } from '../data/data';

const DynamicFilterDemo = () => {

    const [searchInput, setSearchInput] = useState('')
    const [title, setTitle] = useState([])
    const [checkedItems, setCheckedItems] = useState({})
    const [filteredData, setFilteredData] = useState(arr)
    const [data, setData] = useState(filteredData)

    const setCheckBoxHeading = () => {
        const column = Object.keys(arr[0]);
        for (let i = 0; i < arr.length; i++) {
            for (let j in arr[i]) {
                if (!column.includes(j)) {
                    column.push(j)
                    setTitle(column)
                }
            }
        }
    }
    if (title.length === 0) {
        setCheckBoxHeading()
    }

    console.log('checked Items = ', checkedItems)

    const onHandleChange = (event) => {
        if (event.target.checked) {
            const filter = checkedItems
            if (filter[event.target.name] === undefined) {
                filter[event.target.name] = []
            }

            if (filter[event.target.name] !== undefined) {
                filter[event.target.name].push(event.target.value)
            }
            console.log("filter -----> ", filter);
            setCheckedItems(filter)
        }
        else {
            const filter = checkedItems
            console.log('index of --> ', filter[event.target.name].indexOf(event.target.value))
            filter[event.target.name].splice(filter[event.target.name].indexOf(event.target.value), 1)
            if (filter[event.target.name].length === 0) {
                filter[event.target.name] = []
            }
            setCheckedItems(filter)
        }

        const f = arr.filter(item => {
            return Object.keys(checkedItems).every(key => {
                console.log('key -->', key)
                console.log('che ==', checkedItems[key])
                return checkedItems[key].length === 0 || checkedItems[key].includes(item[key])
            })
        })
        setFilteredData(f)
        setData(f)
    }

    useEffect(() => {
        const filtered = filteredData.filter(
            data => data.name?.toLowerCase().includes(searchInput.toLowerCase()),
        );
        setFilteredData(filtered);
        if (searchInput === '') {
            return setFilteredData(data)
        }
    }, [searchInput])

    return (
        <div className="App">
            <DynamicCheckBox arr={arr} title={title} handleChange={onHandleChange} setSearchInput={setSearchInput} />
            <DynamicTable arr={arr} searchFilter={filteredData} />
        </div >
    )
}

export default DynamicFilterDemo