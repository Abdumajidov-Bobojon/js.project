const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()
const container = document.querySelector(".container")

request.addEventListener("load", function() {
    const response = JSON.parse(request.responseText)
    container.innerHTML = ""

    response.forEach(country => {
        const html = `
        <div class="country">
                <img src=${country.flags.png} alt="">
                <h2>${country.name.common}</h2>
                <b>${country.population}</b>
                <p>${renderCurrencies(country.currencies)}</p>
            </div>
        `
        container.insertAdjacentHTML("beforeend", html)
    });
})

function renderCurrencies(currencies) {
    for(let i in currencies) {
        return currencies[i].name
    }
}