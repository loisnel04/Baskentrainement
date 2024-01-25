import './footer.css'
import { Link } from 'react-router-dom'
import Linkledin from '../image/LinkedIn_icon.svg.png'
import Insta from '../image/instagram-img.png'
import Youtube from '../image/youtube-img.png'

export default function Footer () {
    return(
        <>
        <div className='class_footer'>
            <div className='footer_haut'>
                <p className='logo_footer'>logo</p>
                <div className='class_liens'>
                    <h3 className='suivre'>Nous suivre</h3>
                    
                    <Link to='https://www.linkedin.com/in/lo%C3%AFs-isnel-b54b4b209/' className='class_img'>
                        <img src={Linkledin} alt='logo linkledin' className='img_size'/>
                    </Link>
                    <Link to ='https://www.instagram.com/' className='class_img'>
                        <img src={Insta} alt='logo insta' className='img_size'/>
                    </Link>
                    <Link to='https://www.youtube.com/watch?v=_y4Nts4_oZo' className='class_img'>
                        <img src={Youtube} alt='logo youtube' className='img_size'/>
                    </Link>
                </div>

                <div className='class_contact'>
                    <h3>Contact</h3>
                    <p>E-mail : baskentrainement@gmail.com</p>
                    <p>Téléphone : 04 00 00 00 00</p>
                </div>

                <div className='class_siege'>
                    <h3>Siège social</h3>
                    <p>Place de la mairie</p>
                    <p>04200 Valbelle</p>
                </div>
            </div>

            <div className='footer_bas'>
                <span>2023 © Baskentrainement - Tous droits réservés | </span>
                <Link to='/mention' id='mention_legal'>
                    <span> Mentions légales</span>
                </Link>
            </div>

        </div>
        </>
    )
}