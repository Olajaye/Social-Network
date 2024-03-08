import { Outlet } from 'react-router-dom'
import Topbar from '../../components/Topbar/Topbar'

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  )
}

export default Layout