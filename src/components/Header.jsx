// import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
    const lishJob = useSelector((job) => job.todolish)
    return (
        <div>
            so luong cv hien tai la: {lishJob.length}
        </div>
    )
}
