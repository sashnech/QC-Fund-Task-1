import { useId, useState } from 'react'


export default function Dropdown(){
    const id = useId()
    const [value, setValue] = useState('')
    const options = ['Text 1','Text 2','Text 3','Text 4','Text 5']


    return (
        <div>
            <label htmlFor={id}>Dropdown list</label>
            <select id={id} value={value} onChange={e=>setValue(e.target.value)}>
                <option value="">— Натиснути —</option>
                {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <div className="hint">Обрано: <b>{value || '—'}</b></div>
        </div>
    )
}