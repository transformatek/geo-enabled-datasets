# Dataset for official accountants in Algeria

## Source

This dataset is prduced using the pdf file downloaded from 
(http://www.cn-onec.dz/images/comptables-2019.pdf)[http://www.cn-onec.dz/images/comptables-2019.pdf]

## Date 

The dataset was created : 07/04/2021
Using accountants list for : 2019 

## Data format

### Physical persons (comapnies)

| Key            | Description | 
| ------------   | -----------------------|
|num             | Sequentiel number |
|num_inscription | Inscription number |
|first_name      | First name of the accountant |
|last_name       | Last name of the accountant |
|address         | Postal adresse |
|wilaya          | Wilayas name |
|tel             | Phone number |
|fax             | Fax number |
|email           | Mail address |
|lat             | Latitude coordinate |
|lon             | Longitude coordinate |
|code_wil        | Wilaya offcial number |

### Moral persons (comapnies)

| Key            | Description | 
| ------------   | -----------------------|
|num             | Sequentiel number |
|num_inscription | Inscription number |
|commercial_nams | Commercial registred name |
|legal_form      | Legal form |
|address         | Postal adresse |
|wilaya          | Wilayas name |
|tel             | Phone number |
|fax             | Fax number |
|email           | Mail address |
|lat             | Latitude coordinate |
|lon             | Longitude coordinate |
|code_wil        | Wilaya offcial number |

## Processing steps

1. Data conversion from PDF to csv format with the OCR software
1. Geocoding
1. Check that location are within their corresponding Wilayas limits with the [check_poi_in_wilayas_with_names.ipynb](../../scripts/check_poi_in_wilayas_with_names.ipynb) Python Notebook
1. Check that locations are near OSM Buildings with the [check_poi_near_osm_building.ipynb](../../scripts/check_poi_near_osm_building.ipynb) Python Notebook 
1. Data validation and errors correction manually using QGIS

## Comments

- Branches are related to 48 wilayas not to the new 58 Wialya (Provinces) of Algeria.
- Some accountants locations has been approximated.

## Terms and conditions

Datasets are provided to you under a Creative Commons Attribution 4.0 International License (CC BY 4.0) which can be accessed [here](https://creativecommons.org/licenses/by/4.0/).

TRANSFORMATEK DISCLAIMS ALL WARRANTIES OF ANY KIND RELATED TO THE PROVISION OF THE DATASETS.
