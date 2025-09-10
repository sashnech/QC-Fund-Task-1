import { useState } from 'react'


export default function CheckboxGroup(){
    const [checked, setChecked] = useState(new Set(['Text 1']))
    const options = ['Text 1', 'Text 2', 'Text 3']


    const toggle = (opt) => {
        const next = new Set(checked)
        next.has(opt) ? next.delete(opt) : next.add(opt)
        setChecked(next)
    }


    return (
        <div>
            {options.map(opt => (
                <label key={opt}>
                    <input
                        type="checkbox"
                        checked={checked.has(opt)}
                        onChange={() => toggle(opt)}
                    /> {opt}
                </label>
            ))}
            <div className="hint">Обрано: <b>{[...checked].join(', ') || 'нічого'}</b></div>
        </div>
    )
}