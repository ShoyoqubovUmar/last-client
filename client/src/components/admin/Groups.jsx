import React, { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../../../config'
import GroupModal1 from './GroupModal1'
import GroupModal2 from './GroupModal2'
import { useParams } from 'react-router-dom'
const Groups = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [groups, setGroups] = useState([])
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [groupID, setGroupID] = useState('')

    // const [teacherID, setTeacherID] = useState('')
    // const getID = (id) => { setTeacherID(id) }
    const getID = (id) => { setGroupID(id) }
    

    const delGroup = async (id) => {
        let res = await axios.delete(`${config.url}/admin/groups?idGroup=${id}&idTeacher=${window.localStorage.getItem('teacherID')}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        window.location.reload()
    }
    const getAllGroup = async () => {
        let res = await axios.get(`${config.url}/admin/groups?idTeacher=${window.localStorage.getItem('teacherID')}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setGroups(res.data.data.group)
    }
    useEffect(() => {
        getAllGroup()
    }, [])

    const chModal1 = () => {
        setModal1(!modal1)
    }
    const chModal2 = () => {
        setModal2(!modal2);
    };
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

    return (
        <div className={`App ${darkMode ? 'dark' : 'light'}`}>
            <div className="bg-white dark:bg-gray-900 h-screen pt-10">
                <div className="text-center fixed top-5  right-6">
                <button onClick={toggleDarkMode} id="theme-toggle" type="button"
              className="text-center text-gray-500 px-4 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-3 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              {darkMode == true ? <i className="text-2xl fa-solid fa-moon"></i> :
                <i className="text-2xl fa-solid fa-sun"></i>}
            </button>
                </div>
                <div className="container w-10/12 mx-auto py-12">

                    <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Day
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Time
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right w-32">
                                        <button onClick={chModal1} data-modal-target="post-modal" data-modal-toggle="post-modal" href="#" className="post-medium text-lg text-blue-600 dark:text-blue-500 hover:underline"><i
                                            className="fa-solid fa-square-plus"></i></button>
                                        <span className="sr-only">Close modal</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {groups.map((item, i) => {
                                    return (
                                        <tr key={item._id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-10 dark:text-white">
                                                {i + 1}
                                            </th>
                                            <td className="px-6 py-4">
                                                <a href={`/admin/group/${item._id}/${window.localStorage.getItem('teacherID')}`}>{item.title}</a>
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.day}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.time}
                                            </td>
                                            <td className="px-6 py-4 text-right w-32">
                                                <button onClickCapture={() => { getID(item._id) }} onClick={chModal2}
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><i
                                                        className="fa-solid fa-pen"></i></button>
                                                <a onClick={() => { delGroup(item._id) }} className="ml-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"><i
                                                    className="fa-solid fa-trash"></i></a>
                                            </td>
                                        </tr>
                                    )

                                })}
                            </tbody>
                        </table>
                    </div>
                    {modal1 && <GroupModal1 fn={chModal1} />}
                    {modal2 && <GroupModal2 fn={chModal2} groupID={groupID} />}

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
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nomi" required />
                                    </div>
                                    <div className="w-full">
                                        <input type="number" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age" required />
                                    </div>
                                    <div className="w-full">
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Groups" required />
                                    </div>
                                </form>
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
                </div>
                {modal1 && <div onClick={chModal1} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>}
                {modal2 && <div onClick={chModal2} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>}

            </div>
        </div>
    )
}

export default Groups
