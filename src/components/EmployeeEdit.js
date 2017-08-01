import _ from 'lodash';

import React, {Component} from 'react';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications';
import {employeeUpdate, employeeSave, employeeDelete} from "../actions/EmployeeActions"
import {connect} from 'react-redux';

import {Card, CardSection, Button, Confirm} from './common';

class EmployeeEdit extends Component {

    state = {showModal: false};

    componentWillMount() {
        console.log('employee edit mounted', this.props.employee);
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
        console.log('mounted props', this.props.employeeUpdate);
    }

    onTextPress() {
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onButtonPress() {
        //console.log('button pressed');
        const {person, phone, shift} = this.props;
        console.log(person, phone, shift);
        this.props.employeeSave({person, phone, shift, uid: this.props.employee.uid});
    }

    onAccept() {

        var {uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <EmployeeForm/>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text scheudle
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Fire employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('EmployeeEdit map state to props', state.employeeForm);
    const {person, phone, shift} = state.employeeForm;
    return {person, phone, shift};
};

export default connect(mapStateToProps, {employeeSave, employeeUpdate, employeeDelete})(EmployeeEdit);