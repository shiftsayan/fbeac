from bs4 import BeautifulSoup

def get_urls_from_html(html):
    soup = BeautifulSoup(html, features="html.parser")
    return { tag['href'] for tag in soup.findAll('a', href=True) if tag['href'] != '#' }