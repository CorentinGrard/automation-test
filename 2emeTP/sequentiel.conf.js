var globalConf = require('./protractor.conf.js');

var acceptanceConf = JSON.parse(JSON.stringify(globalConf));

acceptanceConf['capabilities'].shardTestFiles = true;
acceptanceConf['capabilities'].maxInstances = 2;
acceptanceConf['capabilities'].browserName = 'chrome';
acceptanceConf['capabilities'].unexpectedAlertBehaviour = 'accept';

acceptanceConf['capabilities']['goog:chromeOptions'] = {
    'args': ["--window-size=1920,1080", 'disable-infobars'], // "--headless", 
    w3c: false
  }

acceptanceConf['suites'] = {
	Wikipedia: 'test/e2e/Acceptance/Wikipedia/searchWord.Spec.js',
    //ImpotsGouv: 'test/e2e/Acceptance/ImpotsGouv/gouv.Spec.js',
};

exports.config = acceptanceConf;