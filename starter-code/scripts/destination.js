import data from '../data.json' assert {type: 'json'};

const destination = data.destinations //an array of objects

let planet_img = document.querySelector('div.planet_img');
let planet_links = document.querySelector('div.planet_links');
let planet_heading = document.querySelector('div.planet_heading');
let planet_description = document.querySelector('div.planet_description');
let distance = document.querySelector('div.distance');
let time = document.querySelector('div.time');

let img_no = 0;
let heading_no = 0;
let planet_description_no = 0;
let distance_no = 0;
let time_no = 0;

displayImg();
displayheading();
displayInfo();
displayDistance();
displayTime();


function displayImg(value = 0)
{
    if (value != 0)
    {
        let delete_img = document.querySelector('img.image');
        delete_img.remove();
    }
    let img = document.createElement('img');
    img.src = destination[img_no].images.png;
    img.classList.add('image');
    planet_img.appendChild(img);
}
function displayheading(value = 0)
{
    if (value != 0)
    {
        let delete_heading = document.querySelector('h1.heading');
        delete_heading.remove();
    }
    let heading = document.createElement('h1');
    let heading_text = document.createTextNode(destination[heading_no].name);
    heading.classList.add('heading');
    heading.appendChild(heading_text);
    planet_heading.appendChild(heading);
}
function displayInfo(value = 0)
{
    planet_description.innerHTML = destination[planet_description_no].description;
}

function displayDistance(value = 0)
{
    if (value != 0)
    {
        let delete_para = document.querySelector('p.para');
        delete_para.remove();
    }
    let para = document.createElement('p');
    let para_text = document.createTextNode(destination[distance_no].distance);
    para.appendChild(para_text);
    distance.appendChild(para);
    para.classList.add('para');
}

function displayTime(value = 0)
{
    if (value != 0)
    {
        let delete_para = document.querySelector('p.para');
        delete_para.remove();
    }
    let para = document.createElement('p');
    let para_text = document.createTextNode(destination[time_no].travel);
    para.appendChild(para_text);
    time.appendChild(para);
    para.classList.add('para');
}



/* displaying planet names */

for (let i = 0; i < destination.length; i++)
{
    let planet_link = document.createElement('div');
    let planet_link_text = document.createTextNode(destination[i].name);
    planet_link.appendChild(planet_link_text);
    planet_links.appendChild(planet_link);
    planet_link.classList.add('planet_link');
    planet_link.onclick = change;
}


function change()
{
    let name = this.innerHTML;
    switch (name)
    {
        case 'Moon':
            img_no = 0;
            heading_no = 0;
            planet_description_no = 0;
            distance_no = 0;
            time_no = 0;
            displayImg(1);
            displayheading(1);
            displayInfo(1);
            displayTime(1);
            displayDistance(1);
            break;
        
        case 'Mars':
            img_no = 1;
            heading_no = 1;
            planet_description_no = 1;
            distance_no = 1;
            time_no = 1;
            displayImg(1);
            displayheading(1);
            displayInfo(1);
            displayTime(1);
            displayDistance(1);
            break;

        case 'Europa':
            img_no = 2;
            heading_no = 2;
            planet_description_no = 2;
            distance_no = 2;
            time_no = 2;
            displayImg(1);
            displayheading(1);
            displayInfo(1);
            displayTime(1);
            displayDistance(1);
            break;
        
        case 'Titan':
            img_no = 3;
            heading_no = 3;
            planet_description_no = 3;
            distance_no = 3;
            time_no = 3;
            displayImg(1);
            displayheading(1);
            displayInfo(1);
            displayTime(1);
            displayDistance(1);
            break;
    }
}