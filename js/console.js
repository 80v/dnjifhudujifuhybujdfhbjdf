//#variables (Storing data for the session)
var root = 0;
var entered = 0;
var theme = "falicity";
var lastupdate = "24/02/2021";
var serverhost = "54.230.126.41";
var now = new Date();
var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
var a = document.getElementById("mainbody");
var c = document.getElementById("p");

//#Time counter
function countTimer() {
           ++totalSeconds;
           var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var seconds = totalSeconds - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
        }

//#Console line variable (Fix time later)
cmdroot = '<span class="red">[</span><span class="purple">' + now.getUTCHours() +':'+ now.getUTCMinutes() + '<span class="red">]─[</span><span class="purple">root</span><span class="red">@</span><span class="purple">falicity</span><span class="red">]─[~]</span><span class="purple">></span><span class="yellow">~$ </span>';
falguest = '<span class="red">[</span><span class="purple">' + now.getUTCHours() +':'+ now.getUTCMinutes() + '<span class="red">]─[</span><span class="purple">guest</span><span class="red">@</span><span class="purple">tecca</span><span class="red">]─[~]</span><span class="purple">></span><span class="yellow">~$ </span>';
form = $('<div style="width: 100%;display: table"><div style="display: table-cell; width: 1%">' + falguest + '</div>&nbsp<form id="form" style="display: table-cell; width :100%"><input autocomplete="off" autocorrect="off" autocapitalize="on" spellcheck="false" id="tCommand" type="text" maxlength="42" class="nostyle" autofocus /></form></div>').appendTo('#content');

//#Command lanches
function launchCommandAsRoot(command) 
{
	if (theme == 'falicity'){
		if (command === ' ') 
		res = 'Welcome to Tecca!<br>Created by <a href="https://github.com/80v">crimes</a><br>Server ip '+ serverhost + '<br>Todays date ' + now.getUTCDay() + '/'+ now.getUTCMonth() + '/' + now.getUTCFullYear() + '<br>Last update ' + lastupdate + '<br><br><b>Type \'help\' for the command list</b>'
		$('<div>' + '<p>' + res + '</p></div>').insertBefore(form)
	}
}

function launchCommandAsVisitor(command) 
{
	if (theme == 'falicity'){
		$('<div>' + falguest + command.cmd + '<p>' + command.res + '</p></div>').insertBefore(form)

	}
	else{
		launchCommandAsVisitor({
			cmd: vInput + ' | error',
			res: '<div><p>[ <span class="red">ERROR</span> ] An unexpected error occured</p></div>'
		})
	}
}

//#Custom scroll bar (fix later)
$('#content').niceScroll({
	autohidemode: false,
	cursorwidth: "7px",
	cursorborderradius: "3px",
	railpadding: { top: 0, left: 0, right: 0, bottom: 9 }
});

