import React, { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../../../config'
import AdminGroupModal1 from './AdminGroupModal1'
import { useParams } from 'react-router-dom'
const Group = () => {

    const params = useParams()
    const [modal1, setModal1] = useState(false);
    const [students, setStudents] = useState('')
    let { id } = useParams()

    // const getAllStudents = async () => {
    //     let res = await axios.get(`${config.url}/admin/students`, {
    //         headers: {
    //             authorization: window.localStorage.getItem("token")
    //         }
    //     })
    //     setStudents(res.data.data)
    // }
    useEffect(() => {
        getAllGroupStudents()
    }, [])
    const getAllGroupStudents = async (idGroup) => {
        let res = await axios.get(`${config.url}/admin/groups/${id}?idTeacher=${window.localStorage.getItem('teacherID')}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setStudents(res.data.students)
    }
    const chModal1 = () => {
        setModal1(!modal1)
    }
    const delStudentFromGroup = async (e,id) => {
        let res = await axios.delete(`${config.url}/admin/students/manage?idGroup=${params.id}&idTeacher=${params.idTeacher}&idStudent=${id}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        window.location.reload()
    }


    const postStudent = async () => {
        let res = await axios.post(`${config.url}/admin/students/manage?idTeacher=${window.localStorage.getItem('teacherID')}&idGroup=${window.localStorage.getItem('groupID')}&idStudent=${window.localStorage.getItem('studentID')}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        }, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        // setGroups(res.data.data.group)
    }
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
                                <th scope="col" className="px-6 py-3">
                                    Absend
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Score
                                </th>
                                <th scope="col" className="px-6 py-3 text-right w-32">
                                    <button onClick={chModal1} data-modal-target="post-modal" data-modal-toggle="post-modal" href="#" className="post-medium text-lg text-blue-600 dark:text-blue-500 hover:underline"><i
                                        className="fa-solid fa-square-plus"></i></button>
                                    <span className="sr-only">Close modal</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                students.length >0?
                            students?.map((student, i) => {
                                return (
                                    <tr key={i} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-10 dark:text-white">
                                            {i + 1}
                                        </th>
                                        <td className="px-6 py-4">
                                            {student.firstName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.attendance.absend}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.attendance.score}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.attendance.score}
                                        </td>
                                        <td className="px-6 py-4 text-right w-32">
                                            <a onClick={(e)=>{delStudentFromGroup(e,student._id)}} className="cursor-pointer ml-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"><i
                                                className="fa-solid fa-trash"></i></a>
                                        </td>
                                    </tr>
                                )
                            }):null
                            }
                        </tbody>
                    </table>
                </div>
                {modal1 && <AdminGroupModal1 fn={chModal1} />}
                {/* {modal1 && <div onClick={chModal1} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>} */}
            </div>
        </div>
    )
}

export default Group
