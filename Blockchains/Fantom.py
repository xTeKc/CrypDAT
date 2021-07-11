import os
import sys
import requests
import selenium
from decouple import config


ftm_ca = config('FANTOM_API_KEY')


def fantom_contract_address(ftm_ca):
    input("Enter Fantom Contract Address: ")


fantom_contract_address(ftm_ca)