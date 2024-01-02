
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/centraldosscripts.com.br\/wordpress\/IPTV\/COD-9844\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.4.2"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);


  document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector(".snow-container");

    const particlesPerThousandPixels = 0.1;
    const fallSpeed = 1.25;
    const pauseWhenNotActive = true;
    const maxSnowflakes = 200;
    const snowflakes = [];

    let snowflakeInterval;
    let isTabActive = true;

    function resetSnowflake(snowflake) {
        const size = Math.random() * 5 + 1;
        const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
        const viewportHeight = window.innerHeight;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
        snowflake.style.top = `-${size}px`;

        const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationTimingFunction = "linear";
        snowflake.style.animationName =
            Math.random() < 0.5 ? "fall" : "diagonal-fall";

        setTimeout(() => {
            if (parseInt(snowflake.style.top, 10) < viewportHeight) {
                resetSnowflake(snowflake);
            } else {
                snowflake.remove(); // Remove when it goes off the bottom edge
            }
        }, animationDuration * 1000);
    }

    function createSnowflake() {
        if (snowflakes.length < maxSnowflakes) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflakes.push(snowflake);
            snowContainer.appendChild(snowflake);
            resetSnowflake(snowflake);
        }
    }

    function generateSnowflakes() {
        const numberOfParticles =
            Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
            particlesPerThousandPixels;
        const interval = 5000 / numberOfParticles;

        clearInterval(snowflakeInterval);
        snowflakeInterval = setInterval(() => {
            if (isTabActive && snowflakes.length < maxSnowflakes) {
                requestAnimationFrame(createSnowflake);
            }
        }, interval);
    }

    function handleVisibilityChange() {
        if (!pauseWhenNotActive) return;

        isTabActive = !document.hidden;
        if (isTabActive) {
            generateSnowflakes();
        } else {
            clearInterval(snowflakeInterval);
        }
    }

    generateSnowflakes();

    window.addEventListener("resize", () => {
        clearInterval(snowflakeInterval);
        setTimeout(generateSnowflakes, 1000);
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);
});

var image_save_msg='You are not allowed to save images!';
  var no_menu_msg='Context Menu disabled!';
  var smessage = "Content is protected !!";

function disableEnterKey(e)
{
  var elemtype = e.target.tagName;
  
  elemtype = elemtype.toUpperCase();
  
  if (elemtype == "TEXT" || elemtype == "TEXTAREA" || elemtype == "INPUT" || elemtype == "PASSWORD" || elemtype == "SELECT" || elemtype == "OPTION" || elemtype == "EMBED")
  {
    elemtype = 'TEXT';
  }
  
  if (e.ctrlKey){
     var key;
     if(window.event)
          key = window.event.keyCode;     //IE
     else
          key = e.which;     //firefox (97)
    //if (key != 17) alert(key);
     if (elemtype!= 'TEXT' && (key == 97 || key == 65 || key == 67 || key == 99 || key == 88 || key == 120 || key == 26 || key == 85  || key == 86 || key == 83 || key == 43 || key == 73))
     {
    if(wccp_free_iscontenteditable(e)) return true;
    show_wpcp_message('You are not allowed to copy content or view source');
    return false;
     }else
      return true;
     }
}


/*For contenteditable tags*/
function wccp_free_iscontenteditable(e)
{
  var e = e || window.event; // also there is no e.target property in IE. instead IE uses window.event.srcElement
    
  var target = e.target || e.srcElement;

  var elemtype = e.target.nodeName;
  
  elemtype = elemtype.toUpperCase();
  
  var iscontenteditable = "false";
    
  if(typeof target.getAttribute!="undefined" ) iscontenteditable = target.getAttribute("contenteditable"); // Return true or false as string
  
  var iscontenteditable2 = false;
  
  if(typeof target.isContentEditable!="undefined" ) iscontenteditable2 = target.isContentEditable; // Return true or false as boolean

  if(target.parentElement.isContentEditable) iscontenteditable2 = true;
  
  if (iscontenteditable == "true" || iscontenteditable2 == true)
  {
    if(typeof target.style!="undefined" ) target.style.cursor = "text";
    
    return true;
  }
}

