# Lightning Extension

A browser extension that let's you make payments directly to websites via the Lightning Network.

Lightning Network is second layer payment network built on top of the Bitcoin blockchain. To learn more have a look at the following links:

- https://bitcoin.org/en/
- https://dev.lightning.community/resources/

## Getting Started

Install dependencies:

```bash
npm install
```

Build the project:

```
npm run build-chrome
```

## Run it in chrome

Go the the URL below in google chrome.

```
chrome://extensions/
```

Click the button `Load unpacked extension` and select the build folder.

## Develop

### Use prettier with VScode

If you want Prettier to help you by applying changes on save you have to change in `File > Preferences > Settings` and check the configuration: `Editor: Format On Save`.

### LND

We are using the [LND](https://github.com/lightningnetwork/lnd) REST [API](https://app.swaggerhub.com/apis/lnd-rest/rpc-proto/master)
