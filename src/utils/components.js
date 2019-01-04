import { Platform } from 'react-native';
import WKWebView from 'react-native-wkwebview-reborn';
import WebView from 'react-native-android-fullscreen-webview';

export const WebComponent = Platform.OS === 'ios' ? WKWebView : WebView;
