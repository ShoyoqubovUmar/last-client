import axios from "axios";
import config from "../../../config";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

export default () => {
    const [groups, setGroups] = useState([])
    let { id } = useParams('idTeacher')
    const getGrId = (id) => {
        window.localStorage.setItem('GrId', id)
    }

    const get = async () => {
        let res = await axios.get(`${config.url}/teacher`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setGroups(res.data.data.group)
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <>
            <div className="bg-white dark:bg-gray-900 h-screen pt-10">
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
                                    <th scope="col" className="px-6 py-3">
                                        Students
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
                                                <a href="">{item.title}</a>
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.day}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.time}
                                            </td>
                                            <td className="px-6 py-4">
                                                <a onClick={() => { getGrId(item._id) }} href={`/teacher/students/${item._id}`}>{item.students.length}</a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

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
            </div>
        </>
    )
}