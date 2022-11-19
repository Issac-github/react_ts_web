import { RouteObject, createHashRouter } from 'react-router-dom'
// import { lazy } from 'react'

// const Home = lazy(() => import('../views/home/index'))
import LimitUp from '../views/LimitUp'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LimitUp />
  }
]

const router = createHashRouter(routes)

export default router
