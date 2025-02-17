import toml
import os
from collections import defaultdict

print(os.getcwd())

# Load both TOML files
with open("assets/data/tokipona/translations/en/dictionary.toml", "r", encoding="utf-8") as f:
    en_dict = toml.load(f)

with open("assets/data/tokipona/translations/nl/dictionary.toml", "r", encoding="utf-8") as f:
    nl_dict = toml.load(f)

# Merge the dictionaries into the desired structure
merged_dict = defaultdict(lambda: {"lemma": "", "definitions": {}})

# Add English words and definitions
for word, meaning in en_dict.items():
    merged_dict[word]["lemma"] = word
    merged_dict[word]["definitions"]["en"] = meaning

# Add Dutch words and definitions
for word, meaning in nl_dict.items():
    merged_dict[word]["lemma"] = word
    merged_dict[word]["definitions"]["nl"] = meaning

# Convert to TOML structure
output_data = {"words": []}
for word_data in merged_dict.values():
    output_data["words"].append(word_data)

# Save to new TOML file
with open("merged_dictionary.toml", "w", encoding="utf-8") as f:
    toml.dump(output_data, f)

print("Merged TOML file saved as merged_dictionary.toml")
