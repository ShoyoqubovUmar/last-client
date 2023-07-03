import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import config from '../../../config';
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
// import Profile from './Profile';

const Table = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [teacher, setTeacher] = useState([]);
  const [teacherID, setTeacherID] = useState('')


  const getID = (id) => { setTeacherID(id) }
  const getTeacherID = (id) => {
    window.localStorage.setItem("teacherID", id)
  }
  const delTeacher = async (id) => {
    let res = await axios.delete(`${config.url}/admin/teachers/${id}`, {
      headers: {
        authorization: window.localStorage.getItem("token")
      }
    })
    console.log(res);
    window.location.reload()
  }
  // const [profile, setProfile] = useState(false);
  const get = async () => {
    let res = await axios.get(`${config.url}/admin/teachers`, {
      headers: {
        authorization: window.localStorage.getItem("token")
      }
    })
    console.log(res);
    setTeacher(res.data.data)
  }
  useEffect(() => {
    get()
  }, [])

  const chModal1 = () => {
    setModal1(!modal1);
  };
  // const profile1 = () => {
  //   setProfile(!profile);
  // };
  const chModal2 = () => {
    setModal2(!modal2);
  };
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
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Groups
                    </th>
                    <th scope="col" className="px-6 py-3 text-right w-32">
                      <button onClick={chModal2} data-modal-target="post-modal" data-modal-toggle="post-modal" className="font-medium text-lg text-blue-600 dark:text-blue-500 hover:underline"><i
                        className="fa-solid fa-square-plus"></i></button>
                      <span className="sr-only">Close modal</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teacher.map((item, i) => {
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
                        <td className="px-6 py-4">
                          {item.subject}
                        </td>
                        <td
                          className="px-6 py-4">
                          {item.email}
                        </td>
                        <td
                          className="px-6 py-4">
                          <a onClick={() => { getTeacherID(item._id) }} href="/admin/groups">{item.group.length}</a>
                        </td>
                        <td className="px-6 py-4 text-right w-32">
                          <button onClickCapture={() => { getID(item._id) }} onClick={chModal1}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><i
                              className="fa-solid fa-pen"></i></button>

                          <button onClick={() => { delTeacher(item._id) }} className="ml-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"><i
                            className="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

          </div>

          {/* <!-- Modal authentication --> */}
          {modal2 && <Modal2 fn={chModal2} />}
          {modal1 && <Modal1 fn={chModal1} teacherID={teacherID} />}
          {/* {profile && <Profile />} */}
          {/* <!-- Modal post --> */}
          <div id="post-modal" tabIndex="-1" aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-10/12 max-h-full">
              {/* <!-- Modal content --> */}
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
                      {/* <!-- Dropdown menu --> */}

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
          {modal1 && <div onClick={chModal1} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>}
          {modal2 && <div onClick={chModal2} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>}
          {/* {profile && <div onClick={profile1} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>} */}
        </main>
      </div>
    </>
  )
}

export default Table
