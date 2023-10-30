# Bootstrap-Table-Pagination-By-Pure-Javascript
A small library created to easily turn a Json Array into a table with Bootstrap Table.

You have an object array of Json type and you want to list it quickly. This library will be very useful to you.

First of all, Bootstrap CSS and JS libraries must be added.
```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
```
Then download the bootstrapTable.js library and add it as a reference.
```html
  <script src="bootstrapTable.js"></script>
```
Now you can use the function with one setting object and one json data.
```html
<script>
//Example Json Object Array
let myTableList = [
    { Ad: "Cevdet", Soyad: "Dogruyol", Tc: "12345678902", Plaka: "34FB1907" },
    { Ad: "Mehmet", Soyad: "Klavyeci", Tc: "92345678904", Plaka: "58SVS1907" },
    { Ad: "Mahmut", Soyad: "Zemzemci", Tc: "72345678906", Plaka: "37ALP1071" },
    { Ad: "Cevdet", Soyad: "Dogruyol", Tc: "12345678902", Plaka: "34FB1907" },
    { Ad: "Berkay", Soyad: "Beyazlar", Tc: "52345678908", Plaka: "34FTH1453" }
];

//Example Table Setting Object
let bootstrapTableObject={
    tableList: myTableList, //dataArray
    divId: firstTable, //divId
    pagination:{
        enable:true, //with or without pagination 
        rowCount:5, //Rows per page
        maxPageAppers:7 //Max pages button
    }
}

//Using of Table
bootstrapTable(bootstrapTableObject,1);
</script>
```
Note:You do not need to enter additional information for the table titles, the table titles are taken from the names in the Json Objects.
