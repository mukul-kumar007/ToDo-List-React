import React, { useState } from 'react';

const TodoList = (props) => {
    const [isActive , setIsActive] = useState("false");

    const handleClick = () =>{
        setIsActive(current => !current);
    }
    
    return (
        
        <>
        <div className='todo_items'>
            <div className='liItem'>
                <li style={{color: isActive ? '' : 'green',textDecoration: isActive ? 'none' : 'line-through'}} onClick={handleClick} >{props.text}</li>
            </div>
            <div className='editDelete'>
                <i className="fa-solid fa-pen-to-square"
                    onClick={() =>{
                        props.editTask(props.id);
                    }}
                
                />
                <i className="fa-solid fa-trash"
                    onClick ={() =>{
                        props.onSelect(props.id);
                    }}
                />
            </div>
            
            
        </div>
        </>
    )
}

export default TodoList;