//#Enter key (submits) | Value imputs and console commands
$('form').on('submit', function(e) {
	e.preventDefault();
	try {
		var vInput = $('input').val().toLowerCase();
		if (root > 0) {
			launchCommandAsRoot(commands[$('input').val()]);
		} else {
		    if (vInput === 'enter') {
				if (entered == '0'){
					$('#content > *').not(':last').remove();
					a.style.backgroundImage="url(wallpaper.jpg)"
					entered = 1;
					launchCommandAsRoot(' ');
				}
				else{
					launchCommandAsVisitor({
						cmd: 'enter',
						res: '<div><p>[ <span class="red">ERROR</span> ] You have already entered the site.</p></div>'
					})
				}
			}
			//#Basic commands
			else if (vInput === 'clear') {
				if (entered == '0') {
					launchCommandAsVisitor({
						cmd: vInput + ' | error',
						res: '<div><p>[ <span class="red">ERROR</span> ] You must first enter the site.</p></div>'
					})
				}
				else
				{
					$('#content > *').not(':last').remove();
				}
			}
			//#Normal commands
			else if (vInput === "help") {
				if (entered == '0') {
					launchCommandAsVisitor({
						cmd: vInput + ' | error',
						res: '<div><p>[ <span class="red">ERROR</span> ] You must first enter the site.</p></div>'
					})
				}
				else 
				{

					launchCommandAsVisitor({
						cmd: 'Help menu',
						res: 'Welcome to the help menu!<br><br>Commands<br> ~~~~~~ <br>clear - Clears the terminal<br> theme falicity - Default website theme<br>theme hacktheplanet - Hack the planet theme<br><br>Info<br> ~~~~~~<br>whoami - Shows info on me<br>socials - Shows my socials<br>discord - Sends Teccas Invite!<br><br>Tools<br> ~~~~~~<br>rainbowtb - Rainbow table (hashed & dehashed passwords)<br>passgen - Generates a random 25 char pass<br>webdl - Download html/css/js websites<br>'
					})
				}
			}
			else if (vInput === "whoami") {
				if (entered == '0') {
					launchCommandAsVisitor({
						cmd: vInput + ' | error',
						res: '<div><p>[ <span class="red">ERROR</span> ] You must first enter the site.</p></div>'
					})
				}
				else 
				{
					launchCommandAsVisitor({
						cmd: 'About me',
						res: 'Below you can find information about me<br><br>Basic information <br>------<br> Name: Crimes <br> Age: 14 years old<br>Gender: Male<br> Country: USA<br><br> Epic Information<br>------<br>What languages do i speak: English<br>What are my hobbies: Basketball<br><br>Work/job information<br>------<br>Job: I dont work<br>Type: weird mf<br>Earnings: 0<br>Biggest earning: $8<br>'
					})
				}
			}
			else if (vInput === "socials") {
				if (entered == '0') {
					launchCommandAsVisitor({
						cmd: vInput + ' | error',
						res: '<div><p>[ <span class="red">ERROR</span> ] You must first enter the site.</p></div>'
					})
				}
				else 
				{
					launchCommandAsVisitor({
						cmd: 'Falicitys socials',
						res: 'My socials are all listed below :P<br><br>Social media<br>//////<br>Discord: <a href="https://discord.gg/2VRgYeVYJh">crimes#3333</a><br>Instagram: <a href="https://instagram.com/kkk/">None</a><br>Twitter: <a href="https://twitter.com/kkk">None</a><br>Github: <a href="https://github.com/80v/">80v</a><br><br><b> Tecca Discord Server <a href="https://discord.gg/2VRgYeVYJh">Tecca</a></b>'
					})
				}
			}
			else if (vInput === "discord") {
				if (entered == '0') {
					launchCommandAsVisitor({
						cmd: vInput + ' | error',
						res: '<div><p>[ <span class="red">ERROR</span> ] You must first enter the site.</p></div>'
					})
				}
				else 
				{
					launchCommandAsVisitor({
						cmd: 'https://discord.gg/2VRgYeVYJh',
						res: ''
					})
				}
			}
			else if (vInput === "qna") {
				if (entered == '0') {
					launchCommandAsVisitor({
						cmd: vInput + ' | error',
						res: '<div><p>[ <span class="red">ERROR</span> ] You must first enter the site.</p></div>'
					})
				}
				else
				{
					launchCommandAsVisitor({
						cmd: 'Questions and answers',
						res: ' <b> Type \'1-12\' to see the answer to the question</b>'
					})
				}
			}
			//#Question answers
			else if (vInput === "q1") {
				if (entered == '0') {
					launchCommandAsVisitor({
						cmd: vInput + ' | error',
						res: '<div><p>[ <span class="red">ERROR</span> ] You must first enter the site.</p></div>'
					})
				}
				else 
				{
					launchCommandAsVisitor({
						cmd: 'Question 1 | Answer',
						res: ''
					})
				}
			} 
			//#Theme changing and launcher
			else if (vInput.startsWith("theme")) {
				if (vInput === "theme falicity") {
					if (entered == '0') {
						launchCommandAsVisitor({
							cmd: vInput + ' | error',
							res: '<div><p>[ <span class="red">ERROR</span> ] You must first enter the site.</p></div>'
						})
					}
					else 
					{
						theme == "falcitiy"
						a.style.backgroundImage="url(wallpaper.jpg)"
						launchCommandAsVisitor({
							cmd: 'Falicity theme',
							res: '<div><p>[ <span class="green">SUCCESS</span> ] Theme changed to Falicity.</p></div>'
						})
					}
				}
				else if (vInput === "theme hacktheplanet") {
					if (entered == '0') {
						launchCommandAsVisitor({
							cmd: vInput + ' | error',
							res: '<div><p>[ <span class="red">ERROR</span> ] You must first enter the site.</p></div>'
						})
					}
					else 
					{
						theme == "hacktheplanet"
						a.style.backgroundImage="url(hacktheplanet.jpg)"
						launchCommandAsVisitor({
							cmd: 'Hack the planet theme',
							res: '<div><p>[ <span class="green">SUCCESS</span> ] Theme changed to Hack the planet.</p></div>'
						})
					}
				}
				else {
					launchCommandAsVisitor({
						cmd: 'Theme | Error',
						res: '<div><p>[ <span class="red">ERROR</span> ] Please enter a theme name.</p></div>'
					})
				}
			}
			else if (vInput.trim() !== "") {
				launchCommandAsVisitor(commands[vInput]);
			}
		}
	}//# Error handler
	catch(error) {
		if (root > 0) {
			launchCommandAsRoot({
				cmd: $('input').val(),
				res: '<div><p>[ <span class="red">ERROR</span> ] ' + $('input').val() + ': command not found</p></div>'
			});
		} else {
			launchCommandAsVisitor({
				cmd: $('input').val(),
				res: '<div><p>[ <span class="red">ERROR</span> ] ' + $('input').val() + ': command not found</p></div>'
			});
		}
	}
	//#Value /Imput (Fixed 25th feb)
	$('input').val('');
	//#Scrollbar, content and page movement
	$('#content').getNiceScroll(0).resize().doScrollTop($('#content')[0].scrollHeight, 0);
});

//#Little info on this site. This site is forked from a github repository that i lost recently.
//
//Credit to mahuah
//Credit to Josh
//
//#Credits to the 4 authors who created this framework