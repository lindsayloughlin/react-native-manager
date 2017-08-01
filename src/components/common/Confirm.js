import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const Confirm = ({children, visible, onAccept, onDecline}) => {
    // {children} shows props.children
    // {visible} shows props.visible

    const {containerStyle, textStyle, cardSection} = styles;


    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType={"slide"}
            onRequestClose={() => {
                console.log('closing function')
            }}
        >
            <View style={containerStyle}>
                <CardSection style={cardSection}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>
                        Yes
                    </Button>
                    <Button onPress={onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSection: {
        justifyContent: 'center'
    },
    // flex:1 wrap
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center'
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};
export {Confirm}