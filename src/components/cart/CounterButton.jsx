const CounterButton = ({ handleDecrement,handleIncrement,quantity }) => {

    return (
        <div className="counter_button">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default CounterButton