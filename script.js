document.getElementById("explore").addEventListener("click", function() {
    window.location.href = "https://www.returnsage.com/";
});

document.getElementById("learn-more").addEventListener("click", function() {
    window.location.href = "https://www.returnsage.com/";
});

document.getElementById("book-demo").addEventListener("click", function() {
    window.location.href = "https://www.returnsage.com/";
});

document.getElementById("returnsage-link").addEventListener("click", function() {
    window.location.href = "https://www.returnsage.com/";
});

document.getElementById("blog-link").addEventListener("click", function() {
    window.location.href = "https://www.sproutron.com/blog"; // Update with actual blog URL
});

document.getElementById("solutions-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const dropdown = document.getElementById("solutions-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function(event) {
    if (!event.target.matches('#solutions-btn')) {
        const dropdown = document.getElementById("solutions-dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
});

document.getElementById("menu-toggle").addEventListener("click", function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById("contact-us").addEventListener("click", function() {
    document.getElementById("footer-section").scrollIntoView({ behavior: "smooth" });
});
