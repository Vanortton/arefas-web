import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Auth from './components/pages/Auth/Auth'
import Dashboard from './components/pages/Dashboard'
import Form from './components/pages/Form/Form'
import Members from './components/pages/Members/Members'
import NotFound from './components/pages/NotFound/NotFound'
import { FormProvider } from './contexts/FormContext'

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
                    path: 'members',
                    index: true,
                    element: <Members />,
                },
                {
                    path: 'members/form',
                    element: (
                        <FormProvider>
                            <Form />
                        </FormProvider>
                    ),
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
