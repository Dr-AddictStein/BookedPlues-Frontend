import './Home.css'

const Home = () => {
    return (
        <div className="container mx-auto text-center py-24 px-4">
            <h2 className="text-3xl font-bold mb-4 fade-in-up md:text-5xl">
                Catering Reservations Simplified
            </h2>
            <p className="text-lg mb-8 fade-in-up">
                Join our waitlist now to get an automatic 3-month free trial at our
                launch, or a chance to win a 6-month trial!
            </p>
            <div className="waitlist-box fade-in-up">
                <form>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <button type="submit" className="w-full py-2 transition duration-200">
                        Sign me up!
                    </button>
                </form>
            </div>
            <div className="mt-8 fade-in-up">
                <a
                    href="blogs.html"
                    className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-blue-700 transition duration-200"
                >
                    Learn About Online Catering
                </a>
            </div>
        </div>
    );
};

export default Home;