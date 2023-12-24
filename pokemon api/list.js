
function load(){
    var offset=0;
    var limit=10;
    var url=`https://pokeapi.co/api/v2/pokemon/?
        offset=${offset}&
        limit=${limit}
    `;
    var request=new XMLHttpRequest();
    request.open("GET",url);
    request.onreadystatechange=loadsList;
    request.send();
}


function click(event){
    // console.log("eee");
    loadPokemonFromUrl(event.target.id);
}

function loadsList(){
    if(this.readyState==4 && this.status==200){
        var pokemonsDiv=document.getElementById("pokemons");
        var response=JSON.parse(this.responseText);
        for(var pokemon of response.results){
            // console.log(pokemon);
            pokemonsDiv.innerHTML+=`
                <div class="
                    px-6 py-3 bg-blue-300
                    rounded-xl shadow-xl
                    "
                    id="${pokemon.url}"
                >
                    ${pokemon.name}    
                </div>
            `;
        }
        for(var div of pokemonsDiv.children){
            div.addEventListener("click",click)
        }
    }
}

function loadPokemonFromUrl(url){
    // console.log("eee");
    // var url=`https://pokeapi.co/api/v2/pokemon/ditto`;
    var request=new XMLHttpRequest();
    request.open("GET",url);
    request.onreadystatechange=loadPokemon;
    request.send();
}

function loadPokemon(){
    if(this.status==200 && this.readyState==4){
        var response=JSON.parse(this.responseText);
        var div=document.getElementById("pokemonView");
        div.innerHTML=`
            <div class="flex flex-col py-10 px-20">
                <h1 class="text-white text-[50px] font-bold">
                    ${response.name}
                </h1>
                <div class="flex w-fit p-3 rounded-xl shadow-xl bg-blue-400">
                    <img class="block" src="${response.sprites.front_default}">
                    <img class="block" src="${response.sprites.back_default}">
                </div>
                <div>

                </div>
            </div>
        `;
    }
}
