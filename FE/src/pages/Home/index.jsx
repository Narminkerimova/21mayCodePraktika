import Cards from "./Cards";
import heroImg from "./../../assets/hero.webp"
import "./style.css"

function Home() {
  return (
    <>
      <title>Home Page</title>
      <section className="hero">
        <div className="container_website">
          <div className="hero_left">
            <h1>Wood & cloth sofa</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button>buy now</button>
          </div>
          <div className="hero_right">
            <img src={heroImg} alt="hero" />
          </div>
        </div>
      </section>
      <Cards />
    </>
  );
}

export default Home;
