import React, {useState} from 'react'
import Field from './Field';
import validator from 'validator';

export default function Add({setShow, setList}) { // index to edit, -1 is add
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (!name || !email || !address || !phone) {
            alert('Các trường không được bỏ trống');
            return;
        }
        if (!validator.isEmail(email)) {
            alert("Email không hợp lệ");
            return;
        }
        const regex = /^[0][0-9]{9}$/;
        if (!validator.isMobilePhone(phone) || !regex.test(phone)) {
            alert("Số điện thoại phải có chính xác 10 chữ số và bắt đầu bằng chữ số 0");
            return;
        }
        setList((prev) => [...prev, { name, email, address, phone, act: 1 }]);
        setShow(false);
    }

  return (
    <form className='bg-white w-[25%] p-4 rounded shadow-md' submit='submit' action='submit'>
        <div className='flex flex-col'>
            <div className='flex justify-between border-b mb-4 p-2'>
                Add Employee
                <button onClick={() => setShow(false)}>x</button>
            </div>
            <Field name={'Name'} value={name} setValue={setName}/>
            <Field name={'Email'} value={email} setValue={setEmail}/>
            <Field name={'Address'} value={address} setValue={setAddress}/>
            <Field name={'Phone'} value={phone} setValue={setPhone}/>
            <div className='ml-auto space-x-3 mr-1'>
                <button onClick={() => setShow(false)}>Cancel</button>
                <button className='bg-green-600 text-white p-1 px-2 rounded hover:bg-green-500' onClick={submit}>Add</button>
            </div>
        </div>
    </form>
  )
}
