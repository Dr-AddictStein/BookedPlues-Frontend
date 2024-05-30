import { Link } from "react-router-dom";

const Sidebar = ({ showSection }) => (
  <div className="sidebar">
    <div className="logo">BookedPlus</div>
    <nav id="sidebarNav">
      <Link to="#" onClick={() => showSection('waitlists')}>Waitlists</Link>
      <Link to="#" onClick={() => showSection('authors')}>Authors</Link>
      <Link to="#" onClick={() => showSection('blogs')}>Blog Posts</Link>
      <Link to="#" id="logout">Logout</Link>
    </nav>
  </div>
);

export default Sidebar;
