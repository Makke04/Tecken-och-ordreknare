document.querySelector('Textarea').addEventListener('input', function (event) {

    let Text = event.target.value.toString();

    document.getElementById('Tecken').innerHTML = "Tecken: " + Text.length
    document.getElementById('Ord').innerHTML = "Ord: " + Text.match( /(\w+)/g ).length

});