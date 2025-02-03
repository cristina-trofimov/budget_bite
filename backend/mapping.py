import pprint
import re
from itertools import dropwhile
with open ("./flyers/igaparser/output.txt","r", encoding ="utf-8") as file: 
    lines_IGA = file.readlines()

with open ("./flyers/maxiparser/output.txt","r", encoding ="utf-8") as file: 
    lines_maxi = file.readlines()

with open ("./flyers/metroparser/output.txt","r", encoding ="utf-8") as file: 
    lines_metro = file.readlines()

with open ("./flyers/supercparser/output.txt","r", encoding ="utf-8") as file: 
    lines_superC = file.readlines()


IGA_dict={}
for line in lines_IGA:
    key= line.split(",")[0]
    value= line.split('$', 1)[-1] 
    value=float(value.strip())
    IGA_dict[key.strip()]=value

MAXI_dict={}
for line in lines_maxi:
    key = line.split("-")[0]
    value = line.split('$', 1)[-1]
    #value = value.replace('$', '').replace(',', '')  # Remove both $ and ,
    try:
        value = float(value.strip())
        MAXI_dict[key.strip()] = value
    except ValueError:
        continue
count=-1

metro_dict={}
result={}
for line in lines_metro:
    key,value=line.split('.',1)
    key=key.rstrip('.')
    value="".join(value.split())
    value=value[:-1]
    try:
        value = float(value.strip())
        metro_dict[key.strip()] = value
    except ValueError:
        continue
    

superC_dict={}
for line in lines_superC:
    try:
        key,value=line.split('.',1)
    except:
        continue
    key=key.rstrip('.')
    value="".join(value.split())
    value=value[:-1]
    
    try:
        
        value = float(value.strip())
        superC_dict[key.strip()] = value
        # if (float(key.strip().strip())):
        #     del superC_dict[key]
        
    except ValueError:
        continue

pprint.pprint(superC_dict)  

