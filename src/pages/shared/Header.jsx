
import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center space-y-4'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg font-normal text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-[#403F3F]'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;