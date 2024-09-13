var toggleSkills = document.getElementById('button') as HTMLButtonElement
var skill = document.getElementById('skills') as HTMLElement

toggleSkills.addEventListener('click',()=>{
    if (skill.style.display=== 'none') {
        skill.style.display='block'
    }
    else{
        skill.style.display = 'none' }
}
)