import { Link } from "react-router-dom";
import { arrow } from '../assets/icons'
import Socials from "./Socials";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-md text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-md sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi 👋🏻, I'm <span className="font-semibold">Alex</span>
            <br />
            A Front-End Software Developer living in Manchester, UK
        </h1>
    ),
    2: (
       <InfoBox
            text="I have had the pleasure of working with many companies and picked up a variety of skills along the way"
            link="/about"
            btnText="Learn more"
       />
    ),
    3: (
        <InfoBox
            text="I have been involved in a lot of projects, both with clients and some personal"
            link="/projects"
            btnText="Visit my portfolio"
       />
    ),
    4: (
        <h1 className="sm:text-md sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            If you wish to get in touch
            <br />
            <Socials />
        </h1>
        
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
