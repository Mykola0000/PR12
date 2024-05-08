document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const meal = document.querySelector('input[name="meal"]:checked').value;
    const dishes = Array.from(document.querySelectorAll('input[name="dish"]:checked')).map(el => el.value);
    const comment = document.getElementById('comment').value;


    const text = `${username} (${email}) з’їв на ${meal.toLowerCase()} ${dishes.join(', ')} та залишив такий коментар: "${comment}"`;


    document.getElementById('output').textContent = text;
});
