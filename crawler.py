import requests
from bs4 import BeautifulSoup
import json

def crawl(url):
    try:
        response = requests.get(url, timeout=5)
        soup = BeautifulSoup(response.text, 'html.parser')
        title = soup.title.string if soup.title else "No title"
        body_text = soup.get_text(separator=' ', strip=True)

        return {
            'url': url,
            'title': title,
            'content': body_text[:1000]  # batasi isi konten
        }
    except Exception as e:
        print(f"Gagal mengambil {url}: {e}")
        return None

urls = [
    "https://example.com",
    "https://www.wikipedia.org",
]

data = []

for url in urls:
    result = crawl(url)
    if result:
        data.append(result)

with open("index.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Selesai crawling.")
