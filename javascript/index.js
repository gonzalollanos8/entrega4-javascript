const container = document.querySelector('.cardContainer');
const input = document.querySelector('.selection');
const btnSearch = document.querySelector('.search');
const errContainer = document.querySelector('.errContainer');
const form = document.querySelector('.form')


//tipos
const pokeType = (types) => {
    let avaibleTypes = []
    types.forEach(item => {
        avaibleTypes.push(item.type.name)
    });
    return avaibleTypes
}
//medidas
const heightToPoke = (height)=>{
    const valorPies = 0.3048
const finalHeight = Math.ceil(height*valorPies)
return finalHeight
}

//renderizar pokemon
const renderPoke = ({ name, weight, sprites, types, height }) => {
        return container.innerHTML = `
        <div class="card">
        <h2>${name.toUpperCase()}</h2>
        <img src="${sprites.other.dream_world.front_default || sprites.front_default}" alt="">
        <div class="ClassContainer">
        <p>Tipos:</p>
        ${pokeType(types).join(', ')}
        </div>
        <p>Altura = ${heightToPoke(height)} mts</p>
        <p>Peso = ${weight} kg</p>
        </div>`
}

//seleccion de pokemon

const selectPoke = async (e) => {
        e.preventDefault()
        let selectPokemon = input.value
        container.innerHTML = ""
        const errInContainer = '<span>No encontramos el pokemon seleccionado</span>'
    
        if (!checkError(selectPokemon)) {
        return container.innerHTML = errInContainer
        }
    
        const data = await fetchPoke(selectPokemon)
    
        if (data == null || data == undefined) {
        return container.innerHTML = errInContainer
        }
        renderPoke(data)
        return
    }
    




//chequar error
const checkError = (value)=> {
        let error = false
        
    if(value === ""){
        errContainer.innerHTML = "El input esta vacio"
        return
    }
    errContainer.innerHTML = ""
    return error = true
}





const init = () => {
    form.addEventListener("submit", selectPoke)
}
init()
