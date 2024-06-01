import { useEffect, useState } from "react";
import moment from "moment";

const Authors = () => {
  const [authorData, setauthorData] = useState([]);
  const fetchAuthors = async () => {
    const response = await fetch("http://localhost:4000/api/author/");

    const data = await response.json();
    if (response.ok) {
      setauthorData(data);
      console.log("sss", data);
    }
  };
  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:4000/api/author/" + e.target.value,
      {
        method: "DELETE",
      }
    );

    fetchAuthors();

    const data = await response.json();

    console.log(data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    console.error("Error:", formData);

    try {
      const response = await fetch("http://localhost:4000/api/author/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        // If the response is not ok, it might be an HTML error page
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error("Failed to add author");
      }

      const data = await response.json();
      console.log(data);
      fetchAuthors();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = async (e, _id) => {
    e.preventDefault();

    const form = e.target;

    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const image = form.authorImage.value;

    const toSend = { firstname, lastname, image };
    console.log("SOSOSSSS", toSend);

    fetch(`http://localhost:4000/api/author/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toSend),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchAuthors();
      });
  };
  return (
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
          {authorData.map((u, index) => {
            return (
              <tr key={u._id}>
                <td>
                  <img src="" alt="Author" />
                </td>
                <td>{u.firstname}</td>
                <td>{u.lastname}</td>
                <td>
                  {moment(u.createdAt).format("MMMM DD, YYYY h:mm:ss A z")}
                </td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() =>
                      document.getElementById(`my_modal_${index}`).showModal()
                    }
                  >
                    Edit
                  </button>
                  <dialog id={`my_modal_${index}`} className="modal text-black">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <div className="form-container">
                        <h2 id="formTitle">Edit Author</h2>
                        <form
                          onSubmit={(e) => handleEdit(e, u._id)}
                          className=""
                        >
                          <div className="">
                            <div className="">
                              <label htmlFor="" className="">
                                First Name
                              </label>
                              <input
                                id="firstname"
                                type="text"
                                name="firstname"
                                defaultValue={u.firstname}
                                placeholder="firstname"
                                className="block w-full mt-1 mb-7 rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black "
                              />
                              <label htmlFor="" className="">
                                Last Name
                              </label>
                              <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                defaultValue={u.lastname}
                                placeholder="lastname"
                                className="block w-full mt-1 mb-7 rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black  "
                              />
                              <label>Image</label>
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
                          </div>
                          {/* button type will be submit for handling form submission*/}
                          <button
                            type="submit"
                            className="relative py-2.5 px-5 rounded-lg mt-6 bg-green-500 text-white w-full drop-shadow-lg "
                            onClick={() => {
                              document
                                .getElementById(`my_modal_${index}`)
                                .close();
                            }}
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  <button
                    className="btn-delete"
                    value={u._id}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Add Pagination here */}
      <button
        className="text-black mt-3 text-left"
        onClick={() => document.getElementById("my_modal_9").showModal()}
      >
        Add Author
      </button>
      <dialog id={`my_modal_9`} className="modal text-black">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="form-container">
            <h2 id="formTitle">Add Author</h2>
            <form onSubmit={(e) => handleAdd(e)} className="">
              <div className="">
                <div className="">
                  <label htmlFor="" className="">
                    First Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="firstname"
                    className="block w-full mt-1 mb-7 rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black "
                  />
                  <label htmlFor="" className="">
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="lastname"
                    className="block w-full mt-1 mb-7 rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black  "
                  />
                  <label>Image</label>
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
              </div>
              {/* button type will be submit for handling form submission*/}
              <button
                type="submit"
                className="relative py-2.5 px-5 rounded-lg mt-6 bg-green-500 text-white w-full drop-shadow-lg "
                onClick={() => {
                  document.getElementById(`my_modal_9`).close();
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Authors;
