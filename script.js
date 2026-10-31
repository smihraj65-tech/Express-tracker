document.getElementById('expenseForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Page refresh hone se rokne ke liye

  // 1. Form se values nikalna
  const amount = document.getElementById('amount').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;

  // 2. Data ka object banana
  const expense = {
    amount: amount,
    description: description,
    category: category
  };

  // 3. Local Storage mein save karna (Description ko key maan kar save kar rahe hain)
  localStorage.setItem(description, JSON.stringify(expense));

  // 4. Screen par list mein dikhana
  const li = document.createElement('li');
  li.className = 'list-group-item'; // Bootstrap class
  li.textContent = `${amount} - ${category} - ${description}`;
  
  document.getElementById('expenseList').appendChild(li);

  // 5. Submit hone ke baad form clear karna
  document.getElementById('expenseForm').reset();
});