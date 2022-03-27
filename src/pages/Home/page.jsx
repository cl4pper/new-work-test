import React from 'react';
import { List } from '@containers';
import { Article } from '@components';

// STYLE
import './style.scss';

const Home = () => {
    return (
        <div className="Home">
            <List />
            <Article />
        </div>
    );
};

export default Home;