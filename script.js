function run() {
    let htmlCode = document.getElementById("html_code").value;
    let cssCode = document.getElementById("css_code").value;
    let jsCode = document.getElementById("js_code").value;

    console.log(cssCode);
    let outputCode = document.getElementById("output");

    outputCode.contentDocument.body.innerHTML = htmlCode + "<style>" +cssCode+ "</style>";
    outputCode.contentWindow.eval(jsCode);
}
(function() {
    function logToConsole(message) {
      var consoleOutput = document.getElementById('console-output');
      var p = document.createElement('p');
      p.innerText = message;
      consoleOutput.appendChild(p);
    }
  
    // Override the default console.log method to redirect output to the HTML page
    var originalLog = console.log;
    console.log = function(message) {
      originalLog.apply(console, arguments);
      logToConsole(message);
    };
  
    // Listen for errors in the console and display them in real-time
    window.addEventListener('error', function(event) {
      logToConsole(event.message);
    });
  })();
  