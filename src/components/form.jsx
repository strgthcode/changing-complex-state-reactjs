import React, {useState} from 'react'

export default function Form(){

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');

    const [fHeading, setfHeading] = useState('');
    const [lHeading, setlHeading] = useState('');

    function handlefName(event) {
        setfname(event.target.value);
    }

    function handlelName(event){
        setlname(event.target.value);
    }

    function handleClick(){
        setfHeading(fname);
        setlHeading(lname);
    }

    function handleForm(event){
        return event.preventDefault();
    }

    return(
        <>
            <form className='form' onSubmit={handleForm}>
                <h1>Hola {fHeading} {lHeading}</h1>
                <input className='input' type='text' placeholder='First Name' onChange={handlefName}/>
                <input className='input' type='text' placeholder='Last Name' onChange={handlelName}/>
                <button className='button' onClick={handleClick}>Submit</button>
            </form>
        </>
    )
}