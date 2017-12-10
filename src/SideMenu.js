import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { COLORS } from './constants';

const SideMenu = () => (
    <Menu className="side-menu" autoWidth={false}>
        <MenuItem secondaryText="Info" className="menu-info"
            style={{ backgroundColor: COLORS.TEALISH }} />
        <MenuItem primaryText="History" className="menu-history"
            style={{ backgroundColor: COLORS.DARK }} />
    </Menu>
);

export default SideMenu;
