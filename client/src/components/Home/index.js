import React from "react";
import Gallery from "./Gallery";

const Deals = () => (
  <section className="padding-bottom mt-5">
    <div className="card card-deal">
      <div className="col-heading content-body">
        <header className="section-heading">
          <h3 className="section-title">Deals and offers</h3>
          <p>Hygiene equipments</p>
        </header>
        <div className="timer">
          <div>
            
            <span className="num">04</span> <small>Days</small>
          </div>
          <div>
            
            <span className="num">12</span> <small>Hours</small>
          </div>
          <div>
           
            <span className="num">58</span> <small>Min</small>
          </div>
          <div>
           
            <span className="num">02</span> <small>Sec</small>
          </div>
        </div>
      </div>
      <div className="row no-gutters items-wrap">
        <div className="col-md col-6">
          <figure className="card-product-grid card-sm">
            <a href="https://www.google.com/" className="img-wrap">
              <img src={process.env.PUBLIC_URL + "images/items/3.jpg"}  alt="hhhh"/>
            </a>
            <div className="text-wrap p-3">
              <a href="https://www.google.com/" className="title">
                Summer clothes
              </a>
              <span className="badge badge-danger"> -20% </span>
            </div>
          </figure>
        </div>
        <div className="col-md col-6">
          <figure className="card-product-grid card-sm">
            <a href="https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531" className="img-wrap">
              <img src={process.env.PUBLIC_URL + "images/items/4.jpg"}  alt="dddd"/>
            </a>
            <div className="text-wrap p-3">
              <a href="https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531" className="title">
                Some category
              </a>
              <span className="badge badge-danger"> -5% </span>
            </div>
          </figure>
        </div>
        <div className="col-md col-6">
          <figure className="card-product-grid card-sm">
            <a href="https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531" className="img-wrap">
              <img src={process.env.PUBLIC_URL + "images/items/5.jpg"} alt="dddd" />
            </a>
            <div className="text-wrap p-3">
              <a href="#https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531" className="title">
                Another category
              </a>
              <span className="badge badge-danger"> -20% </span>
            </div>
          </figure>
        </div>
        <div className="col-md col-6">
          <figure className="card-product-grid card-sm">
            <a href="https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531" className="img-wrap">
              <img src={process.env.PUBLIC_URL + "images/items/6.jpg"}  alt="dddd"/>
            </a>
            <div className="text-wrap p-3">
              <a href="https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531" className="title">
                Home apparel
              </a>
              <span className="badge badge-danger"> -15% </span>
            </div>
          </figure>
        </div>
        <div className="col-md col-6">
          <figure className="card-product-grid card-sm">
            <a href="https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531" className="img-wrap">
              <img src={process.env.PUBLIC_URL + "images/items/7.jpg"} alt="dddd" />
            </a>
            <div className="text-wrap p-3">
              <a href="https://www.bing.com/search?pglt=43&q=google&cvid=1321df4208164c0d94345f1a1dcc0c0c&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARAAGEAyBggCEEUYOzIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQLhhAMgYIBxBFGDsyBggIEC4YQNIBCDE3NDZqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531" className="title text-truncate">
                Smart watches
              </a>
              <span className="badge badge-danger"> -10% </span>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
);



const Home = () => {
  return (
    <div className="container" style={{ marginTop: "130px" }}>
      {/* Content here */}
      <Deals />
      <Gallery />
    </div>
  );
};
export default Home;
