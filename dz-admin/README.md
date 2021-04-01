# Dataset of Administrative departments of Algeria 
List of names and codes for Algerian Wilayas and Communes 

## Source 

This dataset was produced from : 

* Official Gazette of the Algerian Democratic and Popular Republic ([références files](./ref)) 
* A javascript code availabale at the following URL (https://www.saa.dz/)[https://www.saa.dz/]
* Geometries from OpenStreetMap 

## Date 

The dataset was created : 31/03/2021 

## Data format 

### Format for wilayas 

| Key     | Description | 
| ------- | -----------------------|
| num     | Sequential number |
| code    | Wilaya code |
| nom     | Wilaya name in lower case  |
| nom_maj | Wilaya name in upper case  |
| nom_ar  | Wilaya name in arabic  |

### Format for Communes 

| Key          | Description | 
| ------------ | -----------------------|
| num          | Sequential number |
| cod_wil      | Wilaya code |
| code         | Commune code |
| code_5       | Commune code with 05 significant numbers |
| code_48      | Commune code in 48 wilayas subdivision  1984 |
| code_58      | Commune code in 58 wilayas subdivision  2019-2021 |
| nom          | Commune name in lower case  |
| nom_maj      | Commune name in upper case  |
| nom_ar       | Commune name in arabic  |

## Processing steps

1. The corresponding processsing Python Scripts are available [here](../scripts) in Jupyter Python Notebook formats
1. Data validation and errors correction manually using QGIS

## Comments

* Some Communes names are missed in arabic

## Terms and conditions

Datasets are provided to you under a Creative Commons Attribution 4.0 International License (CC BY 4.0) which can be accessed [here](https://creativecommons.org/licenses/by/4.0/).

TRANSFORMATEK DISCLAIMS ALL WARRANTIES OF ANY KIND RELATED TO THE PROVISION OF THE DATASETS.