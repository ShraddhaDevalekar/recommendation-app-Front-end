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

     
            <div className="Banner2">
            <div class="card1" >
        <img src="https://www.pratilipi.com/images/feature-read.webp" class="card-img-top1" alt="..." />
        <div class="card-body1">
          <h4 class="card-title1">Read</h4>
          <p class="card-text1">Discover thousands of stories, poems, articles, magazines, novels, essays, etc for free. Read popular genres. Save your favourites in your own library. Contents present in the Pratilipi library are filled with endless emotions, thoughts, verses, and possibilities.</p>
        </div>
      </div>

      <div class="card1" >
        <img src="https://www.pratilipi.com/images/feature-write.webp" class="card-img-top1" alt="..." />
        <div class="card-body1">
          <h5 class="card-title1">Write</h5>
          <p class="card-text1">Self-publish on Pratilipi and join the largest community of writers. Create new drafts, add images and publish right from the app. Pratilipi provides a hassle free and advanced writer panel to make your act of writing a little less scary and a whole lot comforting.

</p>
        </div>
      </div>

      <div class="card1" >
        <img src="https://www.pratilipi.com/images/feature-involve.webp" class="card-img-top1" alt="..." />
        <div class="card-body1">
          <h5 class="card-title1">Get Involed</h5>
          <p class="card-text1">Pratilipi brings writers and readers on a single platform. Follow authors to see what they are publishing next, review and discuss. Share your favourites with your fellow readers. Here writers can interact directly with readers and readers can often evolve into writers.</p>
        </div>
      </div>
      </div >
      </div>
      );
      }
export default Home;