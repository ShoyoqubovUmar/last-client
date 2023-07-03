import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import config from '../../../config';
import { useParams } from 'react-router-dom';
const TeacherStudents = () => {
  const yoqlamaPage = () => { 
    window.location.replace('/yoqlama')
}



    const [darkMode, setDarkMode] = useState(false);
    const [students, setStudents] = useState('')
    let params = useParams("id")
    useEffect(() => {
      // console.log(id);
      getAllStudents()
  }, [])
  const getAllStudents = async (id) => {
      let res = await axios.get(`${config.url}/teacher/group/${params.id}/?idTeacher=${window.localStorage.getItem('teacherID')}`, {
          headers: {
              authorization: window.localStorage.getItem("token")
          }
      })
      console.log(res);
      setStudents(res.data.students)
  }



  //   const get = async () => {
  //   let res = await axios.get(`${config.url}/teacher`, {
  //     headers: {
  //       authorization: window.localStorage.getItem("token")
  //     }
  //   })
  //   console.log(res);
  //   // setStudentS(res.data.data)
  // }
  // useEffect(() => {
  //   get()
  // }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <main className="bg-white dark:bg-gray-900 h-screen pt-10">
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
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Parents Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Score
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Absend
                    </th>
                    <th  scope='col' className='px-6 py-3'>
                    <a  onClick={yoqlamaPage} href="#" className="mr-2 post-medium text-lg text-blue-600 dark:text-blue-500 hover:underline"><i className="fa-solid fa-list-check"></i></a>
                    </th>
                  </tr>
                </thead>
                
                <tbody>
                  {

                    students.length >0?
                    students.map((item, i) => {
                    console.log(item.attendance.reason)
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
                          {item.phone}
                        </td>
                        {/* <td className="px-6 py-4">
                          {item.parentsNumber.mother ?item.parentsNumber.mother : item.parentsNumber.father}
                        </td> */}
                        <td
                          className="px-6 py-4">
                          {item.email}
                        </td>
                        <td
                          className="px-6 py-4">
                            {item?.attendance[item.attendance.length - 1]?.score}
                          {/* {item.attendance.map(elem=>{
                            console.log(elem);
                          })} */}
                        </td>
                        <td
                          className="px-6 py-4">
                            {item?.attendance[item.attendance.length - 1]?.reason==true?'true':'false'}
                          {/* {item.attendance.map(elem=>{
                            console.log(elem);
                          })} */}
                        </td>
                      </tr>
                    )
                  }):null
                  }
                </tbody>
              </table>
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
              </div>
            </div>
          </div>
          {/* <!-- Modal profile --> */}
          <div id="profile-modal" tabIndex="-1" aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-md max-h-full">
              {/* <!-- Modal content --> */}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default TeacherStudents