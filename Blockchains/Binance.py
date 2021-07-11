import os
import sys
import requests
import selenium
from decouple import config


bsc_ca = config('BINANCE_API_KEY')

bsc_search = input('Enter Binance Contract Address: ')

response = requests.get(f'https://api.bscscan.com/api?module=contract&action=getsourcecode&address={bsc_search}&apikey={bsc_ca}')

def binance_contract_address(bsc_ca, response):
    print(response.json())


binance_contract_address(bsc_ca, response)


