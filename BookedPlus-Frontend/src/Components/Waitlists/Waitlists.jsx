
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
                        <button className="btn-edit">Edit</button>
                        <button className="btn-delete">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        {/* Add Pagination here */}
        <button onClick={() => console.log('Navigate to Add Waitlist Form')}>Add Waitlist</button>
    </div>
);

export default Waitlists;
