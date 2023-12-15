const bookData = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      rating: 4.5,
      price: 15.99,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      rating: 4.8,
      price: 19.99,
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      rating: 4.7,
      price: 24.99,
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      rating: 4.6,
      price: 12.99,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      rating: 4.9,
      price: 18.99,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      rating: 4.3,
      price: 14.99,
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      genre: "Mystery",
      rating: 4.2,
      price: 16.99,
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fantasy",
      rating: 4.8,
      price: 20.99,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      rating: 4.7,
      price: 17.99,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      rating: 4.9,
      price: 22.99,
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      rating: 4.9,
      price: 29.99,
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      rating: 4.4,
      price: 21.99,
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Dystopian",
      rating: 4.5,
      price: 14.99,
    },
    {
      title: "The Shining",
      author: "Stephen King",
      genre: "Horror",
      rating: 4.6,
      price: 18.99,
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Dystopian",
      rating: 4.7,
      price: 20.99,
    },
    {
      title: "The Odyssey",
      author: "Homer",
      genre: "Classics",
      rating: 4.5,
      price: 15.99,
    },
    {
      title: "The Road",
      author: "Cormac McCarthy",
      genre: "Post-Apocalyptic",
      rating: 4.2,
      price: 16.99,
    },
    {
      title: "Gone with the Wind",
      author: "Margaret Mitchell",
      genre: "Historical Fiction",
      rating: 4.8,
      price: 23.99,
    },
    {
      title: "The Martian",
      author: "Andy Weir",
      genre: "Science Fiction",
      rating: 4.6,
      price: 19.99,
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure",
      rating: 4.4,
      price: 17.99,
    },
  ];
  
  // find Expensive book more than 12
  // find 12-18 priced range books
  // sort books by rating
  // find more than 20 length books
  // add summary on object by like this `A captivating book by ${book.author}.`
    const priceFilter=(arr, min)=>{
        let filArr=arr.filter((a)=>{
            return a.price>min;
        });
        return filArr;
    }
  const result=priceFilter(bookData, 12);
//   console.log(result);
  const priceRange=(arr, min, max)=>{
    let filArr=arr.filter((a)=>{
        return a.price>min & a.price<max;
    });
    return filArr;
  }
  const test=priceRange(bookData, 12,18);
//   console.log(test);
  const sortByRating=(arr)=>{
    let sortArr=arr.sort((a,b)=>a.rating-b.rating);
    return sortArr;
  }
  const sorted=sortByRating(bookData);
//   console.log(sorted);
  const findLong=(arr, len)=>{
    let arrFil=arr.filter((a)=> {
        return a.title.length>len;
    });
    return arrFil;
  }
  const long=findLong(bookData, 20);
//   console.log(long);
  const addSummary=(arr)=>{
    let newArr=arr.map((a)=>{
        a.summary=`A captivating book by ${a.author}`
        return a;
    });
    return newArr;
  }
  const newBook=addSummary(bookData);
  console.log(newBook);