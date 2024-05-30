import React from 'react';

const BlogPost = () => {
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
                            <button className="btn-edit">Edit</button>
                            <button className="btn-delete">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* Add Pagination here */}
            <button onClick={() => console.log('Add Blog')}>Add Blog</button>
        </div>
    );
};

export default BlogPost;