import re

# Read the input file
with open('input.txt', 'r') as file:
    content = file.read()

# Define the regex pattern to match the desired lines
pattern = r'alt="([^"]+)"'

# Find all matches
matches = re.findall(pattern, content, re.DOTALL)

# Remove all lines smaller than 3 words
for match in matches:
    if len (match.split())<=2:
        matches.remove(match)
        
with open('output.txt', 'w') as output_file:
    for match in matches:
        first_part = re.search(r'^([^.]*)\.', match)
        last_part = re.search(r'\.?\s*([\d,]+\.\d+)', match)
        
        if first_part and last_part:
            combined = f"{first_part.group(1)} {last_part.group(1)}"
            output_file.write(combined + '\n')
        

print("Extraction complete. Check 'output.txt' for the results.")
