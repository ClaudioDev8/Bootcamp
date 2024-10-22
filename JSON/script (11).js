let title = document.getElementById("title");

let JSONString = `{
    "people":[
      {"firstName":"David", "lastName":"Smith", "age": 27, "married": true},
      {"firstName":"Amy", "lastName":"Blake", "age": 43, "married": true},
      {"firstName":"Mark", "lastName":"Foster", "age": 56, "married": false}
    ]
    }`;

console.log(JSONString);

// * PARSE - Taking a JSON String and converting it to a workable JavaScript format

let JSONObject = JSON.parse(JSONString);
console.log(JSONObject);
console.log(JSONObject.people[2].firstName);

let markDetails = JSONObject.people[2];
console.log(markDetails.lastName);

// * STRINGIFY - Takes JavaScript and converts it to a JSON String

let newJSONString = JSON.stringify(JSONObject);
console.log(newJSONString);

let davidSmith = JSONObject.people[0];

title.textContent = `${davidSmith.firstName} ${davidSmith.lastName}`;
