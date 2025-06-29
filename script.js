const data = [
  { title: "Cara Menanam Padi", content: "Panduan lengkap menanam padi di sawah" },
  { title: "Teknologi AI", content: "Artificial Intelligence dan dampaknya di masa depan" },
  { title: "Resep Nasi Goreng", content: "Langkah mudah membuat nasi goreng enak" }
];

function search() {
  const keyword = document.getElementById("searchBox").value.toLowerCase();
  const resultList = document.getElementById("results");
  resultList.innerHTML = "";

  const results = data.filter(item =>
    item.title.toLowerCase().includes(keyword) ||
    item.content.toLowerCase().includes(keyword)
  );

  if (results.length === 0) {
    resultList.innerHTML = "<li>No results found.</li>";
  } else {
    results.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.title}</strong>: ${item.content}`;
      resultList.appendChild(li);
    });
  }
}
