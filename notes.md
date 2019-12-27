# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## Solution 

Tables: Animals, Species, Zoos

Animals <==> Species : one -to-many
Animals (many) <==> Species (one)

Zoos (many) <==> Animals (many)

## Table details

zoos:
- id
- zoo_name
- address

species:
- id
- species_name

animals:
- id
- name
- species_id


zoo_animals
- zoo_id
- animal