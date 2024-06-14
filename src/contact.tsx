import './assets/css/fonts.css';
import './assets/css/contact.css';
import Header from './header';
import Footer from './footer';

interface ServicesProps {
  count: number;
}

const Contact: React.FC<ServicesProps> = ({count}) => {
  return (
    <div className="serv">
      <Header count={count} />
        <table>
          <tr>
            <td className='titre'>
              Facebook
            </td>
            <td className='component'>
              Animal center
            </td>
          </tr>
          <tr>
            <td className='titre'>
              Twitter
            </td>
            <td className='component'>
              Animal center
            </td>
          </tr>
          <tr>
            <td className='titre'>
              Instagram
            </td>
            <td className='component'>
              Animal center
            </td>
          </tr>
          <tr>
            <td className='titre'>Email</td>
            <td className='component'>ianimal@gmail.com</td>
          </tr>
        </table>
      <Footer />
    </div>
  );
};

export default Contact;
