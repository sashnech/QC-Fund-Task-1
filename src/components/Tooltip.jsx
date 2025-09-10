export default function Tooltip({ text, tip }){
    return (
        <div className="tip-wrap">
            <span data-tooltip>{text}</span>
            <span className="tip" role="tooltip">{tip}</span>
        </div>
    )
}