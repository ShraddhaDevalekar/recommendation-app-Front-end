const About = () => {
    return (
       <div>
         <div style={{ minHeight: "100vh", textShadow: '2px 2px #f2f2f2' }} className="container">
         <h1>Revolutionizing<br/>the art of book-reading</h1>
                    <p class="desc">B is a platform which brings readers, writers and their stories together. From the next door neighbour reading stories in the afternoon, to the funny college kid downstairs, millions of people around you are using B to discover, express and share their stories in the language they love.</p>
            </div>
            <div className="container" >
                <div class="stat">
                    <div class="number"><span>2.5</span>Cr+</div>
                    <div class="item">readers</div>
                </div>
                <div class="stat">
                    <div class="number"><span>27</span>L+</div>
                    <div class="item">stories</div>
                </div>
                <div class="stat">
                    <div class="number"><span>2.7</span>L+</div>
                    <div class="item">writers</div>
                </div>
                <div class="stat">
                    <div class="number"><span>12</span></div>
                    <div class="item">languages</div>
                </div>
            </div>
       </div>
    );
}
export default About;
