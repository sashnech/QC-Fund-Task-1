import { useMemo, useState } from 'react'


const INITIAL_ROWS = [
    {id:101, name:'Олена', city:'Київ', age:28},
    {id:102, name:'Ігор', city:'Львів', age:35},
    {id:103, name:'Марія', city:'Одеса', age:22},
    {id:104, name:'Сергій',city:'Харків', age:41},
    {id:105, name:'Андрій',city:'Дніпро', age:30},
    {id:106, name:'Наталія',city:'Київ', age:26},
    {id:107, name:'Богдан', city:'Львів', age:33},
    {id:108, name:'Інна', city:'Одеса', age:29},
    {id:109, name:'Павло', city:'Харків',age:38}
]


export default function DataGrid(){
    const [query, setQuery] = useState('')
    const [sortKey, setSortKey] = useState('id')
    const [sortDir, setSortDir] = useState('asc')


    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        let rows = INITIAL_ROWS.filter(r => !q || r.name.toLowerCase().includes(q) || r.city.toLowerCase().includes(q))
        rows.sort((a,b)=>{
            const va=a[sortKey], vb=b[sortKey]
            if(va<vb) return sortDir==='asc'? -1:1
            if(va>vb) return sortDir==='asc'? 1:-1
            return 0
        })
        return rows
    }, [query, sortKey, sortDir])


    const onSort = (key) => {
        if(key===sortKey){ setSortDir(d=> d==='asc' ? 'desc' : 'asc') }
        else { setSortKey(key); setSortDir('asc') }
    }


    const reset = () => { setQuery(''); setSortKey('id'); setSortDir('asc') }


    return (
        <div>
            <div className="toolbar">
                <input className="input" placeholder="Пошук по імені або місту..." value={query} onChange={e=>setQuery(e.target.value)} style={{maxWidth:320}} />
                <button className="btn ghost" onClick={reset}>Скинути</button>
            </div>


            <div className="table-wrap">
                <table>
                    <thead>
                    <tr>
                        <Th label="ID" k="id" sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
                        <Th label="Ім'я" k="name" sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
                        <Th label="Місто" k="city" sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
                        <Th label="Вік" k="age" sortKey={sortKey} sortDir={sortDir} onSort={onSort} />
                    </tr>
                    </thead>
                    <tbody>
                    {filtered.map(r=> (
                        <tr key={r.id}>
                            <td>{r.id}</td><td>{r.name}</td><td>{r.city}</td><td>{r.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


function Th({ label, k, sortKey, sortDir, onSort }){
    const active = sortKey===k
    return (
        <th onClick={()=>onSort(k)} data-key={k} aria-sort={active?sortDir:'none'}>
            {label} <span className="sort-icon">⇅</span>
        </th>
    )
}