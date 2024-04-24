import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';
import "./AntTable.css"
import { Space, Table, Tag } from 'antd';
import ListStudents from '../ListStudents/ListStudents';
import { useOutletContext } from 'react-router-dom';
let currentDate = format(new Date(), 'MMMM do yyyy, h:mm:ss a');
console.log(currentDate);

export default function AntTable() {
    let dataTable = useOutletContext();
    dataTable =dataTable[1]
    return (
        <div>
            <ListStudents dataTable={dataTable}></ListStudents>
        </div>

    )
}
