function search() {
  const keyword = document.getElementById("searchBox").value;
  const resultList = document.getElementById("results");
  resultList.innerHTML = "Searching...";

  fetch("index.json")
  .then(res => res.json())
  .then(data => {
    const results = data.filter(item =>
      item.content && item.content.toLowerCase().includes(keyword.toLowerCase())
    );

    resultList.innerHTML = "";
    if (results.length === 0) {
      resultList.innerHTML = "<li>No results found.</li>";
    } else {
      results.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
        resultList.appendChild(li);
      });
    }
  });
