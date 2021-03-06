import os
import sys
import json
import requests
import selenium
from decouple import config


eth_ca = config('ETHEREUM_API_KEY')

eth_search = input('Enter Ethereum Contract Address: ')

response = requests.get(f'https://api.etherscan.io/api?module=contract&action=getsourcecode&address={eth_search}&apikey={eth_ca}')


def ethereum_contract_address(eth_ca, response):
    print(response.json())


ethereum_contract_address(eth_ca, response)