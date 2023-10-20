import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

  const[intrest , setIntrest]= useState(0)

  const[principle , setPrinciple]= useState(0)

  const[rate , setRate]= useState(0)
const[year,SetYear]=useState(0)
const[isprinciple ,setIsPrinciple]=useState(true)
const[isRate,setIsRate]=useState(true)
const[isYear,setIsYear]=useState(true)

const getValidate=(e)=>{
  const{name,value}=e.target
  /* console.log(name,value); */
 /* console.log((!!value.match(/^[0-9]+$/)) */
  if(!!value.match(/^[0-9]+$/)){
    if(name==='principle')
    {setPrinciple(value)
    setIsPrinciple(true)}
    else if(name==='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      SetYear(value)
      setIsYear(true)
    }
  }
  else{
if(name==='principle')
   { setPrinciple(value)
setIsPrinciple(false)}
else if(name==='rate'){
  setRate(value)
  setIsRate(false)
}
else{
  SetYear(value)
  setIsYear(false)
}
  }
}
const handleCalculate=(e)=>{
  e.preventDefault()
  if(!principle || !rate || !year)
  {
    alert('please fill the form')
  }
  else{
   /*  alert('submitted') */
   setIntrest(principle*rate*year/100)
  }
}
  return (
    <div style={{height:'100vh'}} className='bg-info d-flex justify-content-center align-items-center w-100'>
     <div className='bg-light p-5 rounded'> <h1>simple intrest app</h1>
     <p>calculate simple intrest easily</p>
     
     <div className='bg-info d-flex justify-content-center align-items-center w-100 flex-column rounded '>
<h1>₹{''}{intrest}</h1>
<p>total simple intrest</p>
     </div>
     <form className='mt-5 ' onSubmit={handleCalculate}>
<div className='mb-3 '>
<TextField name='principle'   value={principle || "" }  onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="principle amount" variant="outlined" />

</div>
{!isprinciple &&
<div>
  <p className='text-danger fw-bolder'>*invalid input</p>
</div>}
<div className='mb-3 '>
<TextField name='rate' value={rate || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="rate of intrest" variant="outlined" />

</div>
{!isRate &&
<div>
  <p className='text-danger fw-bolder'>*invalid input</p>
</div>}
<div className='mb-3 '>
<TextField   name='year'onChange={(e)=>getValidate(e)}  value={year || ""}  className='w-100'   id="outlined-basic" label="year" variant="outlined" />

</div>
{!isYear &&
<div>
  <p className='text-danger fw-bolder'>*invalid input</p>
</div>}
<Stack direction="row" spacing={2}>

<Button type='submit' disabled={isprinciple && isRate && isYear?false:true}  className='bg-success' style={{width:'200px',height:'50px'}}    variant="contained">calculate</Button>
<Button style={{width:'200px',height:'50px'}}  variant="outlined">reset</Button>
</Stack>
     </form>
     </div>
    </div>
  );
}

export default App;
