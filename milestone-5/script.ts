const form = document.getElementById("resume-form") as HTMLFormElement
const resumedisplay = document.getElementById("resume-display") as HTMLDivElement;
const shareablrlinkcontainer = document.getElementById("shareable-link-container") as HTMLDivElement
const shareablelinkelement = document.getElementById("shareable-link") as HTMLAnchorElement
const downloadpdfbutton = document.getElementById("download-pdf") as HTMLButtonElement

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // collect input values
    const username = (document.getElementById("username") as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value

    const resumedata = {
        name,
        email,
        phone,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumedata));// saving the data locally

    // Hide the form after submission
    form.style.display = 'none';  // <-- This line hides the form

    // generate the content dynamically

    const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3><b>Personal Information</b></h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>email:</b><span contenteditable="true">${email}</span></p>
<p><b>phone:</b><span contenteditable="true">${phone}</span></p>

<h3><b>Education</b></h3>
<p contenteditable="true">${education}</p>

<h3><b>Experience</b></h3>
<p contenteditable="true">${experience}</p>

<h3><b>Skills</b></h3>
<p contenteditable="true">${skills}</p>
`;
    // display the generated resume
    resumedisplay.innerHTML = resumeHTML;

    // generate a shareable URL with the username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`

    //display the shareable link
    shareablrlinkcontainer.style.display = 'block'
    shareablelinkelement.href = shareableURL
    shareablelinkelement.textContent = shareableURL
});

//handle pdf download
downloadpdfbutton.addEventListener('click', () => {
    shareablrlinkcontainer.style.display = 'none' //jb pdf dpwnload hoga us mai shareable link hide hoga
    window.print(); // this will open the print dialog and allow the user to save as pdf
});
//prefill the form based on the username in the url
window.addEventListener('DOMContentLoaded', () => {
    const urlParms = new URLSearchParams(window.location.search);
    const username = urlParms.get('username');
    if (username) {
        //autofill if data is found in localstorage
        const savedResumedata = localStorage.getItem(username);
        if (savedResumedata) {
            const resumedata = JSON.parse(savedResumedata);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumedata.name;
            (document.getElementById('email') as HTMLInputElement).value = resumedata.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumedata.phone;
            (document.getElementById('education') as HTMLInputElement).value = resumedata.education;
            (document.getElementById('experience') as HTMLInputElement).value = resumedata.experience;
            (document.getElementById('skills') as HTMLInputElement).value = resumedata.skills;
        }
    }

})





