import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class Script2  extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (<Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
            <Picker.Item label="high" value="high" />
            <Picker.Item label="low" value="low" />
            <Picker.Item label="medium" value="medium" />
        </Picker>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter your company name"
                onChangeText={(text) => this.setState({ text })}
        />
        <CheckBox
            title='Phone Support'
            checked={this.state.checked}
        />
        <CheckBox
            title='Email Support'
            checked={this.state.checked}
        />
            <Button
                onPress={onPressLearnMore}
                title="Submit"
                color="#841584"
                accessibilityLabel="Registration submit button"
            />
            <View>
            </View>);
    }
}
