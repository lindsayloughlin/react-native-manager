import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {CardSection} from './common';

class ListItem extends Component {

    onRowPress() {
        console.log('on row press', this.props.employee);
        Actions.employeeEdit({employee: this.props.employee});
    }

    render() {

        //console.log('render list item');
        const {person} = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {person}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;