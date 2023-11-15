const fetchPoke = async (selectedPoke) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    try {
        const response = await fetch(url + selectedPoke)
        const data = await response.json()
        return data
    } 
    
    catch (error) {
        errContainer.innerHTML = `no encontramos tu pokemon`
        return
    }

}
