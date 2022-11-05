# CSV TO JSON

A simple CLI tool to generate CHIP-0007 json type files from CSV.

## Usage

To use, change the filename to the file you want to convert to json and run node index.js

````

Here is the json file with the default values:

```jsonc
{
  "format": "CHIP-0007",
  "name": "Pikachu",
  "description": "Electric-type Pokémon with stretchy cheeks",
  "minting_tool": "SuperMinter/2.5.2",
  "sensitive_content": false,
  "series_number": 0,
  "series_total": 0,
  "attributes": [],
  "collection": {
    "name": "Example Pokémon Collection",
    "id": "e43fcfe6-1d5c-4d6e-82da-5de3aa8b3b57",
    "attributes": [
      {
        "type": "description",
        "value": "Example Pokémon Collection is the best Pokémon collection. Get yours today!"
      },
      {
        "type": "icon",
        "value": "https://examplepokemoncollection.com/image/icon.png"
      },
      {
        "type": "banner",
        "value": "https://examplepokemoncollection.com/image/banner.png"
      },
      {
        "type": "twitter",
        "value": "ExamplePokemonCollection"
      },
      {
        "type": "website",
        "value": "https://examplepokemoncollection.com/"
      }
    ]
  },
  "data": {}
}
````

Note `NFT Naming csv - Team Grit.csv` is the source file and `NFT Naming csv - Team Grit.output.csv` is the output directory.

Also output.json is the final json format
