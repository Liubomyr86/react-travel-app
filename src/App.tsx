import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';

const App = (): JSX.Element => {
    return (
        <div className='App'>
            <Header />
            <Footer />
        </div>
    );
};

export default App;
