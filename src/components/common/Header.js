// Import libraries for making a component

// Make a component

// Make the component available to other parts of the app


import React from 'react';
import {
    Text, View
} from 'react-native';



const Header = (props) => {

    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        //justifyContent: 'flex-start',
        //justifyContent: '',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        backgroundColor: '#F8F8F8',
        elevation: 10
    },
    textStyle: {
        fontSize: 40
    }
};


export {Header}

// Make the component available to other parts of the app




