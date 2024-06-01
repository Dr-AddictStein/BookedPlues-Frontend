import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { FiPlusCircle } from "react-icons/fi";
import './custom.css';

const AddBlog = () => {
    const editor1 = useRef(null);
    const [authors, setAuthors] = useState([]);
    const [sections, setSections] = useState([]);
    const [hideIndex, setHideIndex] = useState(-1); // -1 means no button is hidden initially

    // Array to hold refs for each editor in the sections
    const editorRefs = useRef([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/author/')
            .then(res => res.json())
            .then(data => {
                setAuthors(data);
                console.log(data);
            })
            .catch(error => console.log(error))
    }, []);

    const addSection = () => {
        setSections([...sections, { id: sections.length }]);
        setHideIndex(sections.length); // Hide the current button

        // Create a new ref and add it to the array
        editorRefs.current.push(React.createRef());
    };

    const createBlog = (e) => {
        e.preventDefault();
        const form = e.target;
        const thumb = form.thumb.files[0];
        const thumbhead = form.thumbhead.value;
        const thumbdesc = editor1.current.value;
        const headline = form.headline.value;
        const thumbaudio = form.thumbaudio.files[0];
        const author = form.author.value;

        // Collecting section data
        const body = sections.map((section, index) => {
            return {
                image: form[`image-${section.id}`].files[0],
                sectionHeader: form[`sectionHeader-${section.id}`].value,
                desc: editorRefs.current[index].current.value,
            };
        });

        const newBlog = {
            thumb,
            thumbhead,
            thumbdesc,
            headline,
            thumbaudio,
            author,
            body
        };

        console.log(newBlog);
    }

    return (
        <div className="">
            <h2 id="formTitle" className='text-3xl font-semibold text-center pb-5'>Add Blog</h2>
            <form onSubmit={createBlog} id="authorForm">
                <div className="bg-gray-200 p-10 m-10 rounded-md text-black fixing">
                    <div className="form-group">
                        <label>Thumbnail</label>
                        <input type="file" name="thumb" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-group">
                        <label>Thumbnail Head</label>
                        <input type="text" name="thumbhead" required />
                    </div>
                    <div className="form-group">
                        <label>Thumbnail Description</label>
                        <JoditEditor name='thumbdesc' ref={editor1} required />
                    </div>
                    <div className="form-group">
                        <label>Headline</label>
                        <input type="text" name="headline" required />
                    </div>
                    <div className="form-group">
                        <label>Audio</label>
                        <input type="file" name="thumbaudio" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author">
                            {
                                authors.map(singleAuthor => (
                                    <option key={singleAuthor._id}>
                                        {singleAuthor.firstname + ' ' + singleAuthor.lastname}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="flex justify-center">
                    {hideIndex === -1 && (
                        <button type="button" onClick={addSection} className="flex items-center gap-1 text-xl bg-[#4299e1] text-white px-3 py-2 rounded">
                            <FiPlusCircle /> Add Section
                        </button>
                    )}
                </div>
                <div id="destination-div">
                    {sections.map((section, index) => (
                        <div key={section.id}>
                            <div className="bg-gray-200 p-10 m-10 rounded-md text-black fixing">
                                <div className="form-group">
                                    <label>Image</label>
                                    <input type="file" name={`image-${section.id}`} className="file-input file-input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-group">
                                    <label>Header</label>
                                    <input type="text" name={`sectionHeader-${section.id}`} required />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <JoditEditor name={`desc-${section.id}`} ref={editorRefs.current[index]} required />
                                </div>
                            </div>
                            <div className="flex justify-center my-3">
                                {hideIndex === index && (
                                    <button type="button" onClick={addSection} className="flex items-center gap-1 text-xl bg-[#4299e1] text-white px-3 py-2 rounded">
                                        <FiPlusCircle /> Add Section
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="form-actions mx-10">
                    <button type="submit" className="btn-save">Save</button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
