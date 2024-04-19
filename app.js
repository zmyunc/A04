document.addEventListener('DOMContentLoaded', function() {
  fetchWeather();
  fetchNews();
});

function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=8a243859642ed29443c4156fda2a8fb5 `;
  fetch(url)
      .then(response => response.json())
      .then(data => {
          document.getElementById('weather').textContent = `It's currently ${data.main.temp}°C in ${data.name}.`;
      })
      .catch(error => console.log(error));
}

function fetchNews() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b193cb895ce843fcb516ee1111b202e3`;
  
  fetch(url)
      .then(response => response.json())
      .then(data => {
          const headlines = data.articles;
          const headlinesList = document.getElementById('news-headlines');
          headlines.forEach(article => {
              const li = document.createElement('li');
              li.textContent = article.title;
              headlinesList.appendChild(li);
          });
      })
      .catch(error => console.log(error));
}
