window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.find-address').addEventListener('click', findmystate);
    document.querySelector('.find-location').addEventListener('click', findmyloc);

});

// install express with `npm install express` 
const findmystate = () => {
    console.log('//////')
    const status = document.querySelector('.status-address');
    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitute;
        const longitude = position.coords.longitude;
        // console.log(latitude+' '+longitude)
        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(geoApiUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
    const error = () => {
        status.textContent = 'Unable to find the location';
    }
    navigator.geolocation.getCurrentPosition(success, error);

}

const findmyloc = () => {
    const status = document.querySelector('.status-location');
    const apikey = '35d360facfadd532990090316f5880be'
    const address = document.getElementById('input').value

    const success = (position) => {
        console.log(position);
        const locationapi = `http://api.positionstack.com/v1/forward?access_key=${apikey}&query=${address}`

        fetch(locationapi)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    const error = () => {
        status.textContent = 'Unable to find the address';
    }
    navigator.geolocation.getCurrentPosition(success, error);

}