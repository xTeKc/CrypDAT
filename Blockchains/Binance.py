import os
import sys
import requests
import selenium
from decouple import config

bsc_ca = config('BSCSCAN_API_KEY')


def binance_contract_address(bsc_ca):
    input("Enter Binance Contract Address: ")


binance_contract_address(bsc_ca)