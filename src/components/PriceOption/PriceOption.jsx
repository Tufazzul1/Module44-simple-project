import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option
    return (
        <div className='bg-blue-400 rounded-lg p-6 text-white text-center flex flex-col'>
            <h2>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-4xl my-4'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="btn btn-secondary mt-4 w-full hover:bg-green-500">Secondary</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}
export default PriceOption;