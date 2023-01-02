import data from '../data.json' assert {type: 'json'};

const crew = data.crew // array of objects

let change = document.querySelectorAll('div.change');
let crew_img = document.querySelector('img.crew_img');
let crew_career  = document.querySelector('div.crew_career');
let crew_name = document.querySelector('div.crew_name');
let crew_description = document.querySelector('div.crew_description');
let crew_no = 0;


crew_img.src = crew[crew_no].images.png;
crew_career.innerHTML = crew[crew_no].role;
crew_name.innerHTML = crew[crew_no].name;
crew_description.innerHTML = crew[crew_no].bio;
let btn = document.getElementById('4').classList.add('active');
let btn_small = document.getElementById('0').classList.add('active');

/* change */ 
for (let i = 0; i < change.length; i++)
{
    change[i].onclick = changeImg;
}


function changeImg()
{
    crew_no = this.id;
    switch(crew_no)
    {
        case '0':
            crew_img.src = crew[crew_no].images.png;
            changeCrew(this.id);
            break;
        case '1':
            crew_img.src = crew[crew_no].images.png;
            changeCrew(this.id);
            break;
        case '2':
            crew_img.src = crew[crew_no].images.png;
            changeCrew(this.id);
            break;
        case '3':
            crew_img.src = crew[crew_no].images.png;
            changeCrew(this.id);
            break;
        case '4':
            crew_no -= 4;
            crew_img.src = crew[crew_no].images.png;
            changeCrew(this.id);
            break;
        case '5':
            crew_no -= 4;
            crew_img.src = crew[crew_no].images.png;
            changeCrew(this.id);
            break;
        case '6':
            crew_no -= 4;
            crew_img.src = crew[crew_no].images.png;
            changeCrew(this.id);
            break;
        case '7':
            crew_no -= 4;
            crew_img.src = crew[crew_no].images.png;
            changeCrew(this.id);
            break;
    }
}

function changeCrew(value)
{
    crew_img.src = crew[crew_no].images.png;
    crew_career.innerHTML = crew[crew_no].role;
    crew_name.innerHTML = crew[crew_no].name;
    crew_description.innerHTML = crew[crew_no].bio;

    let btn = document.getElementById(value);
    for (let i = 0; i < change.length; i++)
    {
        change[i].classList.remove('active');
    }
    btn.classList.add('active');
}
