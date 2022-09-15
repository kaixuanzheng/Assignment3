/*

Question 1

Given the following array and implement the table dynamically

*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
const app = document.getElementById("root");
const tableDiv = document.createElement("div");
tableDiv.className = "tableDiv margin-bottom";
app.appendChild(tableDiv);

const table = document.createElement("table");
tableDiv.appendChild(table);

const tHead = table.createTHead();
const thr = tHead.insertRow(0);
const thContent = tableInfo.tableHeader.map((head) => {
  const th = document.createElement("th");
  th.textContent = head;
  return th;
});
thr.append(...thContent);

const tBody = table.createTBody();
const tbr = tableInfo.tableContent.map((obj) => {
  const tr = document.createElement("tr");
  const td = tableInfo.tableHeader.map((head) => {
    const tdContent = document.createElement("td");
    tdContent.textContent = obj[head];
    return tdContent;
  });
  tr.append(...td);
  return tr;
});
tBody.append(...tbr);

/*
  
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const listDiv = document.createElement("div");
listDiv.className = "listDiv margin-bottom";
app.appendChild(listDiv);

const ol = document.createElement("ol");
const oli = list.map((tech) => {
  const li = document.createElement("li");
  li.textContent = tech;
  return li;
});
ol.append(...oli);
listDiv.appendChild(ol);

const ul = document.createElement("ul");
const uli = list.map((tech) => {
  const li = document.createElement("li");
  li.textContent = tech;
  return li;
});
ul.append(...uli);
listDiv.appendChild(ul);

/*
  
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const dropDownDiv = document.createElement("div");
dropDownDiv.className = "dropDownDiv margin-bottom";
app.appendChild(dropDownDiv);

const select = document.createElement("select");
const options = dropDownList.map((obj) => {
  const option = document.createElement("option");
  option.value = obj.value;
  option.textContent = obj.content;
  return option;
});
select.append(...options);
dropDownDiv.appendChild(select);
