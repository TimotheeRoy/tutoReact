import data from "../assets/data.json";
import ItemGrid from "./ItemGrid";

function Grid() {
    return (
        <div className="grid">
            {data &&
                data.map((item, index) => (
                    <ItemGrid key={index} title={item.title} type={item.type} />
                ))}
        </div>
    );
}

export default Grid;
