import React from "react";

const Count = (props) => {

    const {value, name, id, onIncrement, onDecrement, onDelete, getBageClasses} = props;

    return (
        <div>
            <span>{name}</span>
            <span className={getBageClasses(props)}>{value === 0 ? 'empty' : value}</span>
            <button className='btn btn-primary btn-sm m-2' onClick={() => onIncrement(id)}>+</button>
            <button className='btn btn-primary btn-sm m-2' onClick={() => onDecrement(id)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default Count;