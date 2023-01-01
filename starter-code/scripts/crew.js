import data from '../data.json' assert {type: 'json'};

const crew = data.crew // array of objects

let change = document.querySelectorAll('div.change');
let crew_img = document.querySelector('img.crew_img');
let crew_no = 0;


crew_img.src = crew[crew_no].images.png;

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
            break;
        case '1':
            crew_img.src = crew[crew_no].images.png;
            break;
        case '2':
            crew_img.src = crew[crew_no].images.png;
            break;
        case '3':
            crew_img.src = crew[crew_no].images.png;
            break;
    }
}