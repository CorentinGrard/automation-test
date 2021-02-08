/**
 * Last modification: TMO 2019-10-02
 */

const { element } = require("protractor");


const googleListPath = element(by.css('div ul.erkvQe'));
const googleResultPath = element(by.css('div#rso'));
const wikipediaRightTabs = element(by.css('nav#p-views div ul'));
const wikipediaSommaire = element(by.css('div#toc ul'));
const impotsTabsPath = element(by.css("ul.menu.clearfix"))

module.exports = {
	googleListPath,
	googleResultPath,
	wikipediaRightTabs,
	wikipediaSommaire
};