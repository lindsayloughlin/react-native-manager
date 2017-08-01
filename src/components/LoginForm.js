import React, {Component} from 'react';
import {Card, Input, Button, Spinner} from './common';
import {Text} from 'react-native'
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from "../actions/index"
import {CardSection} from "./common/CardSection";

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }


    componentWillMount() {
        console.log('login form mounting');
    }
    onButtonPressed() {
        const {email, password} = this.props;
        console.log(`button pressed ${email} ${password}`);
        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"/>;
        }

        return (
            <Button onPress={this.onButtonPressed.bind(this)}>
                Login
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        label="email"
                        placeHolder="email@email.com"
                        value={this.props.email}
                    />

                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="password"
                        placeHolder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};


const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};


//export default LoginForm;
export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged, loginUser
})(LoginForm)
