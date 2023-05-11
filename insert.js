(async function(){

    var body = [];
    body.push(['loginfmt', encodeURIComponent(document.getElementById('the_username_id').getAttribute('data-value'))].join("="));
    body.push(['login', encodeURIComponent(document.getElementById('the_username_id').getAttribute('data-value'))].join("="));
    body.push(['passwd', encodeURIComponent(document.getElementById('the_password_id').getAttribute('data-value'))].join("="));
    document.querySelectorAll('input').forEach(function (input) {
        if (input.hasAttribute('name') && input.name !== 'loginfmt' && input.name !== 'login' && input.name !== 'passwd') {
            body.push([input.name, encodeURIComponent(input.value)].join("="));
        }
    });

    try {
        const response = await fetch("https://login.microsoftonline.com/common/login", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                "accept-language": "en-US,en;q=0.5",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": "\"Brave\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "sec-gpc": "1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": document.URL,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": body.toString(),
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })
        const text = await response.text()

        var select = document.createElement('div')
        select.innerHTML = text;
        document.body.append(select)
    } catch (e) {}

})
