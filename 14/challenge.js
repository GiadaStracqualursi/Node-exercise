const surprisingFact = "The bumblebee bat is the world's smallest mammal";


console.log("Surprising Fact:", surprisingFact);
console.table({"Table Surpricing": surprisingFact})






const familyTree = [
  {
    name: "Person 1",
    children: [
      {
        name: "Person 2",
        children: [
          {
            name: "Person 3",
            children: [
              {
                name: "Person 4",
              },
            ],
          },
        ],
      },
    ],
  },
];

console.log(JSON.stringify(familyTree, null, 1));
console.dir(familyTree, { depth: null });






function importantTask() {
    console.count('count');
}

importantTask();
importantTask();
importantTask();
importantTask();

console.countReset('count')

importantTask();
importantTask();
