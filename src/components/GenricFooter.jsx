import React from 'react';

const GenricFooter = () => {
    return (
        <footer className="bg-gray-800 p-4 text-center text-white bottom-0  mx-32">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
    );
};

export default GenricFooter;