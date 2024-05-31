
const Authors = ({ data, editAuthor, deleteAuthor }) => (
    <div className="card text-black">
        <div className="card-header">Authors</div>
        <table className="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date Created</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src='' alt="Author" /></td>
                    <td>author.firstName</td>
                    <td>author.lastName</td>
                    <td>author.date</td>
                    <td>
                        <button className="btn-edit" onClick={() => document.getElementById(`my_modal_4`).showModal()}>Edit</button>
                        <dialog id={`my_modal_4`} className="modal text-black">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className="form-container">
                                    <h2 id="formTitle">Edit Author</h2>
                                    <form id="authorForm">
                                        <div className="form-group">
                                            <label for="firstName">First Name</label>
                                            <input type="text" id="firstName" name="firstName" required />
                                        </div>
                                        <div className="form-group">
                                            <label for="lastName">Last Name</label>
                                            <input type="text" id="lastName" name="lastName" required />
                                        </div>
                                        <div className="form-group">
                                            <label for="authorImage">Image</label>
                                            <input
                                                type="file"
                                                id="authorImage"
                                                name="authorImage"
                                                accept="image/*"
                                            />
                                            <img
                                                id="authorImagePreview"
                                                src="#"
                                                alt="Author Image"
                                                className="hidden"
                                            />
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
                        <button className="btn-delete">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        {/* Add Pagination here */}
        <button className="text-black mt-3 text-left" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Author</button>
        <dialog id="my_modal_3" className="modal text-black">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="form-container">
                    <h2 id="formTitle">Add Author</h2>
                    <form id="authorForm">
                        <div className="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div className="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                        <div className="form-group">
                            <label for="authorImage">Image</label>
                            <input
                                type="file"
                                id="authorImage"
                                name="authorImage"
                                accept="image/*"
                            />
                            <img
                                id="authorImagePreview"
                                src="#"
                                alt="Author Image"
                                className="hidden"
                            />
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

export default Authors;
