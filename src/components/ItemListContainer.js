import React from "react";

const ItemListContainer = ({ saludo }) => {
    return (
        <div className="container mt-5">
            <div className="jumbotron text-center">
                <h1 className="display-4">{saludo}</h1>
            </div>
        </div>
    );
}

export default ItemListContainer;