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

	it("Vérification du somamaire sur la page Wikipedia", async () => {
		var sommaireTarget = {
			matchingResult: true,
			checkTabsOrder: true,
			sommaire: [
				{
					name: "1 Éthymologie"
				},
				{
					name: "2 Introduction"
				},
				{
					name: "3 Typologie"
				},
				{
					name: "4 Secteur industriel",
				},
				{
					name: "4.1 Philosophie libre"
				},
				{
					name: "5 Licence et droits"
				},
				{
					name: "6 Distribution"
				},
				{
					name: "7 Construction"
				},
				{
					name: "8 Qualité des logiciels",
				},
				{
					name: "8.1 Bogues"
				},
				{
					name: "9 Logiciels critiques"
				},
				{
					name: "10 Notes et références"
				},
				{
					name: "11 Voir aussi",
				},
				{
					name: "11.1 Articles connexes"
				}
			]
		}
		await actions.wikipediaSommaire(sommaireTarget);
	});

});