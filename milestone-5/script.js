var form = document.getElementById("resume-form");
var resumedisplay = document.getElementById("resume-display");
var shareablrlinkcontainer = document.getElementById("shareable-link-container");
var shareablelinkelement = document.getElementById("shareable-link");
var downloadpdfbutton = document.getElementById("download-pdf");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    var username = document.getElementById("username").value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumedata = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumedata)); // saving the data locally
    // Hide the form after submission
    form.style.display = 'none'; // <-- This line hides the form
    // generate the content dynamically
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3><b>Personal Information</b></h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n<h3><b>Education</b></h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3><b>Experience</b></h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n<h3><b>Skills</b></h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    // display the generated resume
    resumedisplay.innerHTML = resumeHTML;
    // generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //display the shareable link
    shareablrlinkcontainer.style.display = 'block';
    shareablelinkelement.href = shareableURL;
    shareablelinkelement.textContent = shareableURL;
});
//handle pdf download
downloadpdfbutton.addEventListener('click', function () {
    shareablrlinkcontainer.style.display = 'none';
    window.print(); // this will open the print dialog and allow the user to save as pdf
});
//prefill the form based on the username in the url
window.addEventListener('DOMContentLoaded', function () {
    var urlParms = new URLSearchParams(window.location.search);
    var username = urlParms.get('username');
    if (username) {
        //autofill if data is found in localstorage
        var savedResumedata = localStorage.getItem(username);
        if (savedResumedata) {
            var resumedata = JSON.parse(savedResumedata);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumedata.name;
            document.getElementById('email').value = resumedata.email;
            document.getElementById('phone').value = resumedata.phone;
            document.getElementById('education').value = resumedata.education;
            document.getElementById('experience').value = resumedata.experience;
            document.getElementById('skills').value = resumedata.skills;
        }
    }
});
