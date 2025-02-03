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

# Keep only the part after the last comma
matches = [re.sub(r'.*,(.+)$', r'\1', match) for match in matches]

# Remove everything before the first period, including it
matches = [re.sub(r'^.*?\.', '', match) for match in matches]

# Write the matches to a new file
with open('output.txt', 'w', encoding='UTF-8') as output_file:
    for match in matches:
        output_file.write(match + '\n')

print("Extraction complete. Check 'output.txt' for the results.")
