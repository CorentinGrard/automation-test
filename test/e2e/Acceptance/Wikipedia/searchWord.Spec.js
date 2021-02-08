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
        await actions.pageAccess(init.googleUrl);
    });
	
    it("Saisie de la chaîne de caractères 'wikipedia logiciel'", async () => {
        await actions.googleSearch('wikipedia logiciel');
    });
	
	it("Clic sur le résultat 'Logiciel — Wikipédia'", async () => {
        await actions.googleResult('Logiciel — Wikipédia');
    });
	
	it("Vérification des onglets affichés sur la page Wikipedia", async () => {
        var tabTarget = {
			matchingResult: true,
			checkTabsOrder: true,
			tabsDef: [
				{
					tabName: "Lire"
				},
				{
					tabName: "Modifier"
				},
				{
					tabName: "Modifier le code"
				},
				{
					tabName: "Voir l’historique"
				}
			]
		}
		await actions.wikipediaTabs(tabTarget);
    });
	
});