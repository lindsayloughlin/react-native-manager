import React, {Component} from 'react'
import {View} from 'react-native';
import {connect} from 'react-redux'
import {employeeUpdate, employeeCreate} from "../actions/EmployeeActions"
import {Card, CardSection, Input, Button} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    componentWillMount() {
        console.log('EmployeeCreate will mount');
    }

    onButtonPress() {
        //console.log('on button pressed');
        const {person, phone, shift} = this.props;
        this.props.employeeCreate({person, phone, shift: shift || 'Monday'});
    }

    render() {
        //console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button style={{flex: 1}} onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}



const mapStateToProps = ({employeeForm}) => {
    //console.log('map state to props', employeeForm);
    const {person, phone, shift} = employeeForm;
    return {person, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);
