import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';

export const PodCircleDisplay = (props) => {
    return (<Card className="pod-circle" style={{ borderRadius: '50%' }}>
        <p className="pod-name">{props.podName}</p>
        {props.podState === 'notSaved' && <p className="pod-state">DRAFT</p>}
    </Card>);
};

const mapStateToProps = state => ({
    podState: state.podState,
    podName: state.infoBoxStates.POD.shortName
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PodCircleDisplay);
