document.addEventListener('DOMContentLoaded', function() {
    const blockTrackers = document.getElementById('blockTrackers');
    const manageCookies = document.getElementById('manageCookies');
    const encryptData = document.getElementById('encryptData');
    const applyChanges = document.getElementById('applyChanges');

    // Load saved settings
    chrome.storage.sync.get(['blockTrackers', 'manageCookies', 'encryptData'], function(result) {
        blockTrackers.checked = result.blockTrackers || false;
        manageCookies.checked = result.manageCookies || false;
        encryptData.checked = result.encryptData || false;
    });

    // Save settings on change
    applyChanges.addEventListener('click', function() {
        chrome.storage.sync.set({
            blockTrackers: blockTrackers.checked,
            manageCookies: manageCookies.checked,
            encryptData: encryptData.checked
        }, function() {
            console.log('Settings saved');
        });
    });
});
