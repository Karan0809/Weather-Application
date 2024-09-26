function search(){
    let text = document.getElementsByTagName("input")[0].value
    let div = document.getElementsByClassName("con")[0]
    if(text!==""){
        div.style.display = "block"
    }
    else{
        div.style.display = "none"
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=eedd52cc943dd9174f2c65178d154bdd`).then((res)=>{
        renderData(res.data)
    }).catch((err)=>{
        console.log(err)
    })
}

function renderData(data){
    let con = document.getElementsByClassName("con")[0]
    con.innerHTML = `
        <h2>${data.name}</h2>
        <div class="agg">
            <div class="max">
                <div>MAX</div>
                <div>${data.main.temp_max}<sup>o</sup>C</div>
            </div>
            <div class="min">
                <div>MIN</div>
                <div>${data.main.temp_min}<sup>o</sup>C</div>
            </div>
        </div>
        <div class="desc">
            <p style="font-size: 35px;">${data.weather[0].main}</p>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" style="height: 150px;"/>
            <h1 style="font-size: 35px;">${data.main.temp}<sup>o</sup>C</h1>
        </div>
        <div class="feels">
            <h1>Feels Like</h1>
            <h1>${data.main.feels_like}<sup>o</sup>C</h1>
        </div>
    `
}