import React, { useRef, useState } from 'react'
import axios from 'axios';
import config from '../../../config';
export default ({ fn }) => {
    let inp1 = useRef(null)
    let inp2 = useRef(null)
    let inp3 = useRef(null)
    const addGroup = async (id)=>{
        let user={
          day: inp1.current.value,
          title: inp2.current.value,
          time: inp3.current.value,
      }
      console.log(user);
        let res = await axios.post(`${config.url}/admin/groups?idTeacher=${window.localStorage.getItem('teacherID')}`, user,{
            headers:{
                authorization:window.localStorage.getItem("token")
              }
        })
        window.location.reload()
      }
      
    return (
        <div tabIndex="-1" aria-modal="true" role="dialog"
            className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex">
            <div className="relative w-10/12 max-h-full">
                {/* <!-- Modal content --> */}
                <div className="w-full relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" onClick={fn}
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="w-full px-6 py-6 lg:px-8 flex flex-col">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Post</h3>
                        <form className="flex flex-col items-center gap-12">
                        <div className="flex items-center gap-12">
                            <div className="w-full">
                                <input ref={inp1} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="day" required />
                            </div>
                            <div className="w-full">
                                <input ref={inp2} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
                            </div>
                            <div className="w-full">
                                <input ref={inp3} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="time" required />
                            </div>
                            </div>
                            <button onClick={addGroup} type="button"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}