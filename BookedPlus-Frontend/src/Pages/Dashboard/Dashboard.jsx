import { useEffect, useState } from 'react';
import Authors from '../../Components/Authors/Authors';
import BlogPost from '../../Components/BlogPost/BlogPost';
import Waitlists from '../../Components/Waitlists/Waitlists';
import './Dashboard.css'
import Sidebar from '../../Components/Sidebar/Sidebar';

const Dashboard = () => {
    const [currentSection, setCurrentSection] = useState('waitlists');
    const itemsPerPage = 10;

    


    const showSection = (section) => {
        setCurrentSection(section);
    };



    
    return (
        <div className="app">
            <Sidebar showSection={showSection} />
            <div className="content">
                {currentSection === 'waitlists' && <Waitlists  />}
                {currentSection === 'authors' && <Authors  />}
                {currentSection === 'blogs' && <BlogPost data={blogData} editBlog={editBlog} deleteBlog={deleteBlog} />}
            </div>
        </div>
    );
};

export default Dashboard;