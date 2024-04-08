import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">All Categories</h2>
            {
                categories.map(catagory => <Link
                    className="block ml-4 text-xl font-semibold "
                    to={`/catagory/${catagory.id}`}
                    key={catagory.id}>
                    {catagory.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;