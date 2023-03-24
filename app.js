class bil{
    constructor (brand, color, id){
        this.brand = brand;
        this.color = color;
        this.id = id;
    }
}
let billista = [];
const addbutton = document.getElementById("addbutton")
const brand = document.getElementById("brand")
const color = document.getElementById("color")
const lista_bilar_div = document.getElementById("listabilarid")

addbutton.addEventListener("click", addButtonClick)

function addButtonClick(){
    

    const now = Date.now();
    const id = now.toString();

    let brandname = brand.value;

    if (brandname !== ""){
        let car = new bil(brand.value, color.value, id);
        billista.push(car);

        brand.value="";
        color.value="";
        lista_bilar_div.innerHTML("");

        billista.forEach(createHtmlBillista)
    }
    else{
        alert("fill fabrikat")
    }

    console.log(`id= ${id} brand = ${brandname}`);
}

const createHtmlBillista = () => {
    const bildiv = document.createElement("div");
    bildiv.className = "bil_div_element";

    const bilH2 = document.CreateElement("h2");
    const bilPcolor = document.createElement("p");
    const bilDelButt = document.createElement("button");

    bilH2.innerText = `${bil.brand}`
    bilPcolor.innerText = `Färg: ${bil.color}`
    bilDelButt.innerText = `Delete`
    bilDelButt.id = bil.id

    bildiv.append(bilH2, bilPcolor, bilDelButt)
    lista_bilar_div.appendChild(bildiv);
}