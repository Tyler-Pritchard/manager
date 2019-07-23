import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import  { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    UNSAFE_componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
//comment code
        // componentDidMount() {
        //     this.props.employeesFetch();
        // }
    
        // componentDidUpdate(prevProps) {
        //     if( prevProps.employee.length !== this.props.employees.length) {
        //         this.props.employeesFetch();
        //     }
        // }
// end
    createDataSource({ employees }) {
        const ds = new FlatList.DataSource({ 
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />
    }

     render() {
         return (
            <FlatList
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
            );
     }


//     render() {
//         return (
//             <FlatList data={this.props.employees} renderItem={({item}) => <ListItem employee={item}/>} />
//         )
//     }
 }

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid};
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);