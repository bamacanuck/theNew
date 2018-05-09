import React from "react";

export default function SelectedFoods(props) {
    const { foods } = props;

    const foodRows = foods.map((food, idx) => (
        <tr key={idx} onClick={() => props.onFoodClick(idx)}>
            <td>{food.description}</td>
            <td className="right aligned">{food.name}</td>
            <td className="right aligned">{food.brand}</td>
        </tr>
    ));

    return (
        
        
            <table className="ui selectable structured large table">
                <thead>
                <tr>
                    <th colSpan="5">
                        <h3>Selected foods</h3>
                    </th>

        
                </tr>
                <tr>
                    <th className="eight wide">Description</th>
                    <th>name</th>
                    <th>brand</th>
                    <button type="button">Click Me!</button>
                </tr>
                </thead>

                <tbody>
                {foodRows}
                </tbody>
                <tfoot>
                <tr>
                    <th>Total</th>
                    <th className="right aligned" id="total-kcal">
                        {sum(foods, "kcal")}
                    </th>
                    <th className="right aligned" id="total-protein_g">
                        {sum(foods, "protein_g")}
                    </th>
                    <th className="right aligned" id="total-fat_g">
                        {sum(foods, "fat_g")}
                    </th>
                    <th className="right aligned" id="total-carbohydrate_g">
                        {sum(foods, "carbohydrate_g")}
                    </th>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}

function sum(foods, prop) {
    return foods
        .reduce((memo, food) => parseInt(food[prop], 10) + memo, 0.0)
        .toFixed(2);
}