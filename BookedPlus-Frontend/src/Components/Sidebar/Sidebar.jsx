import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const Sidebar = ({ showSection }) => {
  const {logout}=useLogout();
  return <div className="sidebar">
    <nav id="sidebarNav">
      <Link to="#" onClick={() => showSection('waitlists')}>Waitlists</Link>
      <Link to="#" onClick={() => showSection('authors')}>Authors</Link>
      <Link to="#" onClick={() => showSection('blogs')}>Blog Posts</Link>
      <Link to="#" id="logout" onClick={()=>{logout();}}>Logout</Link>
    </nav>
  </div>
};

export default Sidebar;
