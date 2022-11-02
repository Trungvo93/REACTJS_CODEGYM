import { Link, useParams } from 'react-router-dom';
export const Product = () => {

    let { categoryID, randomUrl } = useParams();
    console.log(randomUrl)
    return <div>
        <h3>
            ID Selected: {categoryID}
        </h3>
        <h2>Random id: {randomUrl}</h2>
        <button>
            <Link to='/'>Back</Link>
        </button>
    </div>
}