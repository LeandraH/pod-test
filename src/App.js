import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Header from './Header';
import RecordBox from './RecordBox';
import SideMenu from './SideMenu';
import AddRecordBox from './AddRecordBox';
import Footer from './Footer';

import reducer from './reducer';

import './App.css';
import { COLORS } from './constants';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: COLORS.WHITE,
        primary2Color: '#282c39',
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
        textColor: '#ffffff',
        alternateTextColor: '#282c39'
    },
    fontFamily: 'Droid Sans, arial, sans-serif'
});

const store = createStore(reducer);

export class AppDisplay extends Component {
    render() {
        return (<Provider store={store}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App Color-Fill-1-copy-2">
                    <Header />
                    <div>
                        <RecordBox />
                        <SideMenu />
                        <AddRecordBox />
                    </div>
                </div>
                <Footer />
            </MuiThemeProvider>
        </Provider>);
    }
}

export default DragDropContext(HTML5Backend)(AppDisplay);