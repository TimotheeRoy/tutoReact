function ItemGrid({ title, type }) {
    return (
        <div className="itemGrid">
            <h1 className="title">{title}</h1>
            <h4 className="type">{type}</h4>
        </div>
    );
}

export default ItemGrid;
