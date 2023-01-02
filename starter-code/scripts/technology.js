import data from '../data.json' assert {type : 'json'};


const technology_array = data.technology;


let tech_heading = document.querySelector('div.tech_heading');
let tech_description = document.querySelector('div.tech_description');
let tech_img = document.querySelector('img.tech_img');
let tech_change = document.querySelectorAll('div.tech_change');

let start = 0;

tech_img.src = technology_array[start].images.portrait;
tech_heading.innerHTML = technology_array[start].name;
tech_description.innerHTML = technology_array[start].description;
tech_change[start].classList.add('active');

for ( let i = 0; i < tech_change.length; i++)
{
    tech_change[i].onclick = change_pic;
}

function change_pic()
{
    tech_img.src = technology_array[this.id].images.portrait;
    tech_heading.innerHTML = technology_array[this.id].name;
    tech_description.innerHTML = technology_array[this.id].description;
    for ( let i = 0; i < tech_change.length; i++)
    {
         tech_change[i].classList.remove('active');
    }
    tech_change[this.id].classList.add('active');

}
