import React from 'react'
import { Space, Table, Tag } from 'antd';
import "./StudentTable"
import AddModal from '../PopUp/AddModal';
import moment from 'moment';

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
        render: (createdAt) => moment(createdAt._d).format('DD-MMM , YYYY'),

    },
    {
        title: "",
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <button className="icon-edit"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_21_225)">
                        <path d="M18.3033 2.08777L16.9113 0.695801C16.4478 0.231934 15.8399 0 15.2321 0C14.6242 0 14.0164 0.231934 13.5525 0.69543L0.475916 13.772L0.00462689 18.0107C-0.0547481 18.5443 0.365701 19 0.88783 19C0.920858 19 0.953885 18.9981 0.987654 18.9944L5.22332 18.5265L18.3036 5.44617C19.231 4.51881 19.231 3.01514 18.3033 2.08777ZM4.67818 17.3924L1.2259 17.775L1.61035 14.3175L11.4031 4.52475L14.4747 7.59629L4.67818 17.3924ZM17.4639 4.60676L15.3141 6.7565L12.2426 3.68496L14.3923 1.53521C14.6164 1.31107 14.9148 1.1875 15.2321 1.1875C15.5494 1.1875 15.8474 1.31107 16.0719 1.53521L17.4639 2.92719C17.9266 3.39031 17.9266 4.14363 17.4639 4.60676Z" fill="#FEAF00" />
                    </g>
                    <defs>
                        <clipPath id="clip0_21_225">
                            <rect width="19" height="19" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                </button>
                <button className="icon-delete">
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
export default function StudentTable(props) {
    const { dataTable } = props
    return (
        <div className='listStudents'>
            <div className='titleStudents'>
                <div><label> Students List</label></div>
                <div className='buttonIcon'><svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_21_315)">
                        <path d="M12.6 12.375H1.39998C0.157481 12.375 -0.472519 13.8574 0.411231 14.7211L6.01123 20.2211C6.55811 20.7582 7.44623 20.7582 7.99311 20.2211L13.5931 14.7211C14.4681 13.8574 13.8425 12.375 12.6 12.375ZM6.99998 19.25L1.39998 13.75H12.6L6.99998 19.25ZM1.39998 9.625H12.6C13.8425 9.625 14.4725 8.14257 13.5887 7.2789L7.98873 1.7789C7.44186 1.24179 6.55373 1.24179 6.00686 1.7789L0.406856 7.2789C-0.468144 8.14257 0.157481 9.625 1.39998 9.625ZM6.99998 2.74999L12.6 8.24999H1.39998L6.99998 2.74999Z" fill="#FEAF00" />
                    </g>
                    <defs>
                        <clipPath id="clip0_21_315">
                            <rect width="14" height="22" fill="white" />
                        </clipPath>
                    </defs>
                </svg> <AddModal></AddModal>
                </div>
            </div>
            <div>
                <Table columns={columns} dataSource={dataTable}
                    pagination={{
                        defaultPageSize: 6, hideOnSinglePage: true, showSizeChanger: false
                    }}
                />;
            </div>
        </div>
    )
}
