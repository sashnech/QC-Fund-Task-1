import RadioGroup from './components/RadioGroup.jsx'
import CheckboxGroup from './components/CheckboxGroup.jsx'
import TextInput from './components/TextInput.jsx'
import Tabs from './components/Tabs.jsx'
import ButtonDemo from './components/ButtonDemo.jsx'
import LabelDemo from './components/LabelDemo.jsx'
import LinkDemo from './components/LinkDemo.jsx'
import Tooltip from './components/Tooltip.jsx'
import Dropdown from './components/Dropdown.jsx'
import DataGrid from './components/DataGrid.jsx'


export default function App(){
    return (
        <div className="container">
            <h1>UI елементи — приклади</h1>


            <div className="grid">
                <section className="component-card" id="radiobutton">
                    <h2>1) Radiobutton</h2>
                    <p className="explain">Дозволяє обрати рівно один варіант із взаємовиключного набору.</p>
                    <div className="demo"><RadioGroup /></div>
                </section>


                <section className="component-card" id="checkbox">
                    <h2>2) Checkbox</h2>
                    <p className="explain">Дозволяє обрати один або кілька незалежних варіантів.</p>
                    <div className="demo"><CheckboxGroup /></div>
                </section>


                <section className="component-card" id="text-input">
                    <h2>3) Text input</h2>
                    <p className="explain">Поле для введення короткого тексту. Має стан фокусу, помилки і підказку.</p>
                    <div className="demo"><TextInput label="Email" type="email" placeholder="you@example.com" /></div>
                </section>


                <section className="component-card" id="tabs">
                    <h2>4) Tabs</h2>
                    <p className="explain">Перемикають видимий контент у межах однієї сторінки.</p>
                    <div className="demo"><Tabs /></div>
                </section>


                <section className="component-card" id="button">
                    <h2>5) Button</h2>
                    <p className="explain">Запускає дію: надсилання форми, збереження, відкриття діалогу тощо.</p>
                    <div className="demo"><ButtonDemo /></div>
                </section>


                <section className="component-card" id="label">
                    <h2>6) Text label</h2>
                    <p className="explain">Елемент <code className="inline">&lt;label&gt;</code> описує призначення поля й підвищує доступність.</p>
                    <div className="demo"><LabelDemo /></div>
                </section>


                <section className="component-card" id="link">
                    <h2>7) Link</h2>
                    <p className="explain">Навігація між сторінками.</p>
                    <div className="demo"><LinkDemo /></div>
                </section>


                <section className="component-card" id="tooltip">
                    <h2>8) Tooltip</h2>
                    <p className="explain">Коротке пояснення, що з’являється при наведенні/фокусі.</p>
                    <div className="demo"><Tooltip text="Наведіть курсор на текст" tip="Це приклад підказки з додатковою інформацією." /></div>
                </section>


                <section className="component-card" id="dropdown">
                    <h2>9) Dropdown list</h2>
                    <p className="explain">Випадаючий список для вибору одного значення з довшого переліку.</p>
                    <div className="demo"><Dropdown /></div>
                </section>


                <section className="component-card" id="datagrid">
                    <h2>10) Data grid</h2>
                    <p className="explain">Структуровані дані в таблиці з сортуванням і фільтром.</p>
                    <div className="demo"><DataGrid /></div>
                </section>
            </div>
        </div>
    )
}