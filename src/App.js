import React, {useState} from 'react';
import './App.css';

function App() {

  const [people, setFields] = useState([{name:""}])
  const [finalPeopleList, setPeople] = useState([{name:null}])

  function addingParamter(){
    const newValue = [...people]
    newValue.push({name:null})
    setFields(newValue)
  }

  function settingValue(index, event){
    const newValue = [...people]
    newValue[index].name = event.target.value
    setFields(newValue)
  }

  function removeParameter(index){
    if (index>0) {
      const newValue = [...people]
      newValue.splice(index, 1)
      setFields(newValue)
    }
    else{
      alert("Sorry! you can remove it. Minimum one field required to submit.")
    }
  }

  function submitList (){
    setPeople(people)
  }

  return (
    <div className="App">
      <h1>DEMONSTRATION OF DYNAMIC FORM</h1>
      <button onClick={()=>addingParamter()}>Click to Add</button>
      {people.map((value, index)=>{
        return(
          <div>
            <input
              type="text"
              placeholder="Enter First Name"
              value={value.name || ""}
              onChange= {event => settingValue(index, event)}
            />
            <button onClick={()=>removeParameter(index)}>
              X
            </button>
            {/* <h3>{value.name}</h3> */}
          </div>
        )
      })}
      <button onClick={()=>submitList()}>SUBMIT</button>


      {finalPeopleList.map((value, index)=>{
        return(
          <div>
            {value.name}
          </div>
        )
      })
      }
    </div>
  );
}

export default App;
