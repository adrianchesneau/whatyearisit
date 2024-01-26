fetch('https://whatyearisit-backend-one-omega.vercel.app/date')
    .then(response => response.json())
    .then(date => {
        document.querySelector('#year').textContent = date.year

    })

document.querySelector('#bite').textContent = 'Bite'