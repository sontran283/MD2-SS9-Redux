// import React from 'react'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuid } from "uuid"
import { act_add } from "../actions/actionTypes"
import { act_delete } from "../actions/actionTypes"
import { act_checked } from "../actions/actionTypes"

export default function TodoLish() {
    const dispatch = useDispatch()
    const [job, setJob] = useState("")
    //  sau khi luu len localStorage ben file todo.jsx, qua day lay du lieu tu store
    const listJob = useSelector((job) => job.todolish)
    console.log(listJob);

    //  ham gui action kem payload (du lieu) len reducer
    const handleAddTodo = () => {
        const newJob = {
            id: uuid(),
            name: job,
            status: false,
        };
        dispatch(act_add(newJob))
        setJob("")
    };

    //  han xoa
    const handleDelete = (id) => {
        dispatch(act_delete(id))  // gui dispatch len reducer
    }

    // ham thay doi trang thai cong viec
    const handleCheck = (id) => {
        dispatch(act_checked(id))
    }

    return (
        <div>
            <div className="d-flex gap-2 mb-3">
                <input
                    value={job} onChange={(e) => setJob(e.target.value)}
                    type="text"
                    className="form-control" />
                <button
                    onClick={handleAddTodo}
                    className="btn btn-primary">
                    Add
                </button>
            </div>
            <ul className="list-group">

                {listJob.map((job, index) => (
                    <li className="list-group-item d-flex justify-content-between mb-3" key={index}>
                        <div className="d-flex gap-2 align-items-center">
                            <input
                                checked={job.status === true}
                                onChange={() => handleCheck(job.id)}
                                type="checkbox"
                                className="form-check-input" />

                            {job.status == true ?
                                (<><s>{job.name}</s></>) :
                                (<> <span>{job.name}</span></>)}

                        </div>
                        <button
                            //  sau khi them o day qua actionType.jsx
                            onClick={() => handleDelete(job.id)}
                            className="btn btn-danger">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
