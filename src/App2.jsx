import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Employees from './Employee.json'
const startNumber = {
    name:'',
    position:''
}

function App2() {
    const [employeesName, setEmployeesName] = useState()
    
    const onEmpyNameValueOnChange = (event) =>{
        setEmployeesName(event.target.value)
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
        if (employeesName in Employees) {
            const userData = Employees[employeesName];
            array.push(employeesName)
            setShowPosition(userData.position)
            setShowSalary(userData.salary)
            setShowName(array[0])
            setNotFound(false)
        } else {
            arrayFound.push(employeesName)
            setShowNameFound(arrayFound[0])
            setShowName(false)
            setNotFound(true)
        }
    }

  return (
    <div className="App">
        <h2>ข้อ 2</h2>
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
                    ไม่พบพนักชื่อ : {showNameFound}
                </div>
            }
        </header>
    </div>
  );
}

export default App2;
