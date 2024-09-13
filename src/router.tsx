import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'
import Auth from './components/pages/Auth/Auth'
import Dashboard from './components/pages/Dashboard'
import Members from './components/pages/Members/Members'
import MembersForm from './components/pages/MembersForm/MembersForm'
import NotFound from './components/pages/NotFound/NotFound'
import Users from './components/pages/Users/Users'

export default function AppRouter() {
    const routes = [
        {
            path: '/',
            element: <Auth />,
        },
        {
            path: '/dashboard',
            element: <Dashboard />,
            children: [
                {
                    index: true,
                    element: (
                        <Navigate
                            to='members'
                            replace
                        />
                    ),
                },
                {
                    path: 'members',
                    element: <Members />,
                },
                {
                    path: 'members-form',
                    element: <MembersForm />,
                },
                {
                    path: 'users',
                    element: <Users />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    >
                        {route.children?.map((child, index) => (
                            <Route
                                key={index}
                                index={child.index}
                                path={child.path}
                                element={child.element}
                            />
                        ))}
                    </Route>
                ))}
            </Routes>
        </Router>
    )
}
