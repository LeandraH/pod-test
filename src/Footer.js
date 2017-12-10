import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import closeSymbol from './close.png';

export const FooterDisplay = (props) => {
    if (props.podState === 'notSaved') {
        return (<Toolbar className="footer-bkgrd-copy-2" style={{ backgroundColor: '#3d414d', height: '70px' }}>
                <ToolbarGroup>
                    <img src={closeSymbol} className="close-button" />
                    <p className="not-saved">Pod {props.currentPod} is currently NOT SAVED</p>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label="Save as Draft" buttonClass="save-draft" />
                    <RaisedButton label="Publish" />
                </ToolbarGroup>
            </Toolbar>
        );
    }
};

const mapStateToProps = state => ({
    podState: state.podState,
    currentPod: state.currentPod
});

export default connect(mapStateToProps)(FooterDisplay);

FooterDisplay.propTypes = {
    podState: PropTypes.string,
    currentPod: PropTypes.string
};
