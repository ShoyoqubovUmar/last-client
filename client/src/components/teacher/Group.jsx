import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Attendance from './Attendance'
import Attendance1 from './Attendance1'
const yoqlamaPage = () => { 
    window.location.replace('/yoqlama')
}
const Group = () => {

    // let res = axios
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

    const chModal1 = () => {
        setModal1(!modal1)
    }
    const chModal2 = () => {
        setModal2(!modal2);
    };
    return (
        <div className="bg-white dark:bg-gray-900 h-screen pt-10">
            <div className="text-center fixed top-5  right-6">
            </div>
            <div className="container w-10/12 mx-auto py-12">
                <h1 className="text-gray-500 dark:text-gray-400 text-2xl">Speacial group</h1>

                <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Students
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3 text-right w-32">
                                    <a  onClick={yoqlamaPage} href="#" className="mr-2 post-medium text-lg text-blue-600 dark:text-blue-500 hover:underline"><i className="fa-solid fa-list-check"></i></a>
                                    <a onClick={chModal1} data-modal-target="post-modal" data-modal-toggle="post-modal" href="#" className="post-medium text-lg text-blue-600 dark:text-blue-500 hover:underline"><i
                                        className="fa-solid fa-square-plus"></i></a>
                                    <span className="sr-only">Close modal</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-10 dark:text-white">
                                    1
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4 text-right w-32">
                                    <a onClick={chModal2} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                                        href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><i
                                            className="fa-solid fa-pen"></i></a>
                                    <a data-modal-target="profile-modal" data-modal-toggle="profile-modal"
                                        href="#" className="ml-4 font-medium text-blue-600 dark:text-blue-500 hover:underline"><i
                                            className="fa-solid fa-eye"></i></a>
                                    <a href="#" className="ml-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"><i
                                        className="fa-solid fa-trash"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    {modal1 && <Attendance fn={chModal1} />}
                    {modal2 && <Attendance1 fn={chModal2} />}
            </div>
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-10/12 max-h-full">
                    <div className="w-full relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="w-full px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit</h3>
                            <form className="flex items-center gap-16">
                                <label htmlFor="simple-search" className="sr-only">Ism</label>
                                <div className="w-full">
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ism" required />
                                </div>
                                <div className="w-full">
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="profile-modal" tabIndex="-1" aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="profile-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-8 py-6 lg:px-8">
                            <div className="w-full max-w-md p-3  border-none bg-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 ">
                                <div className="flex justify-end px-4 pt-4">
                                    <button id="dropdownButton" data-dropdown-toggle="dropdown"
                                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                                        type="button">
                                        <span className="sr-only">Open dropdown</span>
                                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                            </path>
                                        </svg>
                                    </button>
                                    <div id="dropdown"
                                        className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2" aria-labelledby="dropdownButton">
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i
                                                        className="fa-solid fa-pen"></i> Edit</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i
                                                        className="fa-solid fa-download"></i> Export Data</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><i
                                                        className="fa-solid fa-trash"></i> Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className=" pb-10">
                                    <div className="Profile flex items-center ">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
                                            src="https://images.unsplash.com/photo-1684611235343-dd6c5fa8f49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                                        <p className="text-yellow-300 ml-3 text-1xl">13<i
                                            className="fa-solid fa-arrow-up ml-1 text-yellow-300 "></i></p>
                                    </div>
                                    <p className="mb-1 text-xl  text-gray-900 dark:text-white"><strong>First Name : </strong>Bobur</p>
                                    <p className="mb-1 text-xl  text-gray-900 dark:text-white"><strong>Last Name : </strong>Axmedov</p>
                                    <p className="mb-1 text-xl  text-gray-900 dark:text-white"><strong>Subject : </strong>Math</p>
                                    <p className="mb-1 text-xl  text-gray-900 dark:text-white"><strong>Groups : </strong>1, 2, 3, 8, 94, 5 </p>
                                    <p className="mb-1 text-xl  text-gray-900 dark:text-white"><strong>Age : </strong>34</p>
                                    <p className="mb-1 text-xl  text-gray-900 dark:text-white"><strong>Email : </strong>boburaxmedov@gmail.com
                                    </p>
                                    <p className="mb-1 text-xl  text-gray-900 dark:text-white"><strong>Password : </strong>12345678</p>
                                    <p className="mb-1 text-xl  text-gray-900 dark:text-white"><strong>Phone number : </strong>+998 93-524-29-44
                                    </p>
                                    <p className="mb-1 text-xl  text-gray-900 dark:text-white"><strong>Adress : </strong>Chilonzor 21-23-28</p>
                                    <div className="flex mt-4 space-x-3 md:mt-6">
                                        <a href="#"
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i
                                                className="fa-solid fa-user-plus"></i></a>
                                        <a href="#"
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-yellow-400 border border-gray-300 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><i
                                                className="fa-solid fa-star"></i></a>
                                        <a href="#"
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"><i
                                                className="fa-solid fa-message"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="post-modal" tabIndex="-1" aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-10/12 max-h-full">
                    <div className="w-full relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="post-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="w-full px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Post</h3>
                            <form className="flex items-center gap-16">
                                <label htmlFor="simple-search" className="sr-only">Ism</label>
                                <div className="flex gap-16 items-center">
                                    <div className="w-full">
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ism" required />
                                    </div>
                                    <div className="w-full">
                                        <input type="number" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age" required />
                                    </div>
                                    <div className="w-full">
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Groups" required />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {modal1 && <div onClick={chModal1} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>}
                {modal2 && <div onClick={chModal2} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>}
            </div>
        </div>
    )
}

export default Group
