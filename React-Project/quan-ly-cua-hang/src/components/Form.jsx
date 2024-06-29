import React, { useEffect } from 'react';

export default function Form({ handleAdd, handleEdit, show, setShow, select, handleUnSelect }) {
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDate = formatDate(new Date());
        if (select) {
            handleEdit({ ...select, name, address, lastUpdate: formattedDate });
            handleUnSelect();
        } else {
            handleAdd(name, address, formattedDate);
        }
        setShow('hidden');
    };

    useEffect(() => {
        if (select) {
            setName(select.name);
            setAddress(select.address);
        } else {
            setName('');
            setAddress('');
        }
    }, [select]);

    return (
        <div className={show}>
            <div className='bg-blur'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-top'>
                        <h3>
                            {select ? 'Sua thong tin' : 'Them moi'}
                        </h3>
                        <button onClick={(e) => { e.preventDefault(); setShow('hidden'); handleUnSelect() }}>X</button>
                    </div>
                    <div className='form-main'>
                        <label>Ten nguoi quan ly</label>
                        <input
                            type="text"
                            placeholder='Ten nguoi quan ly'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p className='error'></p>
                        <label>Dia chi</label>
                        <input
                            type="text"
                            placeholder='Dia chi'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <p className='error'></p>
                    </div>
                    <div className='form-bottom'>
                        <button onClick={(e) => { e.preventDefault(); setShow('hidden'); handleUnSelect() }}>Huy</button>
                        <button type="submit">{select ? 'Sua' : "Them moi"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
