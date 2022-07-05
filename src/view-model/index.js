import { hello } from "./hello";
import "../styles/style.scss";
import { BeersViewModel } from "./beers"

hello();

console.log("Hello webpack");

// --------------------------Beers------------------- //

const response = await BeersViewModel.start();
console.log(response);
const display = document.querySelector('#content');
//display.textContent = response.data;
//response.data = display2

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

function generateBeers(beerList) {
    console.log(beerList);
    let divContent = document.createElement("div");
    for (let i = 0; i < beerList.length; i++) {

        //Create beer container
        let container = document.createElement('div');
        container.classList.add("container", "card", "bg-dark", "text-light");
        divContent.appendChild(container);

        //Create beer row 1
        let row = document.createElement('div');
        row.classList.add("row");
        container.appendChild(row);

        //Create col 1 to 3 row 1
        for (let j = 0; j < 3; j++) {
            let col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);

            //Add innerHTML depending on index
            switch(j) {
                case 0 :
                    col.innerHTML = "<b>" + beerList[i].name + "</b><br><span>" + beerList[i].tagline + "</span>";
                    break;
                case 1 :
                    col.innerHTML = "<span> alc% : " + beerList[i].abv + "</span><br><span> Brassée en : " + beerList[i].first_brewed + "</span>";
                    break;
                case 2 :
                    col.innerHTML = "<img src='" + beerList[i].image_url + "' class='picture'>"
                    break;
            }
        }

        //Create beer row 2
        let row2 = document.createElement('div');
        row2.classList.add("row", "rowSpace");
        divContent.appendChild(row2);

        //1 col in row2
        let col = document.createElement('div');
        col.classList.add('col');
        row2.appendChild(col);

        //col content
        col.innerHTML = "<b>Descripiton</b><br>" + beerList[i].description;
        display.appendChild(divContent);
    }
    return display;
}

generateBeers(response.data);

console.log(response.data);

// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

// display = document.querySelector('#app').innerHTML;

// const display = response.kays;

// console.log(display);

// let i;

// for (i = 0; i < 25; i++) {
//     // display.textContent = response;
//     console.log([i]); 
// }

// Object.keys
// Object.values
// Object.entries