import './assets/css/fonts.css';
import './assets/css/SplashScreen.css';
import ProgressBar from './ProgressBar';
import logo from '/img/cat.png'

export default function Splashscreen(){
    return(
        <div className="main-title">
            <img src={logo} alt="" />
            <div className="items-left">
                <h1 className='label'>Animal center</h1>
                <ProgressBar></ProgressBar>
            </div>
            </div>
    );
}