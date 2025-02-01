import re

# Read the input file
with open('input.txt', 'r') as file:
    content = file.read()

# Define the regex pattern to match the desired lines
pattern = r'alt="([^"]+)"'

# Find all matches
matches = re.findall(pattern, content, re.DOTALL)


# Write the matches to a new file
with open('output.txt', 'w') as output_file:
    for match in matches:
        output_file.write(match + '\n')

print("Extraction complete. Check 'output.txt' for the results.")