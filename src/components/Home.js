import "./Home.css";
const Home = () => {
    const fontStyles = ["normal", "italic"];
    return (
        <div
            style={{
                backgroundImage: `url("https://img.freepik.com/premium-vector/people-sit-comfy-armchairs-with-book-tablet-laptop-vector-flat-illustration-man-woman-reading-working-public-library-isolated-white-background-shelves-racks-with-books_198278-10718.jpg?w=1060")`,
                backgroundPosition: `cover`
            }}
        >
            <div style={{ minHeight: "100vh", textShadow: '2px 2px #f2f2f2' }} className="container">
                <p class="appname"><b/>Book Recommendation App</p>
               
                <p class="typewriter"><h1>Lets Explore Your Collection...</h1></p>

            </div>
        </div >
    );
}

export default Home;