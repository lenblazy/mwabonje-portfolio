import "./style.css";

const Blog = () => {
  return (
    <section id="blog" className="blog section grey-section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Blog</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div id="fh5co-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="fh5co-blog animate-box">
                {/* <a
                  href="#"
                  className="blog-bg"
                  style="background-image: url(images/portfolio-1.jpg);"
                ></a> */}
                <div className="blog-text">
                  <span className="posted_on">Mar. 15th 2016</span>
                  <h3>
                    <a href="#">Photoshoot On The Street</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <ul className="stuff">
                    <li>
                      <i className="icon-heart2"></i>249
                    </li>
                    <li>
                      <i className="icon-eye2"></i>308
                    </li>
                    <li>
                      <a href="#">
                        Read More<i className="icon-arrow-right22"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fh5co-blog animate-box">
                {/* <a
                  href="#"
                  className="blog-bg"
                  style="background-image: url(images/portfolio-2.jpg);"
                ></a> */}
                <div className="blog-text">
                  <span className="posted_on">Mar. 15th 2016</span>
                  <h3>
                    <a href="#">Surfing at Philippines</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <ul className="stuff">
                    <li>
                      <i className="icon-heart2"></i>249
                    </li>
                    <li>
                      <i className="icon-eye2"></i>308
                    </li>
                    <li>
                      <a href="#">
                        Read More<i className="icon-arrow-right22"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fh5co-blog animate-box">
                {/* <a
                  href="#"
                  className="blog-bg"
                  style="background-image: url(images/portfolio-3.jpg);"
                ></a> */}
                <div className="blog-text">
                  <span className="posted_on">Mar. 15th 2016</span>
                  <h3>
                    <a href="#">Capture Living On Uderwater</a>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <ul className="stuff">
                    <li>
                      <i className="icon-heart2"></i>249
                    </li>
                    <li>
                      <i className="icon-eye2"></i>308
                    </li>
                    <li>
                      <a href="#">
                        Read More<i className="icon-arrow-right22"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
