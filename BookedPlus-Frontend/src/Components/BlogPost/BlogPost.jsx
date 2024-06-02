import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const BlogPost = () => {
  const [blogData, setblogData] = useState([]);
  const fetchBlogs = async () => {
    const response = await fetch("http://localhost:4000/api/blog/");

    const data = await response.json();
    if (response.ok) {
      setblogData(data);
      console.log("sss", data);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:4000/api/blog/" + e.target.value,
      {
        method: "DELETE",
      }
    );

    fetchBlogs();

    const data = await response.json();

    console.log(data);
  };
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
          {blogData.map((u, index) => {
            return (
              <tr key={u._id}>
                <td>
                  <img src={u.thumbnail} alt="Blog" />
                </td>
                <td>{u.headline}</td>
                <td>{u.author.firstname + ' ' + u.author.lastname}</td>
                <td>{moment(u.createdAt).format("MMMM DD, YYYY")}</td>
                <td>
                  {/* <Link to={"/updateblog"}>
                    <button className="btn-edit">Edit</button>
                  </Link> */}
                  <button className="btn-delete" value={u._id}
                    onClick={handleDelete}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Add Pagination here */}
      <Link to={"/addblog"}>
        <button className="text-black mt-3 text-left">Add Blog</button>
      </Link>
    </div>
  );
};

export default BlogPost;
