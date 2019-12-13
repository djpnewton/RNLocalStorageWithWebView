import React from 'react';
import { SafeAreaView, Text, View, Platform } from 'react-native';
import WebView from "react-native-webview";

class App extends React.Component {
  state = {
    url: null
  };
  async componentDidMount() {
    const url = 'file:///android_asset/index.html';
    this.setState({ url });
  }

  render() {
    if (!this.state.url) {
      return (
        <SafeAreaView>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView>
        <Text>{this.state.url}</Text>
        <View style={{ backgroundColor: "red", height: "100%", width: "100%" }}>
          <WebView
            style={{ flex: 1, marginBottom: 20 }}
            source={{ uri: this.state.url }}
            onMessage={event => {
              const { data } = event.nativeEvent;
              console.log(data);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
