import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <>
    <div>
  {/* ---------------about-section-------------- */}
  <div className="container about-section my-3">
    <div className="row">
      <div className="col-md-6">
        <div className="about-section-text">Welcome to <span className="typing">
            Coder-arjun
          </span></div>
        <p className="about_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem
          excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga
          nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae
          velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas
          culpa voluptatum repudiandae harum non.</p>
        <a href="#" className="btn-display">Free Courses</a>
        <a href="#" className="btn-display">Explore Blog</a>
      </div>
      <div className="col-md-6">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={1000}>
              <img src="images/1.jpg" className="d-block w-100 img-fluid img-about-section" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src="images/2.jpg" className="d-block w-100 img-fluid img-about-section" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/3.jpg" className="d-block w-100 img-fluid img-about-section" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* -------------courses-section--------------- */}
  <section className="courses my-5">
    <h3 className="courses_section__heading text-center">
      Recommended Courses
    </h3>
    <div className="container">
      <div className="row my-3">
        <div className="col-md-4 ">
          <div className="card" style={{"width":"18rem"}}>
            <img src="images/react.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <a href="#" className="beginer">Beginner</a>
                </div>
                <div className="col-3 text-end"><ion-icon name="heart" className="heart-icon" /></div>
              </div>
              <h5 className="card-title">Deep Learning with React-Native</h5>
              <p className="card-text">Far advanced settling say finished raillery. Offered chiefly farther</p>
              <div className="row">
                <div className="col">
                  <div className="star">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                  </div>
                </div>
                <div className="col">4.0/5.0</div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <span>
                    <ion-icon name="time" />
                  </span>
                  18h 56m</div>
                <div className="col">
                  <span>
                    <ion-icon name="calculator" />
                  </span>
                  99 lectures</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card" style={{"width":"18rem"}}>
            <img src="images/html.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <a href="#" className="beginer">All level</a>
                </div>
                <div className="col-3"><ion-icon name="heart" className="heart-icon" /></div>
              </div>
              <h5 className="card-title">Build Responsive Websites with HTML</h5>
              <p className="card-text">Far advanced settling say finished raillery. Offered chiefly farther</p>
              <div className="row">
                <div className="col">
                  <div className="star">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                  </div>
                </div>
                <div className="col">4.0/5.0</div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <span>
                    <ion-icon name="time" />
                  </span>
                  18h 56m</div>
                <div className="col">
                  <span>
                    <ion-icon name="calculator" />
                  </span>
                  99 lectures</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card" style={{"width":"18rem"}}>
            <img src="images/css.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <a href="#" className="beginer">Beginner</a>
                </div>
                <div className="col-3"><ion-icon name="heart" className="heart-icon" /></div>
              </div>
              <h5 className="card-title">Build Responsive Websites with CSS</h5>
              <p className="card-text">Far advanced settling say finished raillery. Offered chiefly farther</p>
              <div className="row">
                <div className="col">
                  <div className="star">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star-outline" />
                  </div>
                </div>
                <div className="col">4.0/5.0</div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <span>
                    <ion-icon name="time" />
                  </span>
                  18h 56m</div>
                <div className="col">
                  <span>
                    <ion-icon name="calculator" />
                  </span>
                  99 lectures</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    
    
    
    </>
  )
}
