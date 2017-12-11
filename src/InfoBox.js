import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { input, addRecord } from './actions';
import { COLORS } from './constants';

export class InfoBoxDisplay extends Component {
    render() {
        const { content, currentState, inputChange, addRecord } = this.props;
        return (<Paper className="info-box" style={{ backgroundColor: '#282c39' }}
            rounded={false}>
            <div className="inner-paper">
                <span className="title">{content.title}</span>
                <span className="subtitle">{content.state}</span>
                <br />
                {currentState === 'POD' &&
                <div>
                    <p>Full Name</p>
                    <TextField onChange={(e, newInput) => inputChange('name', newInput)}
                    hintText="Enter full name" hintStyle={{ color: 'rgba(255, 255, 255, 0.2)' }} />
                    <p>Short Name (required)</p>
                    <TextField defaultValue={content.shortName}
                        onChange={(e, newInput) => inputChange('shortName', newInput)} />
                    <p>Description</p>
                    <TextField onChange={(e, newInput) => inputChange('description', newInput)}
                    hintText="Write description" hintStyle={{ color: 'rgba(255, 255, 255, 0.2)' }} />
                    <p>Notes</p>
                    <TextField onChange={(e, newInput) => inputChange('notes', newInput)}
                    hintText="Write notes" hintStyle={{ color: 'rgba(255, 255, 255, 0.2)' }} />
                    <RaisedButton secondary label="Add Record" onClick={addRecord} />
                </div>
                }
                {currentState === 'Record' && content.state === 'Available' &&
                <div>
                    <p>How to use</p>
                    <p>{content.use}</p>
                    <p>{content.use2}</p>
                </div>
                }
                {currentState === 'Record' && content.state === 'Unlocked' &&
                <div>
                    <p>Full Name</p>
                    <TextField onChange={(e, newInput) => inputChange('name', newInput)}
                    hintText="Enter full name" hintStyle={{ color: 'rgba(255, 255, 255, 0.2)' }} />
                    <p>Short Name (required)</p>
                    <TextField defaultValue={content.shortName}
                        onChange={(e, newInput) => inputChange('shortName', newInput)} />
                    <p>Record Version (required)</p>
                    <DropDownMenu>
                        <MenuItem value="1.0" primaryText="1.0" style={{ color: COLORS.CHARCOAL }} />
                        <MenuItem value="1.1" primaryText="1.1" style={{ color: COLORS.CHARCOAL }} />
                        <MenuItem value="1.2" primaryText="1.2" style={{ color: COLORS.CHARCOAL }} />
                    </DropDownMenu>
                    <p>Description</p>
                    <TextField onChange={(e, newInput) => inputChange('description', newInput)}
                    hintText="Write description" hintStyle={{ color: 'rgba(255, 255, 255, 0.2)' }} />
                    <p>Notes</p>
                    <TextField onChange={(e, newInput) => inputChange('notes', newInput)}
                    hintText="Write notes" hintStyle={{ color: 'rgba(255, 255, 255, 0.2)' }} />
                </div>
                }
            </div>
        </Paper>);
    }
};

const mapStateToProps = state => ({
    currentState: state.infoBoxState,
    content: state.infoBoxStates[state.infoBoxState],
    states: state.infoBoxStates
});

const mapDispatchToProps = dispatch => ({
    inputChange: (field, newInput) => dispatch(input(field, newInput)),
    addRecord: () => dispatch(addRecord())
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxDisplay);
