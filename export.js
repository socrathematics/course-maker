var JSZip = require("jszip");
var zip; //the zip file
var f; // the folder
var htt; //the generated html text
var ct; //the title of the course
var scr;
var chk;
// takes in generated body and title as input, outputs entire page.
function plug(title,data,check=false,script=''){
    return `<!DOCTYPE html>
    <html lang="en" class="bg-white" style="">
    <head>
      <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163408633-2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-163408633-2');
    </script>
      <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PF58PDC');</script>
    <!-- End Google Tag Manager -->
      <title>${title}</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="apple-mobile-web-app-title" content="SOCRATHEMATICS">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
      <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://socrathematics.github.io/mathquill-0.10.1/mathquill.css"/>
<script src="https://socrathematics.github.io/mathquill-0.10.1/mathquill.js"></script>
<script>
var MQ = MathQuill.getInterface(2);
MQ.config({spaceBehavesLikeTab: true,
  leftRightIntoCmdGoes: 'up',
  restrictMismatchedBrackets: true,
  sumStartsWithNEquals: true,
  supSubsRequireOperand: true,
  charsThatBreakOutOfSupSub: '+-=<>',
  autoSubscriptNumerals: true,
  autoCommands: 'pi theta sqrt sum delta',
  autoOperatorNames: 'sin cos',
  maxDepth: 10,
  substituteTextarea: function() {
    return document.createElement('textarea');
  }});
</script>
      <link rel="icon" href="https://socrathematics.github.io/favicon.png">
      <link rel="stylesheet" href="https://socrathematics.github.io/fonts.css">
      <link rel="stylesheet" href="https://socrathematics.github.io/header.css">
      <link rel="stylesheet" href="https://socrathematics.github.io/style.css">
        <!--mathjax-->
      <script>
    MathJax = {
      tex: {
        inlineMath: [['$', '$']]
      }
    };
    </script>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </head>
    
    <body id="bod">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF58PDC"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <script src="https://socrathematics.github.io/menu.js"></script>
    <script>activate("calc");</script>
    
    <div class="container" style="margin-top:30px">
      <div class="row">
        <div class="col-sm-3">
          <h3 >Topic</h3>
    
          <p >Topics within Topic</p>
    
          <nav class="nav nav-pills flex-column" >
            <li class="nav-item active">
              <a class="nav-link" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  href="#" >Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
    
          </nav>
          <hr class="d-sm-none">
        </div>
    
        <div class="col-sm-8" id="bod2">
          <div>
          ${data}
    <pre>
    
    
    
    
    
    

    
    </pre>
     <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link " href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item active"><a class="page-link" href="">•</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next" id="next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
         </nav>
        </div>
      </div>
    </div>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js"></script>
    
    <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries -->
    
    <script  src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script>
    <script  src="https://www.gstatic.com/firebasejs/7.15.0/firebase-auth.js"></script>
    <script  src="https://www.gstatic.com/firebasejs/7.15.0/firebase-firestore.js"></script>
    
    <script>
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyA6bA3PlHiFGHB1CIWobuBUsEa9IQ7AL3I",
        authDomain: "socrathematics.firebaseapp.com",
        databaseURL: "https://socrathematics.firebaseio.com",
        projectId: "socrathematics",
        appId: "1:809638401187:web:9608adf73f25ced6d45b16",
        measurementId: "G-2QEQZPCEZR"
    
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    
      const auth=firebase.auth();
      const db = firebase.firestore();
    </script>
    <script src="/auth/auth.js"></script>
    ${check? '<script src="/check.js></script>':''}
    ${check? '<script>'+script+'</script>':'' }
    </body>
    </html>`
}
//wrap the html file in a zip file so that we can give a folder with title of course.
function wrap(title,ht){
    zip = new JSZip();
    f = zip.folder(`${title==''? 'course':title}`)
    f.file("index.html", ht);
}
function give(title){ //will give the file immediately
   
        zip.generateAsync({type:"blob"}).then(function (blob) { // 1) generate the zip file
            saveAs(blob, `${title==''? 'course':title}.zip`); // 2) trigger the download
        }, function (err) {
            jQuery("#blob").text(err);
        });
}
//this is the main function
function release(toggle=true){//called by the menus.
    makeCourse(info);
    content = plug(ct,htt,chk,scr);
    wrap(ct,content);
    give(ct);
    if (toggle){
        $('.navbar-toggler').click(); }

}
