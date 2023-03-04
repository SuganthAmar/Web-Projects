import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [branch, setBranch] = useState('');

  const [data, setData] = useState([]);

  const handle = (e) => {
    e.preventDefault();

    const data = { Name: name, Age: age, Branch: branch }
    axios.post('https://sheetdb.io/api/v1/hp9n9yniiakeu', data).then((response) => {
      console.log(response);
      setName('');
      setAge('');
      setBranch('');
    })
  }

  const getData = () => {
    axios.get('https://sheetdb.io/api/v1/hp9n9yniiakeu').then((response) => {
      setData(response.data);
    })
  }

  useEffect(() => {
    getData();
  }, [data])



  return (
    <div className="App">
      <h1>Enter the Data</h1><br></br>
      <div className='container'>

        <form autoComplete='off' className='form-group' onSubmit={handle}>
          <label>Name</label>
          <input type='text' placeholder='Enter your name' required className='formControl' onChange={(e) => setName(e.target.value)} value={name} /><br></br>
          <br></br>
          <label>Age</label>
          <input type='number' placeholder='Enter your age' required className='formControl' onChange={(e) => setAge(e.target.value)} value={age} /><br></br>
          <br></br>
          <label>Branch</label>
          <input type='text' placeholder='Enter your Branch' required className='formControl' onChange={(e) => setBranch(e.target.value)} value={branch} /><br></br>
          <br></br>
          <div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>




    </div>
  );
}

export default App