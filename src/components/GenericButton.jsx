import React from 'react';
import { useHistory } from 'react-router-dom';

const GenericButton = ({ name, navigateTo }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(navigateTo);
    };

    return (
        <button 
            onClick={handleClick} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {name}
        </button>
    );
};

export default GenericButton;