////////////////////////////////////
function disable_copy(e)
{ 
  var e = e || window.event; // also there is no e.target property in IE. instead IE uses window.event.srcElement
  
  var elemtype = e.target.tagName;
  
  elemtype = elemtype.toUpperCase();
  
  if (elemtype == "TEXT" || elemtype == "TEXTAREA" || elemtype == "INPUT" || elemtype == "PASSWORD" || elemtype == "SELECT" || elemtype == "OPTION" || elemtype == "EMBED")
  {
    elemtype = 'TEXT';
  }
  
  if(wccp_free_iscontenteditable(e)) return true;
  
  var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  
  var checker_IMG = '';
  if (elemtype == "IMG" && checker_IMG == 'checked' && e.detail >= 2) {show_wpcp_message(alertMsg_IMG);return false;}
  if (elemtype != "TEXT")
  {
    if (smessage !== "" && e.detail == 2)
      show_wpcp_message(smessage);
    
    if (isSafari)
      return true;
    else
      return false;
  } 
}

//////////////////////////////////////////
function disable_copy_ie()
{
  var e = e || window.event;
  var elemtype = window.event.srcElement.nodeName;
  elemtype = elemtype.toUpperCase();
  if(wccp_free_iscontenteditable(e)) return true;
  if (elemtype == "IMG") {show_wpcp_message(alertMsg_IMG);return false;}
  if (elemtype != "TEXT" && elemtype != "TEXTAREA" && elemtype != "INPUT" && elemtype != "PASSWORD" && elemtype != "SELECT" && elemtype != "OPTION" && elemtype != "EMBED")
  {
    return false;
  }
} 
function reEnable()
{
  return true;
}
document.onkeydown = disableEnterKey;
document.onselectstart = disable_copy_ie;
if(navigator.userAgent.indexOf('MSIE')==-1)
{
  document.onmousedown = disable_copy;
  document.onclick = reEnable;
}
function disableSelection(target)
{
    //For IE This code will work
    if (typeof target.onselectstart!="undefined")
    target.onselectstart = disable_copy_ie;
    
    //For Firefox This code will work
    else if (typeof target.style.MozUserSelect!="undefined")
    {target.style.MozUserSelect="none";}
    
    //All other  (ie: Opera) This code will work
    else
    target.onmousedown=function(){return false}
    target.style.cursor = "default";
}
//Calling the JS function directly just after body load
window.onload = function(){disableSelection(document.body);};

//////////////////special for safari Start////////////////
var onlongtouch;
var timer;
var touchduration = 1000; //length of time we want the user to touch before we do something

var elemtype = "";
function touchstart(e) {
  var e = e || window.event;
  // also there is no e.target property in IE.
  // instead IE uses window.event.srcElement
    var target = e.target || e.srcElement;
  
  elemtype = window.event.srcElement.nodeName;
  
  elemtype = elemtype.toUpperCase();
  
  if(!wccp_pro_is_passive()) e.preventDefault();
  if (!timer) {
    timer = setTimeout(onlongtouch, touchduration);
  }
}

function touchend() {
    //stops short touches from firing the event
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
  onlongtouch();
}

onlongtouch = function(e) { //this will clear the current selection if anything selected
  
  if (elemtype != "TEXT" && elemtype != "TEXTAREA" && elemtype != "INPUT" && elemtype != "PASSWORD" && elemtype != "SELECT" && elemtype != "EMBED" && elemtype != "OPTION") 
  {
    if (window.getSelection) {
      if (window.getSelection().empty) {  // Chrome
      window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {  // Firefox
      window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {  // IE?
      document.selection.empty();
    }
    return false;
  }
};

document.addEventListener("DOMContentLoaded", function(event) { 
    window.addEventListener("touchstart", touchstart, false);
    window.addEventListener("touchend", touchend, false);
});

function wccp_pro_is_passive() {

  var cold = false,
  hike = function() {};

  try {
    const object1 = {};
  var aid = Object.defineProperty(object1, 'passive', {
  get() {cold = true}
  });
  window.addEventListener('test', hike, aid);
  window.removeEventListener('test', hike, aid);
  } catch (e) {}

  return cold;
}
/*special for safari End*/
</script>
<script id="wpcp_disable_Right_Click" type="text/javascript">
document.ondragstart = function() { return false;}
  function nocontext(e) {
     return false;
  }
  document.oncontextmenu = nocontext;
</script>
<style>
.unselectable
{
-moz-user-select:none;
-webkit-user-select:none;
cursor: default;
}
html
{
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>
<script id="wpcp_css_disable_selection" type="text/javascript">
var e = document.getElementsByTagName('body')[0];
if(e)
{
  e.setAttribute('unselectable',"on");
}