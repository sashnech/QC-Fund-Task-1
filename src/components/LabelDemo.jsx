export default function LabelDemo(){
    return (
        <div>
            <label htmlFor="phone">Номер телефону</label>
            <input id="phone" className="input" type="tel" placeholder="+380 00 000 00 00" />
        </div>
    )
}