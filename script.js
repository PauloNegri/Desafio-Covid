async function pegarpais() {
    const paisSelecionado = document.getElementById('inputPaises').value
    const div = document.getElementById('resultadoPaises');
    const divDois = document.getElementById('codigoPaises');
    const divTres = document.getElementById('casosPaises');
    const divQuatro = document.getElementById('atualizadoPaises');
    const divCinco = document.getElementById('umb');
    const divSeis = document.getElementById('doisb');
    const divSete = document.getElementById('tresb');
    const url = (`https://api.covid19api.com/live/country/${paisSelecionado}`);
    
    try{
    const {data} = await axios.get(url);
    const lastData = data[data.length-1];
    const countryName = lastData.Country;
    div.innerHTML = countryName;
    const countryCode = lastData.CountryCode;
    divDois.innerHTML = countryCode;
    const countryCasos = lastData.Confirmed;
    divTres.innerHTML = countryCasos;
    const countryatt = lastData.Date;
    divQuatro.innerHTML = countryatt;
    const obtos = lastData.Deaths;
    divCinco.innerHTML = (`|${obtos}`);
    const infectados = lastData.Active;
    divSeis.innerHTML = (`|${infectados}`);
    const recuperados = lastData.Recovered;
    divSete.innerHTML =(`|${recuperados}`) ;
    

    }catch(error){
    console.log('erro');
    }
}

