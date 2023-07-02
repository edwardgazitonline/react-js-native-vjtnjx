/*
React Native ListView is a view component which contains the list of items and displays in a vertical scrollable list.
https://www.javatpoint.com/react-native-listview

*/

import React, { Component } from 'react'  
import { Text, ListView, StyleSheet } from 'react-native'  
  
export default class MyListComponent extends Component {  
    constructor() {  
        super();  
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
        this.state = {  
            dataSource: ds.cloneWithRows(['Android','iOS', 'Java','Php', 'Hadoop',  
                'Sap', 'Python','Ajax', 'C++',  
                'Ruby', 'Rails','.Net', 'Perl']),  
        };  
    }  
  
    render() {  
        return (  
            <ListView  
                dataSource={this.state.dataSource}  
                renderRow={  
                    (rowData) =>  
                        <Text style={{fontSize: 20}}>{rowData}</Text>}  
            />  
        );  
    }  
}  