from flask import Flask, request, jsonify, send_from_directory
import json
import os

app = Flask(__name__, static_folder='static')

# Load index hasil crawling
with open("index.json", encoding="utf-8") as f:
    index = json.load(f)

@app.route("/")
def home():
    return send_from_directory("static", "index.html")

@app.route("/search")
def search():
    query = request.args.get("q", "").lower()
    results = []

    for item in index:
        if query in item["title"].lower() or query in item["content"].lower():
            results.append({
                "url": item["url"],
                "title": item["title"]
            })

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
