let idDM = document.getElementById("DarkMode");
let BkMode = document.getElementById("BKMode");
let BTNMode = document.getElementById("BTNMode")
let BTNCad = document.getElementById("BTNCad")
let TextMode = document.getElementById("CadastroText")
let logIcon = document.getElementById("Icon")
let SenhaIcon = document.getElementById("IconSenha")
let SenhaNIcon = document.getElementById("IconSenhaN")
let EmailIcon = document.getElementById("IconEmail")
let Log = document.getElementById("Log")
let LogS = document.getElementById("LogS")
let LogSN = document.getElementById("LogSN")
let LogEmail = document.getElementById("LogEmail")



idDM.addEventListener('change', function() {
    if (idDM.checked) {
        logIcon.setAttribute("src", "../IMG/perfilIcon.png");
        SenhaIcon.setAttribute("src", "../IMG/senhaIcon.png");
        SenhaNIcon.setAttribute("src", "../IMG/senhaIcon.png");
        EmailIcon.setAttribute("src", "../IMG/emailIcon.png");

        BkMode.classList.replace('backgroundLightMode', 'backgroundDarkMode');
        BTNMode.classList.replace('BtnExitLightMode', 'BtnExitDarkMode');
        TextMode.classList.replace('CadastroTextLightMode', 'CadastroTextDarkMode');
        Log.classList.replace('LoginLight', 'LoginDark');
        LogS.classList.replace('SenhaLight', 'SenhaDark');
        LogSN.classList.replace('SenhaLight', 'SenhaDark'); 
        LogEmail.classList.replace('EmailLight', 'EmailDark');   
        BTNCad.classList.replace('EnviarLight', 'EnviarDark'); 
        console.log("foi")
    } else {
        logIcon.setAttribute("src", "../IMG/perfilIconDK.png");
        SenhaIcon.setAttribute("src", "../IMG/senhaIconDK.png");
        SenhaNIcon.setAttribute("src", "../IMG/senhaIconDK.png");
        EmailIcon.setAttribute("src", "../IMG/emailIconDK.png");

        BkMode.classList.replace('backgroundDarkMode', 'backgroundLightMode');
        BTNMode.classList.replace('BtnExitDarkMode', 'BtnExitLightMode');
        TextMode.classList.replace('CadastroTextDarkMode', 'CadastroTextLightMode');
        Log.classList.replace('LoginDark', 'LoginLight');
        LogS.classList.replace('SenhaDark', 'SenhaLight');
        LogSN.classList.replace('SenhaDark', 'SenhaLight');
        LogEmail.classList.replace('EmailDark', 'EmailLight');
        BTNCad.classList.replace('EnviarDark', 'EnviarLight')
    }
});

