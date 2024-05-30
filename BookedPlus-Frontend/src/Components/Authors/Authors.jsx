
const Authors = ({ data, editAuthor, deleteAuthor }) => (
    <div className="card">
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
                        <button className="btn-edit">Edit</button>
                        <button className="btn-delete">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        {/* Add Pagination here */}
        <button onClick={() => console.log('Navigate to Add Author Form')}>Add Author</button>
    </div>
);

export default Authors;
