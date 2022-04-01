import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {

    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 0, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'}
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter(counter => counter.id !== id);
        newCounters.forEach((el, id) => {
            el.id = id;
        });

        setCounters(newCounters);
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        const incrementState = counters.slice();
        incrementState[id].value += 1;
        setCounters(incrementState);
    };

    const handleDecrement = (id) => {
        const decrementState = counters.slice();
        if (decrementState[id].value > 0) {
            decrementState[id].value -= 1;
        }
        setCounters(decrementState);
    };

    const getBageClasses = (el) => {
        let classes = 'badge m-2 ';
        classes += el.value === 0 ? 'bg-warning' : 'bg-primary';
        return classes;
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    getBageClasses={getBageClasses}
                    {...count}
                />
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </>
    );
};

export default CountersList;