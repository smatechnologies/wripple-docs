# Read CSV File

Use this action to upload and read data from a CSV file.

## Input Fields
- **CSV File**: The CSV file you would like to read. *(Only `.csv` files are accepted)*.
- **My file has headers**: Set to `true` if the first row of the CSV file contains headers, and `false` if not.

## Output Fields
This action outputs following fields:
- **Rows**: A structured representation of the CSV data. This output is meant to be used in a `For Each Loop` step, where you will be able to reference each row individually. See the samples below for more details on how to use this data.

### Samples

Let's say you upload a CSV file with this content, where the first row contains headers:

```CSV
Id,Name,Age,Email
1,John Doe,29,john.doe@example.com
2,Jane Smith,34,jane.smith@example.com
3,Michael Johnson,41,michael.johnson@example.com
```

The output will be structured like this:

```JSON
Rows:[
  {
    Id: "1",
    Name: "John Doe",
    Age: "29",
    Email: "John.doe@example.com"
  },
  {
    Id: "2",
    Name: "Jane Smith",
    Age: "34",
    Email: "jane.smith@example.com"
  },
  {
    Id: "3",
    Name: "Michael Johnson",
    Age: "41",
    Email: "michael.johnson@example.com"
  }
]
```

If you uploaded the same data without headers, the output would be structured like this:

```JSON
Rows:[
  {
    Column1: "1",
    Column2: "John Doe",
    Column3: "29",
    Column4: "John.doe@example.com"
  },
  {
    Column1: "2",
    Column2: "Jane Smith",
    Column3: "34",
    Column4: "jane.smith@example.com"
  },
  {
    Column1: "3",
    Column2: "Michael Johnson",
    Column3: "41",
    Column4: "michael.johnson@example.com"
  }
]
```

In either case, you will be able to use data on individual rows by following these steps: 

  1. Add a `For Each Loop` step to the workflow, and select the `Rows` output from this step as the input list.

  2. Inside the loop step, reference an individual field by using the keyword `item` followed by a period (`.`) and then the name of column header, all inside double curly brackets, like this: `{{item.YOUR_COLUMN_HEADER}}`

Using the sample data above, you would be able to use `{{item.Name}}` in a step (or `{{item.Column1}}` if your data does not have headers), and when the workflow executes, that value would be replaced by `John Doe` on the first iteration, then `Jane Smith` on the second, and finally `Michael Johnson` on the third.
