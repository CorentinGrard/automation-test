/**
 * Last modification: TMO 2019-10-02
 */
exports.config = {
    framework: "mocha", // framework utilisé couplé avec la librairie chai-as-promised
    seleniumAddress: 'http://' + (process.env.SELENIUM_HOST || 'localhost') + ':4444/wd/hub',
    ignoreUncaughtExceptions: true,
    onPrepare:
        function () {
            browser.getCapabilities().then(function (cap) {
                browser.browserName = cap.get('browserName');
                if (browser.browserName === 'firefox') {
                    browser.browserVersion = cap.get('browserVersion');
                    browser.browserPlatform = cap.get('platformName');
                } else {
                    browser.browserVersion = cap.get('version');
                    browser.browserPlatform = cap.get('platform');
                }
            });
        },
    multiCapabilities: [
        {
            // 'browserName': 'firefox',
            'browserName': 'chrome',
            'chromeOptions': {
                'args': ['--headless', "--window-size=1920,1080", 'disable-infobars'] // pour masquer le message "Chrome est controlé par un logiciel de test automatisé"
            }
        },

    ],
    suites: {
        acceptance: [
            // 'test/e2e/Acceptance/Wikipedia/searchWord.Spec.js',
            'test/e2e/Acceptance/ImpotsGouv/gouv.Spec.js'
        ]
    },
    mochaOpts: {
        timeout: 3000000,
        reporter: 'mochawesome-screenshots',
        reporterOptions: {
            autoOpen: true,
            reportPageTitle: 'Protractor Tests Results',
            reportName: 'FunctionalTestsReport',
            reportDir: 'protractorTestsResults',
            slow: 3000,
            takePassedScreenshot: true,
            clearOldScreenshots: true,
            jsonReport: false,
            multiReport: true
        },
    },
}