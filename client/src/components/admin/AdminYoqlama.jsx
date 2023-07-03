import React, { useState } from 'react'

const AdminYoqlama = () => {

  const [darkMode, setDarkMode] = useState(false);

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
                <h1 className="text-gray-500 dark:text-gray-400 text-2xl">GROUP 1</h1>

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
                                <th scope="col" className="px-4 py-3">
                                    adbsend
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    score   
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
                                <td className="tab w-full px-6 py-4 text-right w-32 flex gap-16 items-center">
                                    <h1 className='text-right'>true</h1>
                                    <h1>5</h1>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        </div>

    )
}

export default AdminYoqlama
