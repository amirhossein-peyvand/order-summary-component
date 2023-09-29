import "../sass/Card.scss";
import musicIcon from "../assets/icon-music.svg";
import hero from "../assets/illustration-hero.svg";

const Card = () => {
  return (
    <article className="card">
      <section className="imageContainer">
        <img src={hero} alt="hero" />
      </section>
      <section className="contentContainer">
        <h2 className="title">Order Summary</h2>
        <p className="desc">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="box">
          <div className="leftSide">
            <img src={musicIcon} alt="music icon" />
            <div>
              <span>Annual Plan</span>
              <span>$59.99/year</span>
            </div>
          </div>
          <a href="#">Change</a>
        </div>
        <button className="btn">Proceed to Payment</button>
        <p className="cancelOrder">Cancel Order</p>
      </section>
    </article>
  );
};

export default Card;
