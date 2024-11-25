let companies = ["Bloomberg", "Microsoft","Uber", " Google", "IBM", "Netflix"];

companies.shift(companies);


companies.splice(1,1,"OLA");

companies.push("Amazon");

console.log(companies);
