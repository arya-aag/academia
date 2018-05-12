# Database Design

## Table of Contents

* [Relational Database Design](#relational-database-design)

### References

### Types of Database

* Relational database
* Data warehouse (good at read, not for insert/update)

### Relational Database Design

* Table = data about a particular object
* Avoid duplication of data
* Name consistency: similar columns in different tables must have the same name
* Store all dates in the database in same format (e.g. DD-MM-YYYY)
* Do not store calculable/derived values

#### Data Model Types

| Type                  | Definition                                                          |
| --------------------- | ------------------------------------------------------------------- |
| Conceptual data model | shows high-level relationships between objects                      |
| Logical data model    | shows properties of objects as well as relationship between objects |
| Physical data model   | also shows types and keys                                           |

#### Steps

1. Determine goal of database
   * Find answer to: what problem does the database solve?
   * *Scope* is what is stored in db and what is not 
2. Identify Entities
   * Look fo nouns in the goal statement
   * Singular form of word, not plural
   * 