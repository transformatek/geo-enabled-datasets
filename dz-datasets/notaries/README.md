# Notaries dataset
Dataset for official notaries in Algeria

## Source

* Offical table of Algerian notaries 

## Date 

The dataset was created : 25/04/2021 

## Data format

| Key          | Description | 
| ------------ | -----------------------|
|num           | Sequentiel number |
|name          | Name of the notary               |
|address       | Address of the notary |
|code_wil      | Wilaya offcial number |
|court         | Court of attachement for the notary |
|tel           | Phone number |
|status        | The Notary legal status physical, company or chamber|
|lat           | Latitude coordinate |
|lon           | Longitude coordinate |

## Dataset creation steps

1. Automatic Text recognition of the offical table of Algerian 
1. Cross check with some online phonebooks
1. Check that location are within their corresponding Wilayas limits with home built Pyhton JupyterNotebooks 
1. Check that locations are near OSM Buildings with home built Pyhton JupyterNotebooks  
1. Data validation and errors correction manually using QGIS

## Comments

Branches are related to 48 wilayas not to the new 58 Wialya (Provinces) of Algeria.

## Terms and conditions

Datasets are provided to you under a Creative Commons Attribution 4.0 International License (CC BY 4.0) which can be accessed [here](https://creativecommons.org/licenses/by/4.0/).

TRANSFORMATEK DISCLAIMS ALL WARRANTIES OF ANY KIND RELATED TO THE PROVISION OF THE DATASETS.


