import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar name="Juan" photoName="profile.jpg" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return <img className="avatar" src={props.photoName} alt={props.name} />;
}
function Intro(props) {
  return (
    <div className="data">
      <h1>Juan Felix</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" color="blue" />
      <Skill skill="Javascript" color="Yellow" />
      <Skill skill="Web Design" color="Green" />
    </div>
  );
}
function Skill(props) {
  const style = { backgroundColor: props.color };
  return (
    <div className="skill" style={style}>
      <span>{props.skill}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
