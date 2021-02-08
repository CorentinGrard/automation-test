/**
 * Last modification: TMO 2019-10-02
 */
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

browser.ignoreSynchronization = true;

const actions = require('../../actions');
const init = require('../../init');

describe("Page de connexion", async () => {

	it("Lancement du navigateur et accès à l'url renseignée", async () => {
		await actions.pageAccess(init.impotsUrl);
	});

	it("Click sur l'onglet Particulier", async () => {
		await browser.sleep(1000);
		await actions.impotsTabsClick("Particulier")
		// await element(by.css('a.ban_individual')).click();
	});

	it("Click sur l'onglet svg#patrimoine", async () => {
		await element(by.css('svg#patrimoine')).click();
		await element(by.cssContainingText('td', 'Déclarer mes revenus')).click();
	});

	it("Je déclare mes autres revenus", async () => {
		await browser.sleep(1000);
		await element(by.cssContainingText('a', 'Je déclare mes autres revenus')).click();
	});

	it("Oui oui", async () => {
		await browser.sleep(1000);
		await element(by.css('input#search-field')).click();
		await browser.sleep(1000);
		await element(by.css('input#search-field')).sendKeys("Test terminé");
		await browser.sleep(5000);
	});

});