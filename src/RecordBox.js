import React from 'react';
import { Card } from 'material-ui/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const RecordBoxDisplay = (props) => (
    <Card style={{ backgroundColor: 'red' }}>
        // Hello
        // {props.records.map(record => <Card title={record} subtitle="RECORD" />)}
    </Card>
);

const mapStateToProps = state => ({
    records: state.availableRecords
});

export default connect(mapStateToProps)(RecordBoxDisplay);

RecordBoxDisplay.propTypes = {
    records: PropTypes.arrayOf(PropTypes.string)
};
