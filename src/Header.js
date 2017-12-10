import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';

import avatar from './pirateDuck.png';

const headerLeft = (<div className="ellipse-2977">
    <div className="logo">
        <span className="logo1">L</span><span className="logo2">OGO</span>
    </div>
</div>);

const headerRight = (<Tabs className="headerRight" initialSelectedIndex={1}>
    <Tab className="home" label="Home" style={{ textTransform: 'none' }} />
    <Tab className="test" label="Test" style={{ textTransform: 'none' }} />
    <Avatar className="avatar" src={avatar} />
</Tabs>);

const Header = () => (
    <AppBar className="header-bkgrd"
        iconElementLeft={headerLeft}
        iconElementRight={headerRight}
    />
);

export default Header;
