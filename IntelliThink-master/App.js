import { StyleSheet, Text, View, CheckBox, Picker, TextInput, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {

    state = {
        companyname: ''
    }
    handleCompanyname = (text) => {
        this.setState({ companyname: text })
    }
    submit = (companyname) => {
        alert(companyname + 'will be resolved shortly')
    }


    render() {
        return (

            <View style={styles.white}>



                <Text style={{ color: '#000000', fontSize: 20, padding: 10, paddingTop: 20, }}>Service Ticket Registration </Text>


                <Text style={{ color: '#696969', fontSize: 15, padding: 10, }}>Severity of the issue </Text>


                <View style={{ height: 40, width: 300, borderColor: '#696969', borderWidth: 2.5, marginLeft: 10 }}>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ color: '#696969', padding: 10, height: 40, width: 300, borderColor: '#696969', borderWidth: 2.5, }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
                    >
                        <Picker.Item label="high" value="high" />
                        <Picker.Item label="low" value="low" />

                    </Picker>
                </View>

                <Text style={{ color: '#696969', fontSize: 15, padding: 10, marginTop: 10 }}>Problem Statement</Text>

                <TextInput style={{
                    color: '#696969', fontSize: 15, padding: 10, height: 40, width: 300, borderColor: '#696969', borderWidth: 2.5, marginLeft: 10
                }}
                    placeholder="Enter your issue"
                    placeholderTextColor="#A9A9A9"
                    autoCapitalize="none"
                    onChangeText={this.handleCompanyname} />

                <Text style={{ color: '#696969', fontSize: 15, padding: 10, marginTop: 10 }}> Asset List </Text>

                <View style={{ height: 40, width: 300, borderColor: '#696969', borderWidth: 2.5, marginLeft: 10 }}>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ color: '#696969', padding: 10, height: 40, width: 300, borderColor: '#696969', borderWidth: 2.5, }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
                    >
                        <Picker.Item label="Asset1" value="asset1" />
                        <Picker.Item label="Asset2" value="asset2" />

                    </Picker>
                </View>

                <TouchableOpacity style={{ justifyContent: 'center' }}

                    onPress={
                        () => this.submit(this.state.companyname)
                    }>

                    <Text style={{ padding: 7, height: 30, width: 75, fontSize: 15, borderColor: '#696969', borderWidth: 1, marginTop: 10, marginLeft: 10, backgroundColor: '#D3D3D3', justifyContent: 'center', }}> Submit </Text>


                </TouchableOpacity>


            </View>



        );
    }
}
const styles = StyleSheet.create({
    white: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        margin: 10,

    },

    container: {
        flex: 1,
        backgroundColor: '#3498db',
        alignItems: 'center',
        justifyContent: 'center',

    },
    checkbox: {

        backgroundColor: '#fff',

    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: "#FFFF",
        paddingHorizontal: 10
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    submitButton: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
    },

});

