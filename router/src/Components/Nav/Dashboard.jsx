import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h3>This is Dashboard section</h3>
      <Link to= '/dashboard/courses'>Get more info</Link><br />
      <Link to="/dashboard/mock-test">Test</Link>
      <Outlet/>
    </div>
  )
}

export default Dashboard
