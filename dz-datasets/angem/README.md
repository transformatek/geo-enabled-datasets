# ANGEM branches dataset
The datasets consists of branches of the National Agency for Management of Micro-Credits 
ANGEM : Agence Nationale de Gestion du Micro Crédit 


## Source

This dataset has been produced using the following link
[https://www.angem.dz/en/contacts/](https://www.angem.dz/en/contacts/).

## Date 

The dataset was created : 30/03/2021 

## Data format

| Key          | Description | 
| ------------ | -----------------------|
|id| sequentiel number |
|code| Wilaya offcial number |
|name| Name of the banche (agency) |
|type| Branche type : Agency or Antenne |
|address| Postal adresse |
|e-mail| Mail addresse |
|fax| Fax number |
|tel| Phone number |
|wilayas of attachment | Affilated Wilayas, usful for Antennes  |
|lat| Latitude coordinate |
|lon| Longitude coordinate |

## Processing steps

1. Data conversion from html to csv format with the [angem_convert_to_csv.ipynb](./angem_convert_to_csv.ipynb) Python Notebook
1. Geocoding
1. Check that location are within their corresponding Wilayas limits with the [angem_qc_wilayas.ipynb](./angem_qc_wilayas.ipynb) Python Notebook
1. Check that locations are near OSM Buildings with the [angem_qc_osm.ipynb](./angem_qc_osm.ipynb) Python Notebook 
1. Data validation and errors correction manually using QGIS

## Comments

Branches are related to 48 wilayas not to the new 58 Wialya (Provinces) of Algeria.

## Terms and conditions

Datasets are provided to you under a Creative Commons Attribution 4.0 International License (CC BY 4.0) which can be accessed [here](https://creativecommons.org/licenses/by/4.0/).

TRANSFORMATEK DISCLAIMS ALL WARRANTIES OF ANY KIND RELATED TO THE PROVISION OF THE DATASETS.
