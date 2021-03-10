#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import requests 
import json 
import time 
import pandas as pd
from bs4 import BeautifulSoup



# In[ ]:


page = requests.get("https://www.cnac.dz/site_cnac_new/Web%20Pages/Fr/FR_ReseauNational.aspx")
soup = BeautifulSoup(page.content, 'html.parser')

agences_wilaya = soup.find(id="AgWil")

wilyas = agences_wilaya.find_all("li",class_='')
items = list(wilyas)
agences = []
for item in items:
  agence= item.find("a").get_text()
  wilaya = agence.split(" ",1)[1]
  type_agence = agence.split(" ",1)[0]
  adresse = item.select("p:nth-of-type(2)")[0].get_text().split(":",1)[1].lstrip() 
  
  agences.append({"agence" : agence,"adresse" : adresse,"wilaya" :wilaya , "type":type_agence})

  antennes = item.find_all(class_="panel")
  for antenne in antennes:
      agence = antenne.find("a").get_text()
      type_agence = agence.split(" ",1)[0]
      adresse = antenne.select("p:nth-of-type(2)")[0].get_text().split(":",1)[1].lstrip()
  
      agences.append({"agence" :agence  ,"adresse" : adresse, "wilaya" : wilaya , "type":type_agence})    


print(agences)


# In[ ]:


df = pd.DataFrame.from_dict(agences)
df.head()


# In[15]:




