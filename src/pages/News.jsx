import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";
import { useParams } from 'react-router-dom';
const News = () => {

    const { id } = useParams();
    return (
        <div>

            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>


                </div>
            </div>



        </div>
    );
};

export default News;