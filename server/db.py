import datetime as dt
import sqlite3
import time

from util import get_urls_from_html

def connect():
    cxn = sqlite3.connect('store.db')
    cur = cxn.cursor()
    return cxn, cur

def insert_ad(ad):
    cxn, cur = connect()
    cur.execute('''
            INSERT INTO ads (
                id, 
                html, 
                created_at, 
                targeting
            ) VALUES (
                ?, ?, ?, ?
            )
        ''', (ad['id'], ad['html'], ad['created_at'], ad.get('targeting'))
        )
    cxn.commit()

def insert_url(id, url):
    cxn, cur = connect()
    cur.execute('''
            INSERT INTO urls (
                id, 
                url
            ) VALUES (
                ?, ?
            )
        ''', (id, url)
        )
    cxn.commit()

def insert_many(ad_data):
    print("Data received at {}".format(dt.datetime.now()))
    if ad_data == None:
        return
    for ad in ad_data:
        insert_ad(ad)
        for url in get_urls_from_html(ad['html']):
            insert_url(ad['id'], url)
            time.sleep(1)

if __name__ == "__main__":
    print("Initializing database...")
    cxn, cur = connect()
    # Create `ads` table
    cur.execute('''
        CREATE TABLE ads (
            id PRIMARY KEY,
            html,
            created_at,
            targeting
        )
    ''')
    # Create `urls` table
    cur.execute('''
        CREATE TABLE urls (
            id,
            url
        )
    ''')
    cxn.commit()
