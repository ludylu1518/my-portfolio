import Icon from '../Icon/icon.png';
import '../Styles/navBar.css'
import homeIcon from '../Icon/home.png';
import aboutIcon from '../Icon/about.png';
import projectIcon from '../Icon/project.png';
import { SocialIcon } from 'react-social-icons';

function navBar() {

    return (
        <>
           <div id='sidebar'>
                <div>
                    <a href='/my-portfolio'>
                        <img id='icon' src={Icon} alt='icon'></img>
                    </a>
                </div>
                <div className='link-page'>
                    <div>
                        <a href='/my-portfolio'>
                            <img src={homeIcon} alt='home'></img>
                        </a>
                    </div>
                    <div>
                        <a href='/my-portfolio/#/about'>
                            <img src={aboutIcon} alt='about'></img>
                        </a>
                    </div>
                    <div>
                        <a href='/my-portfolio/#/project'>
                            <img src={projectIcon} alt='projects'></img>
                        </a>
                    </div>
                </div>
                <div>
                    <h5 className='contacts'>Contacts:</h5>
                    <div className='contacts-content'>
                        <div>(936) 727-0693</div>
                        <div>luzizhou6@gmail.com</div>
                        <div><SocialIcon url="https://www.linkedin.com/in/zizhou-lu-101298221/" target='_blank' rel="noopener noreferrer" /></div>
                        <div><SocialIcon url="https://github.com/ludylu1518" target='_blank' rel="noopener noreferrer"/></div>
                    </div>
                </div>
           </div>
        </>
    )

}

export default navBar;