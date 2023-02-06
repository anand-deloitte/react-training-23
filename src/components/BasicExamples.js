import '../App.css';
import React, {createRef, useRef, useState, useEffect} from 'react';

function BasicExamples() {
  let nameRef = createRef();
  let personName = "manideep";
  const[currentValue, setCurrntValue] = useState("");
  const previousValue = useRef();

  const[name, setName] = useState(personName);
  const[booleanValue, setBooleanValue] = useState(false);
  const[names, setNames] = useState([]);

  useEffect(() => {
    // console.log("use effect called..!");
    console.log(previousValue);
    previousValue.current = currentValue;
  },[currentValue])


  function nameChange(event) {
    setBooleanValue(!booleanValue);
    console.log(event);
    personName = "ravi";
    return setName(personName);
  }
  function storeNames(e) {
    e.preventDefault();
    console.log(nameRef.current.value);
    setNames([...names, {id:names.length, name:nameRef.current.value}]);
  }
  return (
    <div className="App">
      Heloo {booleanValue ? name : ""}
      <br />
      hell {booleanValue}
      <br />
      <button onClick={nameChange}>Click me!</button>
      <form onSubmit={storeNames}>
        <input 
          type="text"
          defaultValue = {name}
          placeholder="type name"
          ref={nameRef}
        />
        <button type="submit">submit</button>
      </form>
      <hr />
      <ul>
        {names.map((item) => 
          <li key={item.length}>{item.name}</li>
        )}
      </ul>

      <hr />
      <form>
        <input type="text"
        ref={previousValue}
        value={currentValue}
        onChange={(e) => setCurrntValue(e.target.value)}
        />
      </form>
      <h2>current value : {currentValue}</h2>
      <h2>previous value : {previousValue.current}</h2>
    </div>
  );
}

export default BasicExamples;
