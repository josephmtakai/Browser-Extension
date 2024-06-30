chrome.storage.sync.get(['blockTrackers', 'manageCookies', 'encryptData'], function(result) {
    if (result.blockTrackers) {
        chrome.webRequest.onBeforeRequest.addListener(
            function(details) {
                return { cancel: true };
            },
            { urls: ["*://*.doubleclick.net/*", "*://*.google-analytics.com/*", "*://*.facebook.com/*"] },
            ["blocking"]
        );
    }

    if (result.manageCookies) {
        chrome.cookies.onChanged.addListener(function(changeInfo) {
            if (!changeInfo.removed) {
                console.log('Cookie added: ', changeInfo.cookie);
            }
        });
    }
});
