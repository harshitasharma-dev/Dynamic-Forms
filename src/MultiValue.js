import React, {useState} from 'react';
import './App.css'

function MultiValue(){

    const [collection, setCollection] = useState([{ name:"", company:""}]) 

    function addNewObject(){
        const newCollection = [...collection]
        newCollection.push({name:null, company:null})
        setCollection(newCollection);
    }

    function setNewValue(index, event, inputID){
        const newCollection = [...collection]
        if(inputID==="name"){
            newCollection[index].name = event.target.value
        }
        else{
            newCollection[index].company= event.target.value
        }
        setCollection(newCollection)
    }
    
    function removeValue(index, inputID){
        const newCollection = [...collection]
        newCollection.splice(index,1)
        setCollection(newCollection)
    }

    function submitFinalObject(){
        console.log(collection);
    }

    return(
        <div className="App">
            <h1>MULTIPLE VALUES IN OBJECT USING DYNAMIC FORMS</h1>
            <button onClick={()=>addNewObject()}>Click to ADD !!</button>

            {collection.map((value,index)=>{
                return(
                    <div>
                        <input
                        type="text"
                        inputName="name"
                        placeholder="Enter Name"
                        value={value.name|| ""}
                        onChange= {event => setNewValue(index, event, "name")}
                        />  
                        <input
                        type="text"
                        placeholder="Enter Company Name"
                        value={value.company|| ""}
                        onChange= {event => setNewValue(index, event, "company")}
                        />
                        <button onClick={()=>removeValue(index)}>
                            X
                        </button>
                    </div>
                )
            })}

            <button onClick={()=>submitFinalObject()}>Click to SUBMIT !!</button>
        </div>
    )
}

export default MultiValue