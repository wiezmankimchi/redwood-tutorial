import { useTranslation } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'

const AdminPage = () => {
  const { isAuthenticated, logOut } = useAuth()
  const { t, i18n } = useTranslation()
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />
      <div className="rw-scaffold">
        <Toaster />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            {t('AdminPage.title')}
          </h1>
        </header>
      </div>
      <div className="max-w-2xl ">
        <aside className="w-64" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded  dark:bg-gray-800">
            <ul className="space-y-2 list-none">
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">
                    <Link to={routes.posts()}>Posts</Link>
                  </span>
                </button>
              </li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <button
                  target="_blank"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    <Link to={routes.tags()}>Tags</Link>
                  </span>
                </button>
              </li>
              {/* <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <button
                  target="_blank"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                    3
                  </span>
                </button>
              </li> */}
              <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    <Link to={routes.users()}>Users</Link>
                  </span>
                </button>
              </li>
              {/* <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Products
                  </span>
                </button>
              </li> */}
              {isAuthenticated ? (
                <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <button className="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white border-t-2 border-blue-100">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin"
                      viewBox="-5 -3 24 24"
                    >
                      <path d="M3.414 7.828h5.642a1 1 0 1 1 0 2H3.414l1.122 1.122a1 1 0 1 1-1.415 1.414L.293 9.536a.997.997 0 0 1 0-1.415L3.12 5.293a1 1 0 0 1 1.415 1.414L3.414 7.828zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z" />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">
                      <button onClick={logOut}>Sign Out</button>
                    </span>
                  </button>
                </li>
              ) : (
                <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <button className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white border-t-2 border-blue-900">
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin"
                      viewBox="-5 -3 24 24"
                    >
                      <path d="M6.641 9.828H1a1 1 0 1 1 0-2h5.641l-1.12-1.12a1 1 0 0 1 1.413-1.415L9.763 8.12a.997.997 0 0 1 0 1.415l-2.829 2.828A1 1 0 0 1 5.52 10.95l1.121-1.122zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z" />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign In
                    </span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </aside>
        <div className=" gap-4">
          <button
            type="button"
            className="button-dark"
            onClick={() => i18n.changeLanguage('he')}
          >
            he
          </button>
          <button
            className="button-dark"
            onClick={() => i18n.changeLanguage('en')}
          >
            en
          </button>
        </div>
      </div>
    </>
  )
}

export default AdminPage
