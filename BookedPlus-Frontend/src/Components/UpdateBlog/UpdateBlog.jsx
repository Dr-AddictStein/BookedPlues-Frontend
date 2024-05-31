import { useRef } from "react";
import JoditEditor from "jodit-react";

const UpdateBlog = () => {
    const editor1 = useRef(null);
    return (
        <div className="bg-gray-200 p-10 m-10 rounded-md text-black">
            <div className="">
                <h2 id="formTitle" className='text-3xl font-semibold text-center pb-5'>Update Blog</h2>
                <form id="authorForm">
                    <div className="form-group">
                        <label for="firstName">Blog Title</label>
                        <input type="text" id="blogtitle" name="firstName" required />
                    </div>
                    <div className="form-group">
                    <label for="firstName">Blog Body</label>
                        <JoditEditor name='blogBody' ref={editor1} required />
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
    );
};

export default UpdateBlog;