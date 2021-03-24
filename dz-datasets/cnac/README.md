# CNAC branches dataset
The datasets consists of branches of the national unemployment insurance fund agencies (CNAC caisse nationale d'assurance chômage)

## Source
[CNAC](https://www.cnac.dz).
(https://www.cnac.dz/site_cnac_new/Web%20Pages/Fr/FR_ReseauNational.aspx)
 

## Data format

| Key          | Description | 
| ------------ | -----------------------|
| id| Identification number |
| name | Branch name |
| code| Wilaya code |
| wilaya |Wilaya name                |
| address |Address of the agency |
| type | Type of the branch ['agence','antenne'] |
| lon | Longitude                 | 
| lat |Latitude            |

## Dataset creation steps

1. Getting data from  [CNAC site](https://www.cnac.dz/site_cnac_new/Web%20Pages/Fr/FR_ReseauNational.aspx) using the [script](https://github.com/transformatek/geo-enabled-datasets/blob/main/dz-datasets/cnac/scrap.ipynb) .
2. Geocoding with Awesome Geocoding add-on in google sheets.
3. Data validation and correction using QGIS

Dataset created on Mar 10, 2021
