import React, {useState} from 'react'
import Field from './Field'

export default function AddForm({ setList, setShow }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const submit = (e) => {
        e.preventDefault()
        setList(prev => [...prev, {name, email, address, phone, act: 1}])
        setShow(false)
    }

    return (
        <form className='w-[27%] bg-white text-black p-5' submit={'submit'} action='submit'>
            <div className='flex justify-between border-b'>
                Add Employee
                <button onClick={() => setShow(false)}>x</button>
            </div>
            <Field labelName={'Name'} setValue={setName}/>
            <Field labelName={'Email'} setValue={setEmail} />
            <Field labelName={'Address'} setValue={setAddress} />
            <Field labelName={'Phone'} setValue={setPhone} />
            <div className='flex items-end space-x-4 justify-end mt-3'>
                <button onClick={() => setShow(false)}>Cancel</button>
                <button onClick={submit} className='bg-green-600 hover:bg-green-500 px-2 rounded'>Add</button>
            </div>
        </form>
    )
}
