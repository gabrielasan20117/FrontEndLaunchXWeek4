const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeIdentifier = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeIdentifier}`;
    fetch(url).then((respuesta) => {
        if(respuesta.status != "200"){
            console.log(respuesta);
            pokeImage("./image/Pokemon.png");
        }
        else
        {
            return respuesta.json();
        }
    }).then((data) => {
        if(data){
            console.log(data);
            let imagen = data.sprites.front_default;
            let id = data.id;
            let experience = data.base_experience;
            let stats = data.stats;
            let mov = data.moves;
            let type = data.types[0].type.name;
            console.log(id);       
            pokeInfo(imagen, id, experience, stats, type);
            pokeMove(mov);
        } 
    });
}
const pokeImage = (url) => {
    const pokeImagen = document.getElementById("pokeImagen");
    pokeImagen.src = url;
}
const pokeInfo = (_imagen, _id, _experience, _stats, _type) => {
    
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    pokeImage(_imagen);
    
    let row = document.createElement('tr');
    let h_1 = document.createElement('th');
    let h_2 = document.createElement('th');
    let h_3 = document.createElement('th');
    let h_4 = document.createElement('th');
    let h_5 = document.createElement('th');
    let h_6 = document.createElement('th');
    let h_7 = document.createElement('th');
    let h_8 = document.createElement('th');
    let h_9 = document.createElement('th');

    h_1.innerHTML = "#";
    h_2.innerHTML = "Experience";
    h_3.innerHTML = "Hp";
    h_4.innerHTML = "Attack";
    h_5.innerHTML = "Defense";
    h_6.innerHTML = "Special - Attack";
    h_7.innerHTML = "Special - Defense";    
    h_8.innerHTML = "Speed";    
    h_9.innerHTML = "Type";
    row.appendChild(h_1);
    row.appendChild(h_9);
    row.appendChild(h_2);
    row.appendChild(h_3);
    row.appendChild(h_4);
    row.appendChild(h_5);
    row.appendChild(h_6);
    row.appendChild(h_7);
    row.appendChild(h_8);
    thead.appendChild(row); 

    let row2 = document.createElement('tr');
    let rdata1 = document.createElement('td');
    let rdata2 = document.createElement('td');
    let rdata3 = document.createElement('td');
    let rdata4 = document.createElement('td');
    let rdata5 = document.createElement('td');
    let rdata6 = document.createElement('td');
    let rdata7 = document.createElement('td');
    let rdata8 = document.createElement('td');
    let rdata9 = document.createElement('td');

    rdata1.innerHTML = _id;
    rdata2.innerHTML = _experience;
    rdata9.innerHTML = _type;
    rdata3.innerHTML = _stats[0].base_stat;
    rdata4.innerHTML = _stats[1].base_stat;
    rdata5.innerHTML = _stats[2].base_stat;
    rdata6.innerHTML = _stats[3].base_stat;
    rdata7.innerHTML = _stats[4].base_stat;
    rdata8.innerHTML = _stats[5].base_stat;

    row2.appendChild(rdata1);
    row2.appendChild(rdata9);
    row2.appendChild(rdata2);
    row2.appendChild(rdata3);
    row2.appendChild(rdata4);
    row2.appendChild(rdata5);
    row2.appendChild(rdata6);
    row2.appendChild(rdata7);
    row2.appendChild(rdata8);
    tbody.appendChild(row2);

    document.getElementById('pokeTable').appendChild(table);
}
const pokeMove = (_mov) => {
    
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let encabezado = document.createElement('tr');
    let h1 = document.createElement('th');
    let h2 = document.createElement('th');
   
    
    table.appendChild(thead);
    table.appendChild(tbody);

    h1.innerHTML = "#";
    h2.innerHTML = "Move";

    encabezado.appendChild(h1);
    encabezado.appendChild(h2);
    console.log(_mov.length)
    for (var i = 0; i < 1; i++) {
        let row = document.createElement('td');
        for (var z = 0; z < _mov.length; z ++){
            let data = document.createElement('tr')
            data.innerHTML = _mov[z].move.name;
            row.appendChild(data);
        }
        tbody.appendChild(row);
     }
     document.getElementById('pokeMov').appendChild(table);

}

//background="image/f1.jpg"