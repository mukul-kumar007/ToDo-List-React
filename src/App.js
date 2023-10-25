import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

const getLocalItems = () =>{
    let list = localStorage.getItem('lists');
    if(list){
        return JSON.parse(list);
    }else{
        return [];
    }
}


function App(){
    

    const[inputList, setInputList] = useState("");
    const [Items,setItems] = useState(getLocalItems());

    const items = (event) =>{
        setInputList(event.target.value);
    };

    useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(Items))
    },[Items]);

    const listOfItems = () =>{
        if(!inputList){
            alert("ToDo cannot be EMPTY");
        }else{
            setItems((oldItems) => {
                return [...oldItems,inputList];
            });
            setInputList("");
        }
    };
    const deleteItems = (id) =>{
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElement,index) =>{
                return index !== id;
            })
        })
    }
    // const editItems = (id) =>{
    //     let newItem = Items.find((inputList) => {
    //         return inputList.id === id;
    //     })
    //     console.log(newItem);
    // }
    const EditingItems = (id) => {
        console.log("Will Edit");
        const updatedTask = prompt("Edit Your Todo", Items[id]);
        if(updatedTask){
            const updatedTasks = [...Items];
            updatedTasks[id] = updatedTask;
            setItems(updatedTasks);
        }
    }

    
     
    return(
        <>
            <div className='main'>
                <div className='box'>
                    <div className='heading'>
                        ToDo List
                    </div>
                    <div className='inputfield'>
                        <input type='text' placeholder='Add Your ToDo's onChange={items}
                            value={inputList}

                        />
                        <button onClick={listOfItems}><i className="fa-solid fa-plus"></i></button>
                    </div>
                    <div className='subHeading'>Your ToDo's</div>
                    <div className='listContainer'>
                        <ol>
                            {
                                Items.map( (itemval,index) => {
                                    return(
                                      <TodoList 
                                      key={index} 
                                      id={index} 
                                      text = {itemval}
                                      onSelect = {deleteItems}
                                      editTask = {EditingItems}
                                      />
                                    )  
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;