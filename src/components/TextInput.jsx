import { useId, useState } from 'react'


export default function TextInput({ label, type = 'text', placeholder }){
    const id = useId()
    const [value, setValue] = useState('')


    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} className="input" type={type} placeholder={placeholder} value={value} onChange={e=>setValue(e.target.value)} />
            <div className="hint">Введено: <b>{value || '—'}</b></div>
        </div>
    )
}