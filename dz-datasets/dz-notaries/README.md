# Notaries dataset
Dataset for official notaries in Algeria


## Source
[Page maghreb](https://www.lespagesmaghreb.com).
(https://www.lespagesmaghreb.com/annuaire/algerie/notaires/1641f19)
 

## Data format

| Key          | Description | 
| ------------ | -----------------------|
| code| Wilaya code of where the notary works |
| nom |Name of the notary               |
| adresse |Address of the notary |
| long | Longitude                 | 
| lat |Latitude            |

## Dataset creation steps

1. Getting data from  [Page Maghreb ](https://www.lespagesmaghreb.com/annuaire/algerie/notaires/1641f19) using the [script]() .
2. Geocoding with Awesome Geocoding add-on in google sheets.
3. Data validation and correction using QGIS
