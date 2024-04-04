url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error'))