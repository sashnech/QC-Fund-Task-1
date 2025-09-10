export default function ButtonDemo(){
    const onClick = () => alert('✔ Додано до кошика')
    return <button className="btn primary" onClick={onClick}>Купити</button>
}