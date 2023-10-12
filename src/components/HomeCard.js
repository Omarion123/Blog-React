import Image1 from "../images/jeshoots-com-eCktzGjC-iU-unsplash-scaled.jpg";
import Image2 from "../images/download (2).jpeg";
const HomeCard = () => {
  return (
    <div className="cards">
      <img src={Image1} alt="game" className="card-img" />
      <div>
        <p style={{ marginTop: "15px" }}>
          <span style={{ color: "#222222" }}>Video Game</span>,{" "}
          <span style={{ color: "#888888" }}>Business — October 9, 2023</span>
        </p>
      </div>
      <div>
        <p style={{ marginTop: "10px", color: "#222222" }}>
          playing video games is positively associated with being happy.
        </p>
        <p style={{ marginTop: "15px", color: "#888888" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="avatar">
        <img
          src={Image2}
          alt="avatar"
          className="avatar-img"
          style={{ marginLeft: "15px", borderRadius: "50%" }}
        />
        <div className="text-up-down" style={{ marginRight: "100px" }}>
          <p>Karake Omar</p>
          <p style={{ fontSize: "13px" }}>CEO and Founder</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
