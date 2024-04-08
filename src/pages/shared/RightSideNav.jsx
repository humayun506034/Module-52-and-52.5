
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>

            <div className='p-4 space-y-3 mb-5'>
                <h2 className="text-xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full text-blue-600">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full ">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className='p-4'>
                <h2 className="text-xl font-bold mb-4">Find Us On</h2>
                <a href="" className='p-4 flex items-center gap-3 text-base text-[#706F6F] font-medium border rounded-t-lg'>
                    <FaFacebook className='text-[#3B599C]'></FaFacebook>
                    Facebook
                </a>
                <a href="" className='p-4 flex items-center gap-3 text-base text-[#706F6F] font-medium border-x '>
                    <FaTwitter className='text-[#58A7DE]'></FaTwitter>
                    Twitter
                </a>
                <a href="" className='p-4 flex items-center gap-3 text-base text-[#706F6F] font-medium border rounded-b-lg'>
                    <FaInstagram className='text-[#D82D7E]'></FaInstagram>
                    Instagram
                </a>
            </div>

            {/* Q zone  */}
            <div className='p-4 space-y-3 mb-5'>
                <h2 className="text-xl font-bold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;