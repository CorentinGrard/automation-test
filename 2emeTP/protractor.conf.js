/**
 * Author: SVE 2017-04-25
 * Last modification: YBU 2020-06-26
 */
var globalConf = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: "mocha", // framework utilisé couplé avec la librairie chai-as-promised
    seleniumAddress: 'http://' + (process.env.SELENIUM_HOST || 'localhost') + ':4444/wd/hub',
    ignoreUncaughtExceptions: true,
    params: {
        mode: 'local'
    }
    ,
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
    capabilities: {},
    localSeleniumStandaloneOpts: {
        jvmArgs: ["-Dwebdriver.ie.driver=node_modules/webdriver-manager/selenium/IEDriverServer3.150.0.exe"]
    },
    suites: {},
    mochaOpts: {
        timeout: 600000, //300000: debug probleme du retour de validation decoupage
        reporter: 'mochawesome-screenshots',
        reporterOptions: {
            autoOpen: true,
            reportPageTitle: 'Yooz v2 Protractor Tests Results',
            reportDir: 'protractorTestsResults',
            slow: 3000,
            takePassedScreenshot: true,
            clearOldScreenshots: true,
            jsonReport: false,
            multiReport: true
        },
    }
};
module.exports = globalConf;











/**
 * YBU 26-06-2020
 *
 * JUNIT format reporter:
 * ======================

 reporter: 'mocha-junit-reporter',
        reporterOptions: {
            reportName: 'TestsReport',
            mochaFile: 'Resultfile.xml',
            testsuitesTitle: true,
            suiteTitleSeparatedBy: '.',
            testCaseSwitchClassnameAndName: false
        }


 * ancienne conf des capabilities:
 * ===============================
 * à utiliser par fichier de conf comme deja fait pour les exports, acceptance et light


    {
       'browserName': 'firefox',
       shardTestFiles: true,
       maxInstances: 2
   }
    {
        'browserName': 'chrome',
        'unexpectedAlertBehaviour': 'accept',
        'goog:chromeOptions': {
            //args: ["--headless", "--disable-gpu", "--window-size=1920,1080"]
            'args': ['disable-infobars'], // pour masquer le message "Chrome est controlé par un logiciel de test automatisé"
            w3c: false // Bypass erreur 'UnsupportedOperationError: sendKeysToActiveElement...'
        },
        shardTestFiles: true,
        maxInstances: 2
    }
 */