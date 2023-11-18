import { useTranslation } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const BlogLayout = ({ children }) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()
  const { i18n } = useTranslation()

  document.body.dir = i18n.dir()

  return (
    <>
      <header className=" w-auto relative flex justify-between items-center py-4  px-1 lg:px-8 bg-blue-700 text-white">
        <h1 className="text-lg md:text-4xl lg:text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 hover:text-blue-100 transition duration-100 no-underline"
            to={routes.home()}
          >
            Recipe Blog
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center  font-light text-sm md:text-lg lg:text-xl">
            {isAuthenticated && (
              <li>
                <Link
                  className="py-2 px-4 text-blue-100 hover:bg-blue-600 transition duration-100 rounded"
                  to={routes.admin()}
                >
                  Admin
                </Link>{' '}
              </li>
            )}
            <li>
              <Link
                className="py-2 px-4 text-blue-100 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 text-blue-100 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div>
                  <button
                    type="button"
                    onClick={logOut}
                    className="py-2 px-4 text-blue-100 hover:bg-blue-600 rounded duration-100 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="py-2 px-4">
                  Login
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              {currentUser.email}
            </div>
          )}
        </nav>
      </header>
      <main className=" max-w-full mx-auto md:px-8 py-4 md:py-8 lg:py-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
