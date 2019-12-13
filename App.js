import React from 'react';
import { SafeAreaView, Text, View, Platform } from 'react-native';
import WebView from "react-native-webview";

class App extends React.Component {
  state = {
    url: null
  };
  async componentDidMount() {
    /*
      This is just a hack so I dont have to figure out how to load a local resource on android and ios
      It has the following html:

      <html>
          <body>
            <h1>localStorage items:</h1>
              <div id="mediv">
              </div>
              <script>
                  var lsData = {};
                  var mediv = document.getElementById("mediv");
                  localStorage.setItem("bob", "the builder");
                  localStorage.setItem("1", "2");
              
                  for (var i = 0; i < localStorage.length; i++) {
                      var key = localStorage.key(i);
                      var value = localStorage.getItem(key);
                      mediv.innerHTML += "<div>key: "+ key + ", value: " + value + "</div>";
                      lsData[key] = value;
                  }
                  if (window.ReactNativeWebView)
                    window.ReactNativeWebView.postMessage(JSON.stringify(lsData));
              </script>
          </body>  
      </html>
    */
    const url = 'https://cdpn.io/djpnewton/fullpage/LYEZgLQ';
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