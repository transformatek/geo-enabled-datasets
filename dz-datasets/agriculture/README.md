# Dataset for Algerian Ministry of Agriculture entities and sales points 
This dataset includes entities of the Algerian Ministry of Agriculture and the sales points affilated to. 

## Source

This dataset was produced from the folowing websites :

* [http://madrp.gov.dz/contact/localisation-structures/](http://madrp.gov.dz/contact/localisation-structures/)
* [https://www.elfirma.dz/](https://www.elfirma.dz/)


## Date 

The dataset was created : 20/04/2021

## Data format

### Ministry entities  

| Key            | Description | 
| ------------   | -----------------------|
|num             | Sequentiel number |
|name            | The name of the entity  |
|address         | Postal adresse |
|tel             | Phone number |
|fax             | Fax number |
|website         | web site address |
|lat             | Latitude coordinate |
|lon             | Longitude coordinate |
|acronym         | Acronym of the entity |
|code_wil        | Wilaya offcial number |

### Sales Points 


| Key            | Description | 
| ------------   | -----------------------|
|num             | Sequentiel number |
|name            | The name of the incubator or the coworking space  |
|address         | Postal adresse |
|tel             | Phone number |
|category        | Mail address |
|organization    | Affilated organization or company |
|lat             | Latitude coordinate |
|lon             | Longitude coordinate |
|commune         | Commune name |
|wilaya          | Wilayas name |
|type_name       | Type of products literal |
|type_id         | Type of products ID |
|code_wil        | Wilaya offcial number |


## Processing steps

1. Data collection from online ressources
1. Conversion to CSV
1. Data validation and errors correction manually using QGIS

## Comments

- Locations are related to 48 wilayas not to the new 58 Wialya (Provinces) of Algeria.

## Terms and conditions

Datasets are provided to you under a Creative Commons Attribution 4.0 International License (CC BY 4.0) which can be accessed [here](https://creativecommons.org/licenses/by/4.0/).

TRANSFORMATEK DISCLAIMS ALL WARRANTIES OF ANY KIND RELATED TO THE PROVISION OF THE DATASETS.
