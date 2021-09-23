import React from 'react';
import Post from './Post';


const Tercers = ({isActive}) => {
    

    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <Post />
            <Post isClearfix={false} />
            <Post />
        </div>
    );
};


export default Tercers;