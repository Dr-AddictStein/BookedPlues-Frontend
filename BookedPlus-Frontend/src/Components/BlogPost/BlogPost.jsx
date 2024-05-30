import { useRef } from 'react';
import JoditEditor from "jodit-react";

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
                            <button className="btn-edit">Edit</button>
                            <button className="btn-delete">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* Add Pagination here */}
            <button className='text-black mt-3 text-left' onClick={() => document.getElementById('my_modal_3').showModal()}>Add Blog</button>
            <dialog id="my_modal_3" className="modal text-black">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="">
                        <h2 id="formTitle" className='text-3xl font-semibold text-center pb-5'>Add Blog</h2>
                        <form id="authorForm">
                            <div className="form-group">
                                <label for="firstName">Blog Title</label>
                                <input type="text" id="blogtitle" name="firstName" required />
                            </div>
                            <div className="form-group">
                                <JoditEditor name='blogBody' ref={editor1} value={'singleBlog.blogBody'} required />
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn-save">Save</button>
                                <button type="button" className="btn-cancel" onclick="cancelForm()">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BlogPost;