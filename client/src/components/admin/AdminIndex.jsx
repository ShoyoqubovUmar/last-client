import React, { useState, useEffect } from 'react'

const AdminIndex = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <main className="bg-white dark:bg-gray-900 h-screen">
        <div className="text-center fixed top-5  right-6">
        <button onClick={toggleDarkMode} id="theme-toggle" type="button"
          className="text-center text-gray-500 px-4 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-3 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
          {darkMode == true ? <i className="text-2xl fa-solid fa-moon"></i> :
            <i className="text-2xl fa-solid fa-sun"></i>}
        </button>
        </div>
        <div className="home w-full h-screen flex items-center justify-center gap-16">


            <div
                className="w-full max-w-sm bg-gray-200 dark:bg-gray-800 border  border-gray-200 dark:border-gray-700 rounded-lg shadow ">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown"
                        className="inline-block text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
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
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                                    Data</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <i className=" fa-solid fa-chalkboard-user text-5xl mb-3 text-gray-900 dark:text-white"></i>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Teachers</h5>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a href="/admin/teachers"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                    </div>
                </div>
            </div>
            
            <div
                className="w-full max-w-sm bg-gray-200 dark:bg-gray-800 border  border-gray-200 dark:border-gray-700 rounded-lg shadow ">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown"
                        className="inline-block text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
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
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                                    Data</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <i className="fa-solid fa-graduation-cap text-5xl mb-3 text-gray-900 dark:text-white"></i>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Students</h5>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a href="/admin/students"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</a>
                    </div>
                </div>
            </div>

        </div>
    </main>
    </div>
  )
}

export default AdminIndex
