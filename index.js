var botaoMobile = document.getElementById('botao-menu-mobile');

var divLeft = document.getElementById('div-left');

var profilePicture = document.getElementById('profilepicture');

var navAbout = document.getElementById('nav-about');

var navWorkExperience = document.getElementById('nav-workexperience');

var navEducationHistory = document.getElementById('nav-educationhistory');

var navSkillsIHave = document.getElementById('nav-skillsihave');

var navInterestsIHave = document.getElementById('nav-interestsihave');

var navCertificates = document.getElementById('nav-certificates-courses');

botaoMobile.onclick = clickBotao

var statusMenu = "fechado";

function clickBotao() {

	if (statusMenu == "fechado") {
		divLeft.style.height = "100%";
		profilePicture.style.display = "block";
		navAbout.style.display = "block";
		navWorkExperience.style.display = "block";
		navEducationHistory.style.display = "block";
		navSkillsIHave.style.display = "block";
		navInterestsIHave.style.display = "block";
		navCertificates.style.display = "block";

		statusMenu = "aberto";
	} else {
		divLeft.style.height = "7%";
		profilePicture.style.display = "none";
		navAbout.style.display = "none";
		navWorkExperience.style.display = "none";
		navEducationHistory.style.display = "none";
		navSkillsIHave.style.display = "none";
		navInterestsIHave.style.display = "none";
		navCertificates.style.display = "none";

		statusMenu = "fechado";
	}
	
}