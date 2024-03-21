const student = {
    firstName: "Alex",
    lastName: "Miller"
  }
  
  const student2 = {
    lastName: "Morales",
    ...student
    
  }

  console.log(student, student2);