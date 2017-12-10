import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TYPES } from './constants';

const spec = {
    canDrop: props => !!props.linkedRecord
};

const collect = (connect, monitor) => ({});

const AddRecordBoxDisplay = () => (
    <Card className="add-records-box">
    </Card>
);

const mapStateToProps = state => ({
    linkedRecord: state.linkedRecord
});

const mapDispatchToProps = {};

export default DropTarget(
    TYPES.RECORD, spec, collect
)(connect(
    mapStateToProps, mapDispatchToProps
)(AddRecordBoxDisplay));
