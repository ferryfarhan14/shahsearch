function search() {
  const keyword = document.getElementById("searchBox").value.toLowerCase();
  const resultList = document.getElementById("results");
  resultList.innerHTML = "🔄 Searching...";

  fetch("index.json")
    .then(res => res.json())
    .then(data => {
      const results = data.filter(item =>
        (item.title || "").toLowerCase().includes(keyword) ||
        (item.content || "").toLowerCase().includes(keyword)
      );

      resultList.innerHTML = "";
      if (results.length === 0) {
        resultList.innerHTML = "<li>❌ Tidak ditemukan.</li>";
      } else {
        results.forEach(item => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${item.url}" target="_blank"><strong>${item.title}</strong></a><br><small>${item.content.slice(0, 100)}...</small>`;
          resultList.appendChild(li);
        });
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      resultList.innerHTML = "<li>⚠️ Gagal memuat data.</li>";
    });
}
