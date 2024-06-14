import './assets/css/aboutBody.css';
import img1 from './assets/img/image1.jpg';
import img2 from './assets/img/image2.jpg';
export default function aboutBody(){
    return(
    <div className="container">
      <div className="content-table">
        <div className="table-row">
          <div className="table-cell">
            <img src={img1} alt="" className='doc1'/>
          </div>
          <div className="table-cell">
            <h3 className="redac">Nos services</h3>
            <div className="redac1">
              <p>Les animaux disponibles chez nous sont des animaux en bonne santé traité par des vétérinaires expérimentés</p>
            </div>
        </div>
        </div>
        <div className="table-row">
            <div className="table-cell">
                <h3 className="redac">Soins</h3>
                    <div className="redac1">
                      <p>Nous proposons également des services santé pour les soins</p>
                    </div>
            </div>
            <div className="table-cell">
            <img src={img2} alt="" className='doc1'/>
          </div>
        </div>
      </div>
    </div>     
    );
}