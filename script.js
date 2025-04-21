function showSection(id, btn) {
    // Remove active class from all buttons and notices
    document.querySelectorAll('.buttons button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.notices').forEach(div => div.classList.remove('active'));
  
    // Add active class to clicked button and target section
    btn.classList.add('active');
    document.getElementById(id).classList.add('active');
  }
  