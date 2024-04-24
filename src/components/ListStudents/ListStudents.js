import React, { useState } from 'react'
import { Space, Table, Tag } from 'antd';
import './ListStudents';
import "../SideBar/Menu.css"
import AddModal from '../PopUp/AddModal';
import EditModal from '../PopUp/EditModal';
import axios from 'axios';
import moment from 'moment';

export default function ListStudents(props) {
    const renderDate = (createdAt) => {
        return moment(createdAt._d).format('DD-MMM , YYYY');
    };
    const columns = [
    {
        dataIndex: 'avatar',
        key: 'img',
        render: (img) => <img src={`${img}`} className='img-1' alt={`${img}`} ></img>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },

    {
        title: 'EnrollNumber',
        dataIndex: 'enroll',
        key: 'enroll',
    },
    {
        title: 'Date of administration',
        dataIndex: 'birthDay',
        key: 'birthDay',
        render: (createdAt) => moment(createdAt._d).format('DD,MMM,YYYY'),

    },
    {
        title: "",
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <EditModal id={_.id}/>
                <button className="icon-delete" onClick={()=>{
                    deleteUser(_.id)
                }}>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_21_223)">
<path d="M0.285713 2.25H4L5.2 0.675C5.35968 0.465419 5.56674 0.295313 5.80478 0.178154C6.04281 0.0609948 6.30529 0 6.57143 0L9.42857 0C9.69471 0 9.95718 0.0609948 10.1952 0.178154C10.4333 0.295313 10.6403 0.465419 10.8 0.675L12 2.25H15.7143C15.7901 2.25 15.8627 2.27963 15.9163 2.33238C15.9699 2.38512 16 2.45666 16 2.53125V3.09375C16 3.16834 15.9699 3.23988 15.9163 3.29262C15.8627 3.34537 15.7901 3.375 15.7143 3.375H15.0393L13.8536 16.4637C13.8152 16.8833 13.6188 17.2737 13.3029 17.558C12.987 17.8423 12.5745 17.9999 12.1464 18H3.85357C3.42554 17.9999 3.01302 17.8423 2.69711 17.558C2.38121 17.2737 2.18477 16.8833 2.14643 16.4637L0.960713 3.375H0.285713C0.209937 3.375 0.137264 3.34537 0.083683 3.29262C0.0301008 3.23988 0 3.16834 0 3.09375V2.53125C0 2.45666 0.0301008 2.38512 0.083683 2.33238C0.137264 2.27963 0.209937 2.25 0.285713 2.25ZM9.88571 1.35C9.8323 1.28034 9.76324 1.22379 9.68393 1.18475C9.60463 1.14572 9.51723 1.12527 9.42857 1.125H6.57143C6.48277 1.12527 6.39537 1.14572 6.31606 1.18475C6.23676 1.22379 6.1677 1.28034 6.11429 1.35L5.42857 2.25H10.5714L9.88571 1.35ZM3.28571 16.3617C3.29748 16.5019 3.36245 16.6325 3.46768 16.7277C3.57292 16.8228 3.7107 16.8754 3.85357 16.875H12.1464C12.2893 16.8754 12.4271 16.8228 12.5323 16.7277C12.6376 16.6325 12.7025 16.5019 12.7143 16.3617L13.8929 3.375H2.10714L3.28571 16.3617Z" fill="#FEAF00" />
                        </g>
                        <defs>
                            <clipPath id="clip0_21_223">
                                <rect width="16" height="18" fill="white" transform="matrix(-1 0 0 1 16 0)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </Space>
        ),
    },
];
    // delete user
    const { dataTable } = props
     const deleteUser = async (id) => {

        try {
            const result = await axios({
                url: `https://66179268ed6b8fa434830f0b.mockapi.io/api/students/${id}`,
                method: 'Delete',
    
            });
            if (result.status === 200) {
              
                window.location.reload();
            } else {
             
            }
    
        } catch (error) {
          
            console.log(error)
        }
    }
    
    return (
        <div className='listStudents'>
            <div className='titleStudents'>
                <div><label> Students List</label></div>
             <AddModal></AddModal>
            </div>
            <div>
            </div>
            <div>
                <Table columns={columns} dataSource={dataTable}
                    pagination={{
                        defaultPageSize: 6, hideOnSinglePage: true, showSizeChanger: false
                    }}
                />
                <div>
                </div>
            </div>
        </div>
    )
}