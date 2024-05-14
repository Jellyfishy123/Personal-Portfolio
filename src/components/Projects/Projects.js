import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FakeNewsAnalysis from "../../Assets/Projects/FakeNewsAnalysis.png";
import CheckIt from "../../Assets/Projects/CheckIt.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import France from "../../Assets/Projects/France.jpg";
import Premier from "../../Assets/Projects/Premier.png"
import Django from "../../Assets/Projects/Django.png"
import Telegram from "../../Assets/Projects/Telegram.png"
import Chat from "../../Assets/Projects/Chat.jpg"
import Word from "../../Assets/Projects/Word.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CheckIt}
              isBlog={false}
              title="CheckIt"
              description="CheckIt is a revolutionary mobile application designed to enhance your daily planning experience. With its personalized and smart planning features, CheckIt goes beyond traditional to-do lists, intelligently curating your schedule to optimize your day. The app leverages on APIs to provide location-based navigation, weather insights and event recommendations."
              ghLink="https://github.com/Jellyfishy123/CheckIt-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Camp Application and Management System (CAMs)"
              description="CAMs is an application for staff and students to manage, view and register for camps within NTU. The application will act as a centralized hub for all staff and students."
              ghLink="https://github.com/Jellyfishy123/SC2002-CAMS-Assignment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Word}
              isBlog={false}
              title="Wacky Word Generator"
              let description = "The application generates cool-sounding names, such as newstay, lightstream, mainbrake, or graypine. The user can ask for the next name, favorite the current one, and review the list of favorited names on a separate page. The app is responsive to different screen sizes."
              ghLink="https://github.com/Jellyfishy123/my_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Telegram}
              isBlog={false}
              title="Telegram Feedback Bot"
              description="A Telegram bot to collect anonymous feedback for Wee Kim Wee School of Communications Freshman Orientation Program. Freshmen can click /start and follow the instructions to leave feedback. For complete anonymity, remove line 200 from bot.py file (it exposes the sender's username)."
              ghLink="https://github.com/Jellyfishy123/Telegram_Feedback_Bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="GPT-QnA-Paraphrase"
              description="A project to fine tune and train LLMs on Vietnamese data, with the goal of making a Vietnamese chatbot or LLAMA/ALPACA model trained on Vietnamese dataset. This application calls ChatGPT using Python using prompt engineering, paraphrasing and receiving responses "
              ghLink="https://github.com/Jellyfishy123/GPT-QnA-Paraphrase"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Django}
              isBlog={false}
              title="Django Blog"
              description="Re-create a Reddit wannabe blog which has full functioning features, not limited to login, register, post new blogs and delete blogs, in Django."
              ghLink="https://github.com/Jellyfishy123/Django_Blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Premier}
              isBlog={false}
              title="Premier League Table Prediction"
              description="Our mini-project aims to investigate the factors which contribute to a team’s performance in terms of winning and losing games and use ML models to predict future matches based on past matches. Our personal objective from this project is to predict the top 6 teams going into the Champions League (for top 4 teams) and Europa league (5th and 6th teams)"
              ghLink="https://github.com/Jellyfishy123/PremierLeagueTablePrediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={France}
              isBlog={false}
              title="France Trip 2022"
              description="An animated, informative and user-friendly website about my Winter Language Immersion Program (LIP) to France, organized by NTU and the University of Franche-Comté. This website serves primarily to attract students who want to experience learning French in a professional setting and life in France."
              ghLink="https://github.com/Jellyfishy123/FranceTrip2022"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FakeNewsAnalysis}
              isBlog={false}
              title="Fake News Analysis"
              description=" Our mini-project utilizes the Fake News dataset based on FakeNewsNet by Aleksei Golovin in order to develop machine learning algorithms that can accurately discern fake news from real news and analyze the factors that differentiate them."
              ghLink="https://github.com/Jellyfishy123/FakeNewsAnalysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
