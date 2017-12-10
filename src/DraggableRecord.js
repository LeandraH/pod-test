import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { linkRecord } from './actions';
import { TYPES } from './constants';

const spec = {
    beginDrag: props => ({ id: props.record }),
    endDrag: (props, monitor, component) => {
        const droppedInBox = props.record;
        if (droppedInBox) {
            props.linkRecord(droppedInBox);
        }
    }
};

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
    // isDragging: monitor.isDragging()
});

export const InnerDisplay = ({ record, style }) => (
    <Card key={`record${record}`} className="record" style={style}>
        <CardText>
            <span className="record-number">{record}</span>
            <br />
            <span className="record-text">RECORD</span>
        </CardText>
    </Card>
);

export class DraggableRecordDisplay extends Component {
    // componentDidMount() {
    //     const { connectDragPreview, record, isDragging } = this.props;
    //     if (isDragging) {
    //         const style = { borderRadius: '10px', cursor: 'move', border: 'solid 3px #46c6d1' };
    //         connectDragPreview(<div>
    //             <InnerDisplay record={record} style={style}/>
    //         </div>);
    //     }
    // }

    render() {
        const { connectDragSource, connectDragPreview, record } = this.props;
        const style = { borderRadius: '10px', cursor: 'move' };
        return connectDragSource(<div>
            <InnerDisplay record={record} style={style} />
        </div>);
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    linkRecord: record => dispatch(linkRecord(record))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(DragSource(
    TYPES.RECORD, spec, collect
)(DraggableRecordDisplay));

DraggableRecordDisplay.propTypes = {
    isDragging: PropTypes.bool,
    connectDragSource: PropTypes.func.isRequired,
    record: PropTypes.string.isRequired
};
