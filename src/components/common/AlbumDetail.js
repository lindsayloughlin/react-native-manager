import React, {Component} from 'react';
import {View, Text, Image, Linking} from 'react-native';

import Card from './Card';
import CardSection from './CardSection'
import Button from './Button'

var counter = 0;

const AlbumDetail = ({ album }) => {

    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle, headerContentStyle, headerTextStyle,
        thumbnailContainerStyle, imageStyle } = styles;
    counter = counter + 1;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image}}>
                    </Image>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={()=>{
                    //console.log(url);
                    Linking.openURL(url)
                }}>
                    Buy now!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10

    }

};

export {AlbumDetail}
