document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const studentTableBody = document.querySelector('#student-table tbody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
  
      let name = nameInput.value.trim();
      let email = emailInput.value.trim();
      let isValid = true;
  
      nameError.textContent = '';
      emailError.textContent = '';
  
      try {
        if (name === '') {
          throw new Error('Please, Enter name');
        }
      } catch (error) {
        nameError.textContent = error.message;
        isValid = false;
      }
  
      try {
        if (email === '') {
          throw new Error('Please, Enter email');
        } else if (!validateEmail(email)) {
          throw new Error('Email is not valid');
        }
      } catch (error) {
        emailError.textContent = error.message;
        isValid = false;
      }
  
      if (isValid) {
        addStudent(name, email);
        nameInput.value = '';
        emailInput.value = '';
      }
    });
  
    function validateEmail(email) {
        const input = document.createElement('input');
        input.type = 'email';
        input.value = email;
        return input.checkValidity();
    }

    function addStudent(name, email) {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const emailCell = document.createElement('td');
      const actionCell = document.createElement('td');
      const deleteButton = document.createElement('button');
  
      nameCell.textContent = name;
      emailCell.textContent = email;
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', function() {
        studentTableBody.removeChild(row);
      });
  
      actionCell.appendChild(deleteButton);
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(actionCell);
      studentTableBody.appendChild(row);
    }
  });
  