import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from "../actions/EmployeeActions"

import ListItem from './ListItem'



class EmployeeList extends Component {

    componentWillMount() {
        console.log('Employee List mounting');
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        // nextProps are the next set of the props that this component
        // will be rendered with (this.props is the old set of props)
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    createDataSource({employees}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        //console.log('my props', this.props);
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            >
            </ListView>
        );
    }
}

const mapStateToProps = (state) => {

    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)