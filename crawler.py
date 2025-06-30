import requests
from bs4 import BeautifulSoup
import json

sites = [
    "https://rumaysho.com/",
    "https://muslim.or.id/"
]

data = []

for site in sites:
    try:
        res = requests.get(site, timeout=10)
        soup = BeautifulSoup(res.text, "html.parser")
        title = soup.title.string if soup.title else site
        content = " ".join(p.get_text() for p in soup.find_all("p"))
        data.append({
            "url": site,
            "title": title.strip(),
            "content": content.strip()
        })
    except Exception as e:
        print(f"Error crawling {site}: {e}")

with open("index.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("✅ Crawling selesai. index.json berhasil dibuat.")
