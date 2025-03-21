import "../components/popula-bootcamp.css";

export default function PopulaBootcamp() {
  return (
    <>
      <div className="popula-bootcamp-div">
        <div className="popula-bootcamp-row">
          <div className="popula-bootcamp-image">
            <img
              src={require("../assets/images/schooling.jpg")}
              alt="bootcamp"
              className="bootcamp-image"
            />
          </div>
          <div className="popula-bootcamp-details">
            <h1 className="popula-bootcamp-details-title">
              Popula TechCamp
            </h1>
            <h4 className="popula-bootcamp-description">
              At Popula TechCamp also known as Popula Tech is an online bootcamp that teaches various software development skills from FrontEnd, to Backend, Mobile Development, and Web 3D Animations, AI tools, Crypto, Forex Trading and lots more. We teach in a very simple way so that even a newbie will learn and understand. Join our youtube channel, Subscribe and click on the notification icon to get notified whenever we upload a new tutorial video. 
            </h4>
          </div>
        </div>
      </div>
      <div className="overlay-div">
        <img
          src={require("../assets/images/popula2.PNG")}
          alt="thumbnail"
          className="image-in"
        />
        <div>
          <h4 className="name">Popula TechCamp</h4>
          <h6 className="role">
            We are a team of Professional Instructors with expertise in passing knowledge to students of different levels. We have carefully compiled, comprehensive syllabuses for each stack or skill we teach and we go step by step grinding into the students the understanding of the skill. 
          </h6>
        </div>
      </div>
    </>
  );
}
