import React from 'react';

const GenricFooter = () => {
    return (
        <footer className="bg-gray-800 p-4 text-center text-white bottom-0 w-full  ">
            <p>© {new Date().getFullYear()} Rajveer Choudhary. All rights reserved.</p>
        </footer>
    );
};

export default GenricFooter;