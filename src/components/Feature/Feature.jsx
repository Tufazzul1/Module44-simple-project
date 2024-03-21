
import Proptypes from  'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <h3 className='flex'><AiFillCheckCircle className='text-green-400 mr-2' />{feature}</h3>
        </div>
    );
};

Feature.propTypes={
    feature:Proptypes.string
}

export default Feature;