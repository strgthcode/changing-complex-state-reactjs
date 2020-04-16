import React, {useState} from 'react'

export default function Form(){

    const [fullName, setFullName] = useState({
        fName: '',
        lName: ''
    });

    const [fullHeading, setFullHeading] = useState({
        fHeading: '',
        lHeading: ''
    });

    function handleFullName(event){
        
        const { name, value } = event.target;

        setFullName((preValue) => {
            if (name === 'fName'){
                return {
                    fName: value,
                    lName: preValue.lName
                } 
            } else if (name === 'lName') {
                return {
                    fName: preValue.fName,
                    lName: value
                }
            }
        })
        
    }

    function handleClick() {

        setFullHeading({
            fHeading: fullName.fName,
            lHeading: fullName.lName
        });

        
    }

    function handleSubmit(event){
        return(
            event.preventDefault()
        )
    }

    return(
        <>
            <form className='form' onSubmit={handleSubmit} >
                <h1>Hola {fullHeading.fHeading} {fullHeading.lHeading}</h1>

                <input 
                    className='input' 
                    name='fName' 
                    type='text' 
                    placeholder='First Name' 
                    value={fullName.fName}
                    onChange={handleFullName}/>


                <input 
                    className='input' 
                    name='lName' 
                    type='text' 
                    placeholder='Last Name' 
                    value={fullName.lName}
                    onChange={handleFullName}/>

                <button className='button' onClick={handleClick}>Submit</button>

            </form>
        </>
    )
}