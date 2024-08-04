import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({text , link, btnTxt}) =>(
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnTxt}
      <img src = {arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
)

const renderContent = {
  1 :  (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 py-8 text-white mx-5'>
      Hi, I am <span className='font-semibold' >Ashish Kumar</span> 👋 <br/>
    </h1>
  ),
  2 :  (
    <InfoBox
      text = "Worked on many projects and picked up many skills along the way "
      link ="/about"
      btnTxt="Visit my portfolio"
    />
  ),
  3 :  (
    <InfoBox
    text = "led multiple projects to success over the years. Curious about the impact?"
    link ="/projects"
    btnTxt="Learn more"
  />
  ),
  4 :  (
    <InfoBox
    text = "Need a project done or looking for a dev? I'm just a few keystocks away"
    link ="/contact"
    btnTxt="Let's talk"
  />
  )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo