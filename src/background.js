// Example of adding a header to every request to Google
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(info) {
        var headers = info.requestHeaders;

        headers.push({
            name: "Awesome-Header",
            value: "awesome-header-data"
        });

        return {
            requestHeaders: headers
        };
    },
    // filters
    {
        urls: [
            "*://*.google.com/*"
        ]
    },
    // extraInfoSpec
    ["requestHeaders", "blocking"]
);
