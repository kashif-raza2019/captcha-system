/**
 * Author: Kashif Raza
 * Date:   2021-11-26
 * Description: This is the main Javascript file for Captcha.
 */
document.onload = getCaptcha();


function getCaptcha() {
    var form = document.getElementsByClassName("captcha-container");
    var captcha = document.createElement("div");
    captcha.className = "captcha";
    var captchaTxt = generateCaptcha();
    captcha.innerHTML = "<div class='captcha-image-container'><div class='captcha-image' data-captcha = '"+captchaTxt+"'>"+captchaTxt+"</div></div><br><button type='button' class='captcha-refresh' onclick='generateCaptcha2()'>Refresh</button><br /><input type='text' class='captcha-input' placeholder='Enter Captcha Shown' required/><button type='button' class='captcha-verify' onclick='captchaValidate();'>Verify</button><br /><h4 id='captcha-response'></h4>";
    form[0].appendChild(captcha);
    var submit = document.getElementsByClassName('submit-after-valid-captcha');
    submit[0].disabled = true;
}

function captchaValidate() {
    var captcha = document.getElementsByClassName("captcha-input");
    var captchaText = captcha[0].value;
    var originalCaptchaImg = document.getElementsByClassName("captcha-image");
    originalCaptcha = originalCaptchaImg[0].getAttribute("data-captcha");

    if(captchaText == originalCaptcha) {
        console.log("Captcha Matched");
        var submit = document.getElementsByClassName('submit-after-valid-captcha');
        submit[0].disabled = false;
        var verify = document.getElementsByClassName('captcha-verify');
        verify[0].disabled = true;
        verify[0].style.cursor = "not-allowed";
        var captchaResponse = document.getElementById('captcha-response');
        captchaResponse.innerHTML = "<p style='color: green; text-align: center;'>Captcha Matched</p>";
    } else {
        var submit = document.getElementsByClassName('submit-after-valid-captcha');
        submit[0].disabled = true;
        var verify = document.getElementsByClassName('captcha-verify');
        verify[0].disabled = false;
        var captchaResponse = document.getElementById('captcha-response');
        captchaResponse.innerHTML = "<p style='color: red; text-align: center;'>Incorrect Captcha</p>";
        generateCaptcha2();
    }  

}

// Function to generate captcha without changing the data and content of the captcha-image div 
// For 1st time generation of captcha
function generateCaptcha() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
      {  text += possible.charAt(Math.floor(Math.random() * possible.length));}
    return text;
}

// Function to generate captcha without changing the data and content of the captcha-image div
// For rest of the time generation of captcha
function generateCaptcha2() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
      {  text += possible.charAt(Math.floor(Math.random() * possible.length));}
    var captcha = document.getElementsByClassName("captcha-image");
    captcha[0].innerHTML = text;
    captcha[0].setAttribute("data-captcha", text);
}