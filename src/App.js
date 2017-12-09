import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './Header';
import Footer from './Footer';

import './App.css';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#ffffff',
        primary2Color: 'red',
        primary3Color: 'green',
        accent1Color: '#2ba0aa',
        accent2Color: 'purple',
        accent3Color: 'yellow',
        canvasColor: 'white',
        borderColor: '#282c39',
        disabledColor: 'fade(darkBlack, 0.3)',
        pickerHeaderColor: 'cyan500',
        clockCircleColor: 'fade(darkBlack, 0.07)',
        shadowColor: 'fullBlack',
        textColor: '#282c39',
        alternateTextColor: '#282c39'
    },
    fontFamily: ['Droid Sans', 'arial', 'sans-serif']
});

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App Color-Fill-1-copy-2">
            <Header />
        </div>
        <Footer />
    </MuiThemeProvider>
);

export default App;
