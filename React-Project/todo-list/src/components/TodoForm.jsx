import React, {useState} from 'react'

export default function TodoForm({ addTodo }) { // props
    const [value, setValue] = useState('')

    const handleSubmit = (e) => { // e: event object
        e.preventDefault() // Ngan chan chan su kien cua form la tai lai trang
        if (value) {
            addTodo({
                text: value,
                isCompleted: false
            })
            setValue('') // Reset lai gia tri cua o input
        }
    }
    return (
    <form onSubmit={handleSubmit}> {/* Khi submit form thi goi ham handleSubmit */}
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add new todo...'/> {/* Khi gia tri cua input thay doi, su kien e se duoc goi, no se cap nhat gia tri cua no bang state setValue, e.target.value tuc la gia tri cua su kien dang duoc kich hoat */}
        <button type='submit'>Add</button> {/* Khi an vao nut add, form se duoc submit va su kien onSubmit duoc kich hoat */}
    </form>
  )
}
