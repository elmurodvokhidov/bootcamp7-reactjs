import { GrProjects } from "react-icons/gr";
import { NavLink, Outlet } from 'react-router-dom'

function Projects() {
  return (
    <div className='projects'>

      <span><GrProjects /></span>

      <div className="links">
        <NavLink to={'project1'}>project 1</NavLink>
        <NavLink to={'project2'}>project 2</NavLink>
      </div>

      <Outlet />
    </div>
  )
}

export default Projects