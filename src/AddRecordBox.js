import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';

import { TYPES } from './constants';
import add from './add-copy-4.png';

const spec = {
    drop: (props) => ({ record: props.record })
};

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
});

const AddRecordBoxDisplay = (props) => (
    props.connectDropTarget(<div>
        <Card className="add-records-box">
            {!props.linkedRecord && <CardText className="add-records-box-empty">
                <img src={add} alt="add" />
                <p>RECORD</p>
            </CardText>}
            {props.linkedRecord && <CardText className="add-records-box-added">
                <span style={{ fontSize: '22px' }}>{props.linkedRecord}</span>
                <br />
                <span>RECORD</span>
            </CardText>}
        </Card>
    </div>)
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
