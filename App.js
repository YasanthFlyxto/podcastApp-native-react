import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const disableScrollScript = `
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Yasanth's Podcast App</Text>
      <Image
        source={require('./ss2.png')}
        style={styles.image}
      />
      <Text style={styles.heading2}>We Should Talk Podcast</Text>
 

      <WebView
        source={{
          uri: 'https://podcasters.spotify.com/pod/show/yasanth-dolamulla/embed/episodes/EP-01-------Sleepwalking-In-Education-e2fl696/a-aav0u9g'
        }}
        style={styles.webView}
        injectedJavaScript={disableScrollScript} // Inject JavaScript to disable scrolling
      />
       <WebView
        source={{
          uri: 'https://podcasters.spotify.com/pod/show/yasanth-dolamulla/embed/episodes/EP-04-----Everybody-Talks--Nobody-Listens-e2fllhr/a-aav2arh'
        }}
        style={styles.webView}
        injectedJavaScript={disableScrollScript} // Inject JavaScript to disable scrolling
      />
            <WebView
        source={{
          uri: 'https://podcasters.spotify.com/pod/show/yasanth-dolamulla/embed/episodes/EP-01-------Sleepwalking-In-Education-e2fl696/a-aav0u9g'
        }}
        style={styles.webView}
        injectedJavaScript={disableScrollScript} // Inject JavaScript to disable scrolling
      />
      <WebView
        source={{
          uri: 'https://podcasters.spotify.com/pod/show/yasanth-dolamulla/embed/episodes/EP-04-----Everybody-Talks--Nobody-Listens-e2fllhr/a-aav2arh'
        }}
        style={styles.webView}
        injectedJavaScript={disableScrollScript} // Inject JavaScript to disable scrolling
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25, // Add padding at the top
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  heading2: {
    fontSize: 22,
    fontWeight: 'regular',
    textAlign: 'center',
    marginBottom: 30,
  },
  image: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    alignSelf: 'center', // Center the image horizontally
    marginBottom: 20, // Add margin at the bottom
  },
  webView: {
    flex: 1,
  },
});
