import "../components/popula-tech.css";

export default function PopulaTech() {
  return (
    <>
      <div className="popula-tech-div">
        <div className="popula-tech-row">
          <div className="popula-tech-details">
            <h1 className="popula-details-title">Popula Softwares</h1>
            <h4 className="popula-tech-description">
              Popula Softwares is a branch of Popula that is solely for the
              development of softwares that can tackle the problems of humanity.
              We have different applications from Web, to Mobile, Desktop, and
              even Games that are carefully designed with security taken into
              consideration. At Popula Tech, we're passionate about leveraging
              the latest technologies to deliver cutting-edge software
              solutions. Our team of experts stay up-to-date with the latest
              trends and advancements in the industry, ensuring our clients
              receive the best possible results.
            </h4>
          </div>
          <div className="popula-tech-image">
            <img src={require("../assets/images/development.jpg")} alt="development" className="popula-tech-image"/>
          </div>
        </div>
      </div>
      <div className="overlay-div">
        <img
          src={require("../assets/images/aires.png")}
          alt="thumbnail"
          className="image-in"
        />
        <div>
            <h4 className="name">Adejoju Aires Adetiloye</h4>
            <h6 className="role">I'm a Software Developer, Instructor/Trainer, & Analyst. Myself and team members are hard working professionals who work tirelessly to get things done for the benefits of the public and we have dedicated our lives to solving the problems of humanity</h6>
            
        </div>
      </div>
    </>
  );
}
