# Captcha-System
### Preview <a href='https://kashif-raza2019.github.io/captcha-system/'>here with this link</a>
A simple project created to integrate captcha verification into any website <br />
Creating or integrating captcha systems using APIs and other platforms like reCaptcha etc<br />
can prove to be quite time consuming method!, so why not just downloading this repo file as<br />
a dependency to your project <br />
## How to integrate it?
You can integrate it just by using this few steps:
## Step 1
let's say you have downloaded the complete directory at 
```
  your_project_dir / vendor / captcha-system
```
and your form is at 
```
  your_project_dir / index.html
```
then add these CSS and JS links to the header and before ending of body in html respectively
```html
  <head>
    <!--   Other Links   -->
    <!--   Single CSS Link for Captcha   -->
    <link rel="stylesheet" href="vendor/captcha-system/css/main.css">
  </head>
```
and before ending of your body tags just like we do for external JS links
add 
```html
  <script src = 'vendor/captcha-system/js/main.js'></script>
```
## Step 2
Now after doing so, 
add an empty div as shown below (Just copy paste it)
```html
    <div class = 'captcha-container'>
    </div>
```
and put it whereever you like (mostly you should put it just above the submit button of your form!
then here we come to the last step
add this ``` submit-after-valid-captcha ``` class to your submit button like here
```html
  <button type="submit" class="submit-after-valid-captcha">Submit</button>
```
and there you go this simple captcha will start working!
a container will be created where you have added the div and it will disable the 
submit button until the captcha will verified!
An example is already created for you here <a href='https://kashif-raza2019.github.io/captcha-system/'>Example Captcha Link</a>

### Step 3 (Not for users but for Open-Source Contributors)
- As this captcha is not tooo! good yet this repo is absolutely open 
 for your further implementations like having a good dynamic user-customizable UI, 
 some more safety features, advanced captcha's with multiple options of Audio, Video, Images
 etc... 
 feel free to fork and clone it!
 
 #### If you find this repo useful please star this repo 
