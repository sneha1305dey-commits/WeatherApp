const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    const location = document.getElementById('location').value;

    function updateTemp(data) {
        const element = document.getElementById('weatherInfo');
        element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
    }


    const prom = fetch(`https://api.weatherapi.com/v1/current.json?key=a00738652512433c8ae175813260108&q=${location}&aqi=no`);

    prom
    .then((response)=>response.json())
    .then((data)=> updateTemp(data));
})
