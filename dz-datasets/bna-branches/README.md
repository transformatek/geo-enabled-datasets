# BNA branches dataset
The datasets consists of branches of the National Bank of Algeria (BNA)


## Source
[BNA](https://www.bna.dz/fr/).

 

## Data format

| Key          | Description | 
| ------------ | -----------------------|
| nom       |Branch name |
| email     |Branch email                 |
| adresse |Address of the branch |
| code_wilay| Wilaya code of where the branch is located |
| wilaya |Wilaya name                |
| tel | Telephone number(s)                 |
| fax | Fax number(s) |
| long | Longitude                 |
| lat |Latitude            |

## Dataset creation steps

1. Getting data from  [BNA site](https://www.bna.dz/fr/) using this (script)(https://github.com/transformatek/geo-enabled-datasets/blob/main/dz-datasets/bna-branches/script.ipynb) .
2. Geocoding with Awesome Geocoding add-on in google sheets.
3. Data validation and correction using QGIS
