## Investigation test

Suppose you don't know any language, but you need to solve some problem.
Read the task and write all your action step by step. 
Write just your discourse (even how you are googling it), NO CODE. <br>

### You have just:
```
function parseAndSaveFile(jsonData: unknown) {
    ...
    return csvFile;
}
```

### Task:
- Your function gets a list of data with properties (`id, name, age, cityId`) with some random data.
- Need to create a database with tables: `Person` (`id, name, age, cityId` -> all columns are not nullable) and `City` (`id, name` -> all columns are not nullable).
- Need to read file and make sure that all data are included and valid (E.g.: `age` is number type, so all data should be number)
- Need to save all data to the database
- Need to generate a CSV file with columns (`personId, personName, personAge, cityId, cityName`) and save all data here
- Need to return a generated csv file

#### E.g.:
1) As I don't know the output of `jsonData` I will log it, so I can read them, based on this I will do bla, bla, bla......

