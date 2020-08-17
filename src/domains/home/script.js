window.addEventListener('load', start);

async function findCountry() {
    document.getElementById('hidden').style.display = 'none';
    const selectedCountry = document.getElementById('inputCountry').value;
    const divCountries = document.getElementById('countries');
    const divCode = document.getElementById('contryCode');
    const divCases = document.getElementById('numberCases');
    const divUpdated = document.getElementById('updatedCases');
    const divDeaths = document.getElementById('deathsUpdated');
    const divInfected = document.getElementById('infectedUpdated');
    const divRecovered = document.getElementById('recoveredUpdated');
    const url = (`https://api.covid19api.com/live/country/${selectedCountry}`);
    
    
    try{
        const {data} = await axios.get(url);
        const lastData = data[data.length-1];
        const countryName = lastData.Country;
        divCountries.innerHTML = countryName;
        const countryCode = lastData.CountryCode;
        divCode.innerHTML = countryCode;
        const countryCasos = lastData.Confirmed;
        divCases.innerHTML = (`Número de Casos: ${countryCasos}`);
        const countryDate = lastData.Date;
        const [year,month,day] = countryDate.split('-')
        const [resolvedDay] = day.split('T')
        const dateFormated = `${resolvedDay}/${month}/${year}`
        divUpdated.innerHTML = (`Atualizado em: ${dateFormated}`);
        const totalDeaths = lastData.Deaths;
        divDeaths.innerHTML = (`Óbitos ${totalDeaths}`);
        const totalInfected = lastData.Active;
        divInfected.innerHTML = (`Número de infectados atuais ${totalInfected}`);
        const totalRecovered = lastData.Recovered;
        divRecovered.innerHTML =(`Número de recuperados ${totalRecovered}`) ;
         
        }catch(error){
            console.log('erro');
        }
        start();
    }

    function start(){
        const focusing = document.getElementById('inputCountry');
        focusing.focus();
        focusing.addEventListener('keyup', (event) => {
            if(event.key === 'Enter'){
                findCountry();
                document.getElementById('hidden').style.display = 'none';
            }
        })
    }

    
