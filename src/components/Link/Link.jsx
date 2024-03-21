import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-5 hover:bg-sky-600 p-1 rounded-xl" key={route.id}>
        <a href={route.path}>{route.name}</a>
    </li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;