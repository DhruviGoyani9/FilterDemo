import './App.css';
import DynamicFilterDemo from './Pages/DynamicFilterDemo';


const App = () => {
  // const [searchInput, setSearchInput] = useState('')
  // const [filtered, setFiltered] = useState([])
  // const [city, setCity] = useState([])
  // const [category, setCategory] = useState([])
  // const [type, setType] = useState([])
  // const [active, setActive] = useState([])

  // const arr = [
  //   {
  //     "id": 1,
  //     "name": "foo",
  //     "city": "dallas",
  //     "category": "one",
  //     "type": "A",
  //     "active": "FALSE",
  //     "state": 'Gujarat',
  //     'age': '20'
  //   },
  //   {
  //     "id": 2,
  //     "name": "bar",
  //     "city": "dallas",
  //     "category": "one",
  //     "type": "B",
  //     "active": "FALSE",
  //   },
  //   {
  //     "id": 3,
  //     "name": "jim",
  //     "city": "san francisco",
  //     "category": "one",
  //     "type": "B",
  //     "active": "TRUE",
  //     "state": 'Gujarat',
  //   },
  //   {
  //     "id": 4,
  //     "name": "jane",
  //     "city": "denver",
  //     "category": "two",
  //     "type": "C",
  //     "active": "FALSE",
  //     'gender': 'female'
  //   },
  // ];


  // const removeDuplicateCity = [...new Set(arr.map((val) => val.city))]
  // const removeCategory = [...new Set(arr.map((val) => val.category))]
  // const removeType = [...new Set(arr.map((val) => val.type))]
  // const removeActive = [...new Set(arr.map((val) => val.active))]


  // // useEffect(() => {
  // //   const filtered = arr.filter(
  // //     data => data.name.toLowerCase().includes(searchInput.toLocaleLowerCase()),
  // //   );
  // //   setFiltered(filtered);
  // //   if (searchInput === '') {
  // //     return setFiltered(arr)
  // //   }
  // // }, [searchInput])

  // const onHandleChange = (event, selectedCheckBox, setSelectedCheckBox) => {
  //   let update = [...selectedCheckBox]
  //   if (event.target.checked) {
  //     update.push(event.target.value)
  //   } else {
  //     console.log('else --')
  //     update.splice(selectedCheckBox.indexOf(event.target.value), 1)
  //     console.log({ update })
  //   }
  //   console.log('yy---', update)
  //   setSelectedCheckBox(update)
  // };

  // console.log('checked', city)
  // console.log('category', category)
  // console.log('type', type)
  // console.log('active', active)
  // console.log('search', searchInput)

  // let filteredData = arr.filter((e) => city.length === 0 || city.includes(e.city))
  //   .filter((e) => category.length === 0 || category.includes(e.category))
  //   .filter((e) => type.length === 0 || type.includes(e.type))
  //   .filter((e) => active.length === 0 || active.includes(e.active))
  //   .filter((e) => e.name.toLowerCase().includes(searchInput.toLowerCase()))

  // console.log('filteredDta', filteredData)

  // const DynamicTable = () => {
  //   const column = Object.keys(arr[0]);
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j in arr[i]) {
  //       if (!column.includes(j)) {
  //         column.push(j)
  //       }
  //     }
  //   }
  //   return (
  //     <table border='1'>
  //       <thead>
  //         <tr>{column.map((data, index) => {
  //           return <th key={index}>{data}</th>
  //         })}
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {filteredData.map((data, index) => {
  //           // console.log({ data })
  //           return (
  //             <tr key={index}>
  //               {
  //                 column.map((v) => {
  //                   return <td key={v}>{data[v]}</td>
  //                 })
  //               }
  //             </tr>
  //           )
  //         })}
  //       </tbody>
  //     </table>
  //   )
  // }

  return (
    <div className="App">
      {/* <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <p>City : </p>

        <CustomCheckbox array={removeDuplicateCity} onHandleChange={onHandleChange} checked={city} setChecked={setCity} />

        <div style={{ height: 70, width: 2, backgroundColor: 'gray', margin: 10 }}></div>
        <p>Category : </p>
        <CustomCheckbox array={removeCategory} onHandleChange={onHandleChange} checked={category} setChecked={setCategory} />
        <div style={{ height: 70, width: 2, backgroundColor: 'gray', margin: 10 }}></div>
        <p>Type :</p>
        <CustomCheckbox array={removeType} onHandleChange={onHandleChange} checked={type} setChecked={setType} />
        <div style={{ height: 70, width: 2, backgroundColor: 'gray', margin: 10 }}></div>
        <p>Active :</p>
        <CustomCheckbox array={removeActive} onHandleChange={onHandleChange} checked={active} setChecked={setActive} />
        <div style={{ height: 70, width: 2, backgroundColor: 'gray', margin: 10 }}></div>
        <input type="text" placeholder='Name' onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
      </div>
      <div style={{ width: '80%', marginLeft: 100 }}>
        <DynamicTable />
      </div> */}

      <DynamicFilterDemo />
    </div>
  );
}

export default App;
