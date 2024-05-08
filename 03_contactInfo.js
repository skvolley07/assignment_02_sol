//creating a Map for storing contact information
const contactInfo = new Map();

//adding key-value pair in map
contactInfo.set("Saurabh Kadtan", {age:20, email:"saurabhsk9308@gmail.com", location:"Maharashtra"});
//creating function for getting contact information by name
const getContactDetalis = name => contactInfo.get(name);

console.log(getContactDetalis("Saurabh Kadtan"))
