# CNRC branches dataset
The datasets consists of branches of the National Centre of Trade Register (CNRC Centre nationale des regisitres de commerce)


## Source
[CNRC](https://sidjilcom.cnrc.dz/web/cnrc/accueil).
(https://sidjilcom.cnrc.dz/html/themes/cnrc/doc/LISTE-ANTENNES-LOCALES_FR.pdf)
 

## Data format

| Key          | Description | 
| ------------ | -----------------------|
| id| Identification number |
| code| Wilaya code |
| wilaya |Wilaya name                |
| city       |City name |
| address |Address of the branch |
| tel | Telephone number(s)                 |
| fax | Fax number(s) |
| long | Longitude                 |
| lat |Latitude            |

## Dataset creation steps

1. Getting data from  [CNRC site](https://sidjilcom.cnrc.dz/web/cnrc/accueil) (https://sidjilcom.cnrc.dz/html/themes/cnrc/doc/LISTE-ANTENNES-LOCALES_FR.pdf).
2. Geocoding with Awesome Geocoding add-on in google sheets.
3. Data validation and correction using QGIS

