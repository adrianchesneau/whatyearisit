fetch('http://localhost:3000/date')
    .then(response => response.json())
    .then(date => {
        document.querySelector('#year').textContent = date.year

    })

