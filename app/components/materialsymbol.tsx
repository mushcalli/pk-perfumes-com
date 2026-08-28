export default function MSymbol({type = "", color = "", fill=false, opsz = 24}) {
    return (
        <span className={"material-symbols-outlined text-" + color} style={{
            fontVariationSettings: "'FILL' " + (fill ? "1" : "0") + ", 'wght' 400, 'GRAD' 0, 'opsz' " + opsz.toString(),
            fontSize: opsz
        }}>
            {type}
        </span>
    );
}