import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Employees from './Employee.json'
const startNumber = {
    name:'',
    position:''
}

function App2() {

    const [information, setinformation] = useState({
        name:'', position:''
    })
    
    const [allInfor , setAllInfor] = useState([]);

    const onInforValueOnChange = (event) =>{
        const {name , value } = event.target;
        setinformation((prevInfor) =>{
            
            return {
                ...prevInfor,
                [name] : value
            }
        })
    }

    const onInforSubmit = (e) =>{
        e.preventDefault();
        setAllInfor((prevAllInfor) => {
            const newInfor = {...information};
            newInfor.id = Date.now().toString();
            return [ newInfor,...prevAllInfor]
        })
        setinformation(startNumber)
    }

    const inforElement = allInfor.map((data) =>{
        return(
            <div key={data.id} className='boxInformationEmployee'>
                <p>ชื่อ : {data.name}</p>
                <p>ตำแหน่ง : {data.position}</p>
            </div>
        )
    })

    const [employeesName, setEmployeesName] = useState()
    const [employeesPosition, setEmployeesPosition] = useState()
    
    const onEmpyNameValueOnChange = (event) =>{
        setEmployeesName(event.target.value)
        // console.log(event.target.value);
    }
    const onEmpyPositionValueOnChange = (event) =>{
        setEmployeesPosition(event.target.value)
        // console.log(event.target.value);
    }
    const [notFound , setNotFound] = useState(false)
    const [showName , setShowName] = useState()
    const [showNameFound , setShowNameFound] = useState()
    const [showPosition , setShowPosition] = useState('')
    const [showSalary , setShowSalary] = useState('')

    const array = []
    const arrayFound = []
    const onSubmitFind = (e) =>{
        e.preventDefault();
        // console.log(Employees.employees);
        // var result = Employees.employees.find(item => {
        // //    item.name === employeesName
        //    if (item.name === null) {
        //        setNotFound(true)
        //        return null;
        //     }else{
        //        setNotFound(false)
        //         return item.name === employeesName;
        //    }
        // });

        // if (notFound === false) {
        //     console.log(result.name);
        // }else{
        //     console.log('Not Found');
        // }
        // console.log(employeesName);
        // console.log(employeesName in Employees);
        // localStorage.removeItem('employeeNameShow')
        // localStorage.removeItem('employeeFoundNameShow')
        // console.log(Employees.employees);
        // var result = Employees.employees.find(item => item.position === employeesName);
        // console.log(result);
        if (employeesName in Employees) {
            const userData = Employees[employeesName];
            // localStorage.setItem('employeeNameShow',employeesName)
            array.push(employeesName)
            setShowPosition(userData.position)
            setShowSalary(userData.salary)
            setShowName(array[0])
            setNotFound(false)
            console.log(array[0]);
            // setEmployeesName('')  
        } else {
            // arrayFound
            arrayFound.push(employeesName)
            // console.log(arrayFound);
            setShowNameFound(arrayFound[0])
            // localStorage.setItem('employeeFoundNameShow',employeesName)
            setShowName(false)
            setNotFound(true)
            // setEmployeesName('')  
        }
        // return Employees.employees;
    }
    
    // Sample object with names and data
    
  
//     function searchAndDisplayData(name) {
//         if (name in Employees) {
//             const userData = Employees[name];
//             console.log(`Name: ${name}`);
//             console.log(`Age: ${userData.position}`);
//             console.log(`City: ${userData.salary}`);
//         } else {
//             console.log(`Name "${name}" not found.`);
//         }
//     }
  
//   // Usage
//   searchAndDisplayData("janny"); // Will display Alice's data
  

    // console.log(add(Employees.employees, 'janny'));
  return (
    <div className="App">
        <h2>ข้อ 2</h2>
        {/* <header className="App-header App-header-information">
            <form onSubmit={onInforSubmit}>
                <div className='boxForm'>
                    <div className='zoneInput'>
                        <div className='labelInput'>Name :</div>
                        <input 
                        type="text" 
                        className='formInputCustom'
                        name='name'
                        value={information.name}
                        onChange={onInforValueOnChange}
                        required
                        />
                    </div>
                    <div className='zoneInput'>
                        <div className='labelInput'>Position :</div>
                        <input 
                        type="text" 
                        className='formInputCustom'
                        name='position'
                        value={information.position}
                        onChange={onInforValueOnChange}
                        required
                        />
                    </div>
                    <button type='submit' className='btnAdd'>เพิ่มข้อมูล</button>
                    <button type='button' className='btnSearch' style={{marginLeft:'.5rem'}}>ค้นหา</button>
                </div>
            </form>
            {inforElement}
        </header> */}
        <header className="App-header App-header-information">
            <form onSubmit={onSubmitFind}>
                <div className='boxForm'>
                    <div className='zoneInput'>
                        <div className='labelInput'>Name :</div>
                        <input 
                        type="text" 
                        className='formInputCustom'
                        name='name'
                        value={employeesName}
                        onChange={onEmpyNameValueOnChange}
                        required
                        />
                    </div>
                    {/* <div className='zoneInput'>
                        <div className='labelInput'>Position :</div>
                        <input 
                        type="text" 
                        className='formInputCustom'
                        name='position'
                        value={employeesPosition}
                        onChange={onEmpyPositionValueOnChange}
                        />
                    </div> */}
                    <button type='submit' className='btnSearch' style={{marginLeft:'.5rem'}}>ค้นหา</button>
                </div>
            </form>
            {notFound === false ? 
                <div className='boxInformationEmployee'>
                    ชื่อ : {showName}
                    <br/>
                    ตำแหน่ง : {showPosition}
                    <br/>
                    เงินเดือน : {showSalary}
                </div>
            :
                <div style={{color:'#222'}}>
                    ไม่พบชื่อ : {showNameFound}
                </div>
            }
           
        </header>
    </div>
  );
}

export default App2;
