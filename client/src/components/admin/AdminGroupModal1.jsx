import axios from "axios";
import config from "../../../config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default ({ fn }) => {
    const params = useParams()
    const [students, setStudents] = useState([])
    const [groupID, setGroupID] = useState([])
    const getID = (id) => { setGroupID(id) }
    const getAllStudents = async () => {
        let res = await axios.get(`${config.url}/admin/students`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setStudents(res.data.data)
    }
    useEffect(() => {
        getAllStudents()
    }, [])
    const addStudentToGroup = async (e,id) => {
        console.log(id);
        console.log(params);

        let res = await axios.post(`${config.url}/admin/students/manage?idTeacher=${params.idTeacher}&idGroup=${params.id}&idStudent=${id}`, {
            
        },{
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        console.log(res);
        // setGroups(res.data.data.group)
    }
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
                                        First Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Parents number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Add
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((item, i) => {
                                    return (
                                        <tr key={item._id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-10 dark:text-white">
                                                {i + 1}
                                            </th>
                                            <td className="px-6 py-4">
                                                {item.firstName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.lastName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.phone}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item?.parentsNumber?.mother}
                                            </td>
                                            <td scope="col" className="px-6 py-3 text-left w-32">
                                                <button onClick={(e)=>{addStudentToGroup(e,item._id)}}>
                                                <i className="fa-solid fa-square-plus"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
                
            </div>
        </>
    )
}