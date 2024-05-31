
const Waitlists = ({ data, editWaitlist, deleteWaitlist }) => (
    <div className="card">
        <div className="card-header">Waitlists</div>
        <table className="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Restaurant Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Date Signed Up</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>waitlist.firstName</td>
                    <td>waitlist.lastName</td>
                    <td>waitlist.restaurant</td>
                    <td>waitlist.email</td>
                    <td>waitlist.phone</td>
                    <td>waitlist.date</td>
                    <td>
                        <button className="btn-edit" onClick={() => document.getElementById(`my_modal_4`).showModal()}>Edit</button>
                        <dialog id={`my_modal_4`} className="modal text-black">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className="form-container">
                                    <h2 id="formTitle">Edit Waitlist</h2>
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
                                            <label for="lastName">Restaurant Name</label>
                                            <input type="text" id="restName" name="restName" required />
                                        </div>
                                        <div className="form-group">
                                            <label for="lastName">Email</label>
                                            <input type="text" id="email" name="email" required />
                                        </div>
                                        <div className="form-group">
                                            <label for="lastName">Phone Number</label>
                                            <input type="text" id="phone" name="phone" required />
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
    </div>
);

export default Waitlists;
