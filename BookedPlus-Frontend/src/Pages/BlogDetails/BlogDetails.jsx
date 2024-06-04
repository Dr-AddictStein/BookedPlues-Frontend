import { Link } from "react-router-dom";
import "./BlogDetails.css";
import { useEffect, useState } from "react";
import image from "../../assets/images/7.jpeg";
import { useParams } from "react-router-dom";
import moment from "moment";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const BlogDetails = () => {
  const { blog_id } = useParams();
  const [scrollTopBtnVisible, setScrollTopBtnVisible] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  const [author, setAuthor] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [audioSource, setAudioSource] = useState("");

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(
        `http://194.238.17.44/api/blog/${blog_id?.split(":")[1]}`
      );

      const data = await response.json();
      if (response.ok) {
        setBlogs(data);
        setAuthor(data.author);
        if (data.audio && data.audio !== "null") {
          const trimmedAudio = data.audio.slice(8);
          setAudioSource(`http://194.238.17.44/uploads/${trimmedAudio}`);
        }
      }
    };
    fetchBlogs();
  }, [blog_id]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolledPercentage = (winScroll / height) * 100;

      if (winScroll > 20) {
        setScrollTopBtnVisible(true);
      } else {
        setScrollTopBtnVisible(false);
      }

      setScrolled(100 - scrolledPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const scrollToTop = () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto content-bg fade-in-up text-gray-900">
        <header className="mb-6 text-center">
          <h1 className="responsive-heading font-bold mb-4 text-white">
            {blogs?.headline}
          </h1>
          {blogs?.audio !== "null" && (
            <div className="flex flex-col items-center mb-4">
              {audioSource && (
                <>
                  <p className="mb-2 text-white">Listen or read the blog:</p>
                  <audio controls className="w-full">
                    <source src={audioSource} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </>
              )}
            </div>
          )}
          <div className="flex items-center justify-center mb-4">
            <img
              src={`http://194.238.17.44/${author?.image}`}
              alt="Author Image"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="text-xl font-semibold text-white">
                {author?.firstname + " " + author?.lastname}
              </p>
              <p className="text-gray-400">
                {moment(blogs?.createdAt).format("MMMM DD, YYYY")}
              </p>
            </div>
          </div>
        </header>

        <section className="prose prose-lg">
          {blogs?.body?.map((u) => {
            return (
              <div key={u._id}>
                {u.image && (
                  <div className="my-6">
                    <img
                      src={`http://194.238.17.44/${u.image}`}
                      alt="Example Image 1"
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
                {u.header && (
                  <h2 className="font-bold text-2xl mt-6 mb-2 text-white">
                    {u.header}
                  </h2>
                )}
                <div className="  bg-opacity-50 text-white  rounded-b-lg ">
                  <p className="text-sm bg-transparent text-[17px]" style={{ lineHeight: '1.75' }}>
                    {ReactHtmlParser(u.desc)}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
