// const employees = [
//     {
//       name: "Alice Johnson",
//       position: "Software Engineer",
//       salary: 95000,
//       department: "Engineering",
//       performanceRating: 4.7,
//     },
//     {
//       name: "Bob Smith",
//       position: "Product Manager",
//       salary: 110000,
//       department: "Product Management",
//       performanceRating: 4.9,
//     },
//     {
//       name: "Charlie Brown",
//       position: "Data Analyst",
//       salary: 80000,
//       department: "Data Science",
//       performanceRating: 4.5,
//     },
//     {
//       name: "David Miller",
//       position: "HR Specialist",
//       salary: 75000,
//       department: "Human Resources",
//       performanceRating: 4.2,
//     },
//     {
//       name: "Emily Davis",
//       position: "Marketing Coordinator",
//       salary: 85000,
//       department: "Marketing",
//       performanceRating: 4.8,
//     },
//     {
//       name: "Frank Wilson",
//       position: "QA Tester",
//       salary: 90000,
//       department: "Engineering",
//       performanceRating: 4.6,
//     },
//     {
//       name: "Grace Turner",
//       position: "Financial Analyst",
//       salary: 95000,
//       department: "Finance",
//       performanceRating: 4.7,
//     },
//     {
//       name: "Harry White",
//       position: "UI/UX Designer",
//       salary: 100000,
//       department: "Design",
//       performanceRating: 4.9,
//     },
//     {
//       name: "Ivy Martin",
//       position: "Sales Representative",
//       salary: 85000,
//       department: "Sales",
//       performanceRating: 4.5,
//     },
//     {
//       name: "Jackie Adams",
//       position: "Customer Support Specialist",
//       salary: 80000,
//       department: "Customer Support",
//       performanceRating: 4.4,
//     },
//     {
//       name: "Kevin Lewis",
//       position: "Systems Administrator",
//       salary: 95000,
//       department: "IT",
//       performanceRating: 4.8,
//     },
//     {
//       name: "Linda Carter",
//       position: "Operations Manager",
//       salary: 110000,
//       department: "Operations",
//       performanceRating: 4.9,
//     },
//     {
//       name: "Michael Turner",
//       position: "Software Engineer",
//       salary: 92000,
//       department: "Engineering",
//       performanceRating: 4.7,
//     },
//     {
//       name: "Nancy Hill",
//       position: "Marketing Manager",
//       salary: 105000,
//       department: "Marketing",
//       performanceRating: 4.8,
//     },
//     {
//       name: "Oscar Robinson",
//       position: "Financial Manager",
//       salary: 115000,
//       department: "Finance",
//       performanceRating: 4.9,
//     },
//     {
//       name: "Pamela Foster",
//       position: "HR Manager",
//       salary: 100000,
//       department: "Human Resources",
//       performanceRating: 4.8,
//     },
//     {
//       name: "Quincy Bennett",
//       position: "Data Scientist",
//       salary: 98000,
//       department: "Data Science",
//       performanceRating: 4.6,
//     },
//     {
//       name: "Rachel Adams",
//       position: "Software Developer",
//       salary: 90000,
//       department: "Engineering",
//       performanceRating: 4.7,
//     },
//     {
//       name: "Samuel James",
//       position: "Customer Success Manager",
//       salary: 105000,
//       department: "Customer Support",
//       performanceRating: 4.8,
//     },
//     {
//       name: "Tracy Howard",
//       position: "Sales Manager",
//       salary: 110000,
//       department: "Sales",
//       performanceRating: 4.9,
//     },
//   ];
// const highPaidEmployees=(arr, dep, min)=>{
//     const filArr=arr.filter((a)=>{
//         return a.department==dep && a.salary>min
//     })
//     return filArr;
// }
// const topPerformersReport=(arr, min)=>{
//     const topArr=arr.filter((a)=>{
//         return a.performanceRating>min;
//     })
//     return topArr;
// }

//   // Task 1 High paid employee by department
// const highPaidEmployeesByDepartment = highPaidEmployees(
//     employees,
//     "Finance",
//     90000
//   );

//   console.log(highPaidEmployeesByDepartment);

//   // Task 2 Find top performers employee
//   const topPerformers = topPerformersReport(employees, 4.8);
//   console.log(topPerformers);
const shoppingCartItems = [
  { name: "Laptop", price: 1200, quantity: 1, category: "Electronics" },
  { name: "Backpack", price: 80, quantity: 2, category: "Fashion" },
  { name: "Smartphone", price: 800, quantity: 1, category: "Electronics" },
  { name: "Shoes", price: 50, quantity: 1, category: "Fashion" },
  { name: "Book", price: 15, quantity: 3, category: "Books" },
  { name: "Headphones", price: 100, quantity: 1, category: "Electronics" },
  { name: "T-shirt", price: 20, quantity: 5, category: "Fashion" },
  { name: "Tablet", price: 300, quantity: 2, category: "Electronics" },
  { name: "Jeans", price: 60, quantity: 2, category: "Fashion" },
  { name: "Notebook", price: 10, quantity: 4, category: "Books" },
  { name: "Camera", price: 500, quantity: 1, category: "Electronics" },
  { name: "Dress", price: 70, quantity: 1, category: "Fashion" },
  { name: "External Hard Drive",price: 80,quantity: 1,category: "Electronics"},
  { name: "Sweater", price: 40, quantity: 3, category: "Fashion" },
  { name: "Fitness Tracker", price: 60, quantity: 1, category: "Electronics" },
  { name: "Sunglasses", price: 25, quantity: 2, category: "Fashion" },
  { name: "Cookbook", price: 18, quantity: 2, category: "Books" },
  { name: "Gaming Console", price: 300, quantity: 1, category: "Electronics" },
  { name: "Running Shoes", price: 55, quantity: 1, category: "Fashion" },
  { name: "Desk Chair", price: 120, quantity: 1, category: "Furniture" },
];
// task write a function calculateCategoryCosts return a object of {category: category, totalcost:???}
const calcCategoryCost=(arr)=>{
    let test=arr.map((a)=> {
        return {name:a.name, category: a.category,
        cost : a.price*a.quantity}})
    return test;
}
// let result= calcCategoryCost(shoppingCartItems);
// console.log(result);
const filterCategory=(arr)=>{
    let test=Object.groupBy(arr,({category})=> category);
    return test;
}
console.log(filterCategory(shoppingCartItems));