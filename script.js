document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAge();
});

function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // JavaScript months are 0-based
    const year = parseInt(document.getElementById('year').value);

    const birthDate = new Date(year, month, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the birthday has not occurred this year yet
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}
