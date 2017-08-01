import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {CardSection, Input} from './common';
import {employeeCreate, employeeUpdate} from "../actions"


class EmployeeForm extends Component {

    componentWillMount() {
        console.log('employeeForm' , this.props.employeeUpdate);
    }

    render() {
        return (
            <View style={{width: 300}}>
                <CardSection>
                    <Input label="Name" placeholder="your name here"
                           value={this.props.person}
                           onChangeText={value => this.props.employeeUpdate({prop: 'person', value})}/>
                </CardSection>
                <CardSection>
                    <Input label="phone" placeholder="1234567890" value={this.props.phone}
                           onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}/>
                </CardSection>
                <CardSection style={{flexDirection: 'column', height: 100}}>
                    <Text style={styles.pickerHeaderStyle}>Shift</Text>
                    <Picker style={{flex: 1}}
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursdaya"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('map state to props employeeForm', state.employeeForm);
    const {person, phone, shift} = state.employeeForm;
    return {person, phone, shift};
};

const styles = {
    pickerHeaderStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
