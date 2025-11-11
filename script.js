function searchContent() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const articles = document.querySelectorAll("#constitution article");
    
    articles.forEach(article => {
        const text = article.innerText.toLowerCase();
        if (text.includes(input)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
}
