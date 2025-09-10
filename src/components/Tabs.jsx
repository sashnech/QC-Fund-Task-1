import { useState } from 'react'


export default function Tabs(){
    const [active, setActive] = useState('tab-1')


    const makeBtn = (id, label) => (
        <button
            key={id}
            className="tab-btn"
            role="tab"
            aria-selected={active === id}
            aria-controls={id}
            id={`btn-${id}`}
            onClick={() => setActive(id)}
        >{label}</button>
    )


    return (
        <div>
            <div role="tablist" aria-label="Приклад вкладок" className="tabs">
                {makeBtn('tab-1', 'Tab 1')}
                {makeBtn('tab-2', 'Tab 2')}
                {makeBtn('tab-3', 'Tab 3')}
            </div>


            <div id="tab-1" className="tab-panel" data-active={active==='tab-1'} role="tabpanel" aria-labelledby="btn-tab-1">Text 1</div>
            <div id="tab-2" className="tab-panel" data-active={active==='tab-2'} role="tabpanel" aria-labelledby="btn-tab-2">Text 2</div>
            <div id="tab-3" className="tab-panel" data-active={active==='tab-3'} role="tabpanel" aria-labelledby="btn-tab-3">Text 3</div>
        </div>
    )
}