import React from 'react';
import { Card } from 'material-ui/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DraggableRecord from './DraggableRecord';

export const RecordBoxDisplay = (props) => (
    <Card className="records-box">
        {props.records.map(record => (
            <Card key={`record${record}Container`} className="record-container">
                <DraggableRecord record={record} />}
            </Card>))}
    </Card>
);

const mapStateToProps = state => ({
    records: state.availableRecords
});

export default connect(mapStateToProps)(RecordBoxDisplay);

RecordBoxDisplay.propTypes = {
    records: PropTypes.arrayOf(PropTypes.string)
};
