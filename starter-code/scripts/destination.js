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


function displayImg()
{
    let img = document.createElement('img');
    img.src = destination[img_no].images.png
    planet_img.appendChild(img);
}
function displayheading()
{
    let heading = document.createElement('h1');
    let heading_text = document.createTextNode(destination[heading_no].name);
    heading.classList.add('heading');
    heading.appendChild(heading_text);
    planet_heading.appendChild(heading);
}
function displayInfo()
{
    planet_description.innerHTML = destination[planet_description_no].description;
}

function displayDistance()
{
    let para = document.createElement('p');
    let para_text = document.createTextNode(destination[distance_no].distance);
    para.appendChild(para_text);
    distance.appendChild(para);
    para.classList.add('para');
}

function displayTime()
{
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
}
