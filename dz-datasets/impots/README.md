# Dataset for tax structures in Algeria
This dataset is a collection of taxes structures on Algeria with their different types

## Source

This dataset is prduced using datas collected from the folowing sources : 

* https://download.geofabrik.de/africa/algeria.html

* https://www.algerietelecom.dz/fr/annuaire


## Date 

The dataset was created : 11/04/2021

## Data format

| Key            | Description | 
| ------------   | -----------------------|
|num             | Sequentiel number |
|address         | Postal adresse |
|lat             | Latitude coordinate |
|lon             | Longitude coordinate |
|tel             | Phone number |
|name            | The Nme of the structure |
|wilaya          | Wilayas name |
|code            | Wilaya offcial number |


## Processing steps

## QGIS request to select features with names containing a specific words

1. Data collection from online sources 
1. For OSM data we used the following request (regexp_match( lower("name"), 'imp(o|ô)t')  OR regexp_match( "name", 'ضرائب') OR regexp_match( "name", 'ظرائب'))
1. Geocoding
1. Check that location are within their corresponding Wilayas limits
1. Check that locations are near OSM Buildings 
1. Data validation and errors correction manually using QGIS

## Comments

- Branches are related to 48 wilayas not to the new 58 Wialya (Provinces) of Algeria.
- Some locations has been approximated due to lack of exact address.

## Terms and conditions

Datasets are provided to you under a Creative Commons Attribution 4.0 International License (CC BY 4.0) which can be accessed [here](https://creativecommons.org/licenses/by/4.0/).

TRANSFORMATEK DISCLAIMS ALL WARRANTIES OF ANY KIND RELATED TO THE PROVISION OF THE DATASETS.
