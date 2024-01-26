fetch('https://whatyearisit-backend-one-omega.vercel.app/year')
    .then(response => response.json())
    .then(date => {
        document.querySelector('#year').textContent = date.year

    })