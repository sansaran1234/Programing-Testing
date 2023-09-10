import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

const startNumber = {
    number: ''
}
function App() {

    const [valueNumber, setValueNumber] = useState({
        number:''
    }) 
    const [isDisabled, setIsDisabled] = useState(true) 
    const [allNumber, setAllnumber] = useState([])
    function noNumberValueChange(event){
        const {name ,value} = event.target;
        
        setValueNumber((prevNumber) =>{
            return {
                ...prevNumber,
                [name] : value
            }
        })
        
    }
    const array = []
    const [ storeArray , setStoreArray ] = useState([])
    const submitNumber = (e) =>{
        e.preventDefault();
        setAllnumber((prevAllNumbers)=>{
            return [valueNumber,...prevAllNumbers]
        })
        allNumber.forEach((data) => {
            let sentence = data.number;
            array.push(sentence);
        });
        var x = 0;
        setStoreArray(olaAarray => [...olaAarray ,valueNumber.number])
        setValueNumber(startNumber)
        if (storeArray != []) {
            setIsDisabled(false)
        }
        
    }
    const [showArray , setShowArray] = useState()
    const [showResult , setShowResult] = useState(false)
    const arraySort = (arr = []) => {
        let map = {};
        for (let i = 0; i < arr.length; i++) {
            map[arr[i]] = (map[arr[i]] || 0) + 1;
        };
        arr.sort((a,b) => map[a]- map[b]  || a - b);
        setShowArray(storeArray);
        setShowResult(true)
    };
    const deleteValue = () =>{
        setStoreArray([])
        setIsDisabled(true)
        setShowResult(false)
    }
   
    return (
        <div className="App">
            <h2>ข้อ 1</h2>
            <header className="App-header">
                <form onSubmit={submitNumber}>
                    <div className='text-center'>
                        <div style={{marginBottom:'1rem'}}>
                            <input 
                            value={valueNumber.number} 
                            name="number" 
                            type="number" 
                            onChange={noNumberValueChange} 
                            className='boxEnter'
                            required 
                            />
                        </div>
                        <button type='submit' className='btnSave'>บันทึกค่า</button>
                        <button type='button' className='btnProcess' onClick={()=> arraySort(storeArray)} disabled={isDisabled}>ประมวลผล</button>
                        <button type='button' className='btnDelete' onClick={()=> deleteValue()} disabled={isDisabled}>ลบผลลัพธ์</button>
                    </div>
                </form>
                
                <div className='boxInput' style={{marginTop:'1rem'}}>
                {showResult === true ? "ผลลัพธ์: " + storeArray :"ค่าที่นำเข้า: " + storeArray}
                </div>
            </header>
        </div>
    );
}

export default App;
