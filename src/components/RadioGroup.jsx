import { useState } from 'react'


export default function RadioGroup(){
    const [value, setValue] = useState('Text 1')
    const options = ['Text 1', 'Text 2', 'Text 3']


    return (
        <fieldset>
            <legend className="legend-muted">Виберіть щось зі списку</legend>
            {options.map(opt => (
                <label key={opt}>
                    <input
                        type="radio"
                        name="demo-radio"
                        checked={value === opt}
                        onChange={() => setValue(opt)}
                    /> {opt}
                </label>
            ))}
            <div className="hint">Обрано: <b>{value}</b></div>
        </fieldset>
    )
}