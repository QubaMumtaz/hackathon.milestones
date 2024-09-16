var form = document.getElementById("resume-form") as HTMLFormElement
var resumedisplay = document.getElementById("resume-display") as HTMLDivElement

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
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

    if (resumedisplay) {
        resumedisplay.innerHTML = resumeHTML
    } else { console.error(`The resume dispaly is missing.`); }

    //Hide the form after submission
    form.classList.add("hidden");
});



