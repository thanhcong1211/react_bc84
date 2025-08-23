//rafce
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ToDoListApi = () => {
    const [arrTask, setArrTask] = useState([]); //state chứa taskList
    const [newTask, setNewTask] = useState('');
    console.log('newTask', newTask);
    let loadTask;
    const getAllTaskApi = async () => {
        try {
            let res = await axios({
                url: 'https://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method: 'GET'
            });
            setArrTask(res.data)
        } catch (err) {
            console.log(err);
        }
    }
    console.log('arrTask', arrTask);
    useEffect(() => {
        //Gọi 1 lần sau khi giao diện html render
        getAllTaskApi();
        //setup sau mỗi 5s hàm callback trong setInterval sẽ gọi lại 1 lần
        loadTask = setInterval(() => {
            getAllTaskApi();
            console.log(123);
        }, 5000);

        return () => {
            clearInterval(loadTask);
        }

    }, []);

    const renderTask = () => {
        let res = arrTask.filter(item => item.status == false);
        let arrTaskJSX = res.map((item, index) => {
            return <div className='alert alert-dark bg-dark text-white d-flex justify-content-between my-1' key={index}>
                <span >{item.taskName}</span>
                <div className='button-action'>
                    <button className='btn btn-success' onClick={() => {
                        handleDoneTask(item.taskName);
                    }}>Complete</button>
                   <button className='ms-2 btn btn-danger' onClick={()=>{
                        handleDelTask(item.taskName)
                    }}>
                        Delete
                    </button>
                </div>
            </div>
        });
        return arrTaskJSX;
    }

    const renderTaskComplete = () => {
        let res = arrTask.filter(item => item.status == true);
        let arrTaskJSX = res.map((item, index) => {
            return <div className='alert alert-success d-flex justify-content-between my-1' key={index}>
                <span style={{ textDecoration: 'line-through' }}>{item.taskName}</span>
                <div className='button-action'>
                    <button className='btn btn-warning' onClick={()=>{
                        handleRejectTask(item.taskName);
                    }}>Reject</button>
                    <button className='ms-2 btn btn-danger' onClick={()=>{
                        handleDelTask(item.taskName)
                    }}>
                        Delete
                    </button>
                </div>
            </div>
        });
        return arrTaskJSX;
    }

    const addTask = async () => {
        //Gọi api addTask từ backend
        let obTask = {
            "taskName": newTask
        };
        try {
            let res = await axios({
                url: 'https://svcy.myclass.vn/api/ToDoList/AddTask',
                method: 'POST',
                data: obTask
            });
            //call lại nghiệp vụ load task
            getAllTaskApi();

        } catch (err) {
            console.log(err)
        }
    }


    const handleDoneTask = async (taskNameComplete) => {
        try {
            const res = await axios({
                url: `https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskNameComplete}`,
                method: 'PUT'
            });

            //gọi lại api load task
            getAllTaskApi();


        } catch (err) {
            console.log(err);
        }
    }
    const handleRejectTask = async (taskNameComplete) => {
        try {
            const res = await axios({
                url: `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskNameComplete}`,
                method: 'PUT'
            });

            //gọi lại api load task
            getAllTaskApi();


        } catch (err) {
            console.log(err);
        }
    }

    const handleDelTask = async (taskNameDelete) => {
        const res = await axios({
            url:`https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskNameDelete}`,
            method:'DELETE'
        });

        getAllTaskApi();
    }

    return (
        <div className='container'>
            <h3>To do list</h3>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTask();
            }} className='input-group'>
                <input className='form-control' id="task" name="task" placeholder='nhập vào việc cần làm hôm nay !' onInput={(e) => {
                    let { value } = e.target;
                    //let value = e.target.value;
                    setNewTask(value);

                }} />
                <button className='btn btn-dark' onClick={() => {
                    addTask();
                }}>Add</button>
            </form>

            <div className='form-group'>
                <h3>Các công việc chưa làm</h3>
                {renderTask()}

            </div>
            <div className='form-group'>
                <h3>Các công việc đã làm</h3>
                {renderTaskComplete()}
            </div>
        </div>
    )
}

export default ToDoListApi