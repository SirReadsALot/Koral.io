# Creatures
The creature .json file, .png and folder must all have the same name and use [Pascal Case](http://wiki.c2.com/?PascalCase).

[Explanation of stats](https://docs.google.com/presentation/d/1dNWm32cp1PZWr4YXariY4wt_zbtRuXtokmlozrVANvQ/edit#slide=id.g46f7063748_12_8)

(// is comment, won't work in the actual .json file)
```javascript
{
    "name": "", // Name of the creature
    "tier": 1, // 1-10
    "speed": 0, // 0.0-2.0 (0-200%)
    "health": 1, // 1+
    "damage": 0, // 0-180
    "armor": 0, // 0.0-1.0 (0-100%)
    "armorPenetration": 0, // 0.0-1.0 (0-100%)
    "boosts": 0, // -1 for infinite, -1+
    "oxygen": 0, // In seconds
    "pressure": 0, // In seconds
    "temperature": 0, // In seconds
    "stress": 0, // In seconds
    "poisonImmunity": 0, // 0.0-1.0 (0-100%)
    "bleedResistance": 0, // 0.0-1.0 (0-100%)
    "vision": "Comun", // Any one of: "Comun", "Olfactory", "Thermoception", "Electroreception", "Echolocation"
    "incognito": false, // true or false
    "weight": 0.5, // In kg
    "texture": "./creatures/CreatureName/CreatureName.png", // Must start with "./creatures/"
    "evolutions": [
        "NextCreatureName"
    ], // Names of the creatures this one can evolve to
    "scale": {
        "width": 0.1,
        "height": 0.1
    } // png width * scale width = rendered width, png height * scale height = rendered height
}
```
