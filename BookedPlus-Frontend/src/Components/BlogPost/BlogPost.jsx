import { useRef } from 'react';
import JoditEditor from "jodit-react";
import { Link } from 'react-router-dom';

const BlogPost = () => {
    const editor1 = useRef(null);
    return (
        <div className="card">
            <div className="card-header">Blog Posts</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="./5.jpeg" alt="Blog" /></td>
                        <td>blog.title</td>
                        <td>blog.author</td>
                        <td>blog.date</td>
                        <td>
                            <Link to={'/updateblog'}>
                                <button className="btn-edit">Edit</button>
                            </Link>
                            <button className="btn-delete">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* Add Pagination here */}
            <Link to={'/addblog'}>
                <button className='text-black mt-3 text-left'>Add Blog</button>
            </Link>
        </div>
    );
};

export default BlogPost;