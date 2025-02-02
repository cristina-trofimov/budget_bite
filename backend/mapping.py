import json
import pprint


with open("../flyers/igaparser/output.txt", "r", encoding="utf-8") as file:
    lines_IGA = file.readlines()

with open("../flyers/maxiparser/output.txt", "r", encoding="utf-8") as file:
    lines_maxi = file.readlines()

with open("../flyers/metroparser/output.txt", "r", encoding="utf-8") as file:
    lines_metro = file.readlines()

with open("../flyers/supercparser/output.txt", "r", encoding="utf-8") as file:
    lines_superC = file.readlines()

# Process IGA_dict
IGA_dict = {}
for line in lines_IGA:
    key = line.split(",")[0]
    value = line.split('$', 1)[-1]
    value = float(value.strip())
    IGA_dict[key.strip()] = value

# Process MAXI_dict
MAXI_dict = {}
for line in lines_maxi:
    key = line.split("-")[0]
    value = line.split('$', 1)[-1]
    try:
        value = float(value.strip())
        MAXI_dict[key.strip()] = value
    except ValueError:
        continue

# Process metro_dict
metro_dict = {}
for line in lines_metro:
    key, value = line.split('.', 1)
    key = key.rstrip('.')
    value = "".join(value.split())
    value = value[:-1]
    try:
        value = float(value.strip())
        metro_dict[key.strip()] = value
    except ValueError:
        continue

# Process superC_dict
superC_dict = {}
for line in lines_superC:
    try:
        key, value = line.split('.', 1)
    except:
        continue
    key = key.rstrip('.')
    value = "".join(value.split())
    value = value[:-1]
    try:
        value = float(value.strip())
        superC_dict[key.strip()] = value
    except ValueError:
        continue

# Save each dictionary to a separate JSON file

# IGA dictionary
with open("IGA_data.json", "w", encoding="utf-8") as json_file:
    json.dump(IGA_dict, json_file, indent=4)

# MAXI dictionary
with open("MAXI_data.json", "w", encoding="utf-8") as json_file:
    json.dump(MAXI_dict, json_file, indent=4)

# Metro dictionary
with open("Metro_data.json", "w", encoding="utf-8") as json_file:
    json.dump(metro_dict, json_file, indent=4)

# SuperC dictionary
with open("SuperC_data.json", "w", encoding="utf-8") as json_file:
    json.dump(superC_dict, json_file, indent=4)

# Optionally, print the result for verification
pprint.pprint(IGA_dict)
pprint.pprint(MAXI_dict)
pprint.pprint(metro_dict)
pprint.pprint(superC_dict)
