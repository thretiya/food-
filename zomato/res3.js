// This is where you can add interactivity if needed.
// For example, you could add a function to dynamically update ratings or add event listeners.

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You selected ${item.querySelector('h4').innerText}`);
    });
});
