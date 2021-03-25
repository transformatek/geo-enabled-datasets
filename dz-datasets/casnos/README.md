# CASNOS branches dataset
The datasets consists of branches of the CASNOS(caisse nationale de sécurité sociale des non-salariés)



## Source
[CASNOS](http://casnos.com.dz/).
(http://casnos.com.dz/nos-agences/)
 
 
## Data format

| Key          | Description | 
| ------------ | -----------------------|
|id| Identificaton number |
|name| Name | 
|adresse | Address|
|tel| Phone number|
|fax| Fax number|
|email| Email Address|
|lat| Latitude coordiante|
|lon| Longitude Coordinate|
|code|Wilaya code |

## Dataset creation steps

1. Getting data from  [CASNOS site](http://casnos.com.dz/nos-agences/) using the [script](https://github.com/transformatek/geo-enabled-datasets/blob/main/dz-datasets/casnos/scrap.ipynb) .
2. Data validation and correction using QGIS


Dataset created on Mar 15 , 2021
