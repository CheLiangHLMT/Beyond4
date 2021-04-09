import cloudscraper
from bs4 import BeautifulSoup
import requests
import re
import time
from flask import Flask, render_template, request
import os

app = Flask(__name__)
@app.route('/')
def index():
  return render_template('/index.html')

@app.route('/my-link/')
def my_link():
  if (__name__ == '__main__'):
    app.run(debug=True)
  
url = "https://www.lazada.com.my/products/graphic-card-colorful-igame-nvidia-geforce-rtx-3080-vulcan-oc-10g-i1486782912-s4901690276.html?spm=a2o4k.seller.list.1.2c557a79npzSQz&mp=1"

scraper = cloudscraper.create_scraper()

text = scraper.get(url).text

soup = BeautifulSoup(text,'html5lib')

start_time = time.time()

scraped_text = soup.get_text()

seconds = 0

keyword = bool(re.findall("Out of stock", scraped_text))

def re_text(scraped_text):
  if keyword == True:
    print("Out of Stock")
  else:
    print("Stock Available")

re_text(scraped_text)





