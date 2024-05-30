import { useState } from 'react';
import Authors from '../../Components/Authors/Authors';
import BlogPost from '../../Components/BlogPost/BlogPost';
import Waitlists from '../../Components/Waitlists/Waitlists';
import './Dashboard.css'
import Sidebar from '../../Components/Sidebar/Sidebar';

const Dashboard = () => {
    const [currentSection, setCurrentSection] = useState('waitlists');
    const itemsPerPage = 10;

    const [waitlistData, setWaitlistData] = useState(Array.from({ length: 40 }, (_, i) => ({
        firstName: `First${i + 1}`,
        lastName: `Last${i + 1}`,
        restaurant: `Restaurant${i + 1}`,
        email: `user${i + 1}@example.com`,
        phone: `123-456-78${i.toString().padStart(2, "0")}`,
        date: `2024-05-${((i % 31) + 1).toString().padStart(2, "0")}`,
    })));

    const [blogData, setBlogData] = useState(Array.from({ length: 40 }, (_, i) => ({
        title: `Blog Post ${i + 1}`,
        author: `Author ${i + 1}`,
        date: `2024-05-${((i % 31) + 1).toString().padStart(2, "0")}`,
    })));

    const [authors, setAuthors] = useState(Array.from({ length: 40 }, (_, i) => ({
        firstName: `AuthorFirst${i + 1}`,
        lastName: `AuthorLast${i + 1}`,
        image: "./5.jpeg",
        date: `2024-01-${((i % 31) + 1).toString().padStart(2, "0")}`,
    })));

    const showSection = (section) => {
        setCurrentSection(section);
    };

    const editWaitlist = (waitlist) => {
        console.log('Edit Waitlist:', waitlist);
    };

    const deleteWaitlist = (email) => {
        setWaitlistData(waitlistData.filter(waitlist => waitlist.email !== email));
    };

    const editBlog = (title) => {
        console.log('Edit Blog:', title);
    };

    const deleteBlog = (title) => {
        setBlogData(blogData.filter(blog => blog.title !== title));
    };

    const editAuthor = (author) => {
        console.log('Edit Author:', author);
    };

    const deleteAuthor = (firstName, lastName) => {
        setAuthors(authors.filter(author => author.firstName !== firstName && author.lastName !== lastName));
    };
    return (
        <div className="app">
            <Sidebar showSection={showSection} />
            <div className="content">
                {currentSection === 'waitlists' && <Waitlists data={waitlistData} editWaitlist={editWaitlist} deleteWaitlist={deleteWaitlist} />}
                {currentSection === 'authors' && <Authors data={authors} editAuthor={editAuthor} deleteAuthor={deleteAuthor} />}
                {currentSection === 'blogs' && <BlogPost data={blogData} editBlog={editBlog} deleteBlog={deleteBlog} />}
            </div>
        </div>
    );
};

export default Dashboard;