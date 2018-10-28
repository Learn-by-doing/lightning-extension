# React Chrome Extension Scaffolding

## Build it

In order for create-react-app scripts not to include a inline script that is not allowed by the [CSP in chrome extensions](https://developer.chrome.com/extensions/contentSecurityPolicy) it is needed to use the environmet variable bellow:

```
INLINE_RUNTIME_CHUNK=false
```

## Use it in chrome

Go the the URL below in google chrome.

```
chrome://extensions/
```

Click the button `Load unpacked extension` and select the build folder.

## Develop

### Use prettier with VScode

If you want Prettier to help you by applying changes on save you have to change in `File > Preferences > Settings` and check the configuration: `Editor: Format On Save`.
