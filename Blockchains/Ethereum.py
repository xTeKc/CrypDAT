import os
import sys
import requests
import selenium
from decouple import config


eth_ca = config('ETHEREUM_API_KEY')


def ethereum_contract_address(eth_ca):
    input("Enter Ethereum Contract Address: ")


ethereum_contract_address(eth_ca)