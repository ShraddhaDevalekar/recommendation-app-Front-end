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
        <p class="appname"><b />Book Recommendation App</p>

        <p class="typewriter"><h1>Lets Explore Your Collection...</h1></p>

      </div>


      <div className="Banner2">
        <div class="card1" >
          <img src="https://www.pratilipi.com/images/feature-read.webp" class="card-img-top1" alt="..." />
          <div class="card-body1">
            <h4 class="card-title1">Read</h4>
            <p class="card-text1">Discover thousands of stories, poems, articles, magazines, novels, essays, etc for free. Read popular genres... filled with endless emotions, thoughts, verses, and possibilities.</p>
          </div>
        </div>

        <div class="card1" >
          <img src="https://www.pratilipi.com/images/feature-write.webp" class="card-img-top1" alt="..." />
          <div class="card-body1">
            <h5 class="card-title1">Explore</h5>
            <p class="card-text1">Explore your book or books and swim into the ocean of books..
            </p>
          </div>
        </div>

        <div class="card1" >
          <img src="https://www.pratilipi.com/images/feature-involve.webp" class="card-img-top1" alt="..." />
          <div class="card-body1">
            <h5 class="card-title1">Get Involed</h5>
            <p class="card-text1">At Your Service brings writers and readers on a single platform..</p>
          </div>
        </div>
      </div >
    </div>
  );
}
export default Home;