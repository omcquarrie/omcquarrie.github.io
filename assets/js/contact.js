// contact.js
// Client-side form handler: sanitizes input and POSTs to a configured endpoint
// Replace the form's data-endpoint attribute with your Formspree URL.

(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('cf-status');

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    status.textContent = '';

    const rawName = form.elements['name'] ? form.elements['name'].value : '';
    const rawEmail = form.elements['email'] ? form.elements['email'].value : '';
    const rawSubject = form.elements['subject'] ? form.elements['subject'].value : '';
    const rawMessage = form.elements['message'] ? form.elements['message'].value : '';

    const name = escapeHtml(rawName.trim());
    const email = rawEmail.trim();
    const subject = escapeHtml(rawSubject.trim());
    const message = escapeHtml(rawMessage.trim());

    if (!name || !email || !message) {
      status.style.color = 'red';
      status.textContent = 'Please fill in name, email, and message.';
      return;
    }

    if (!validEmail(email)) {
      status.style.color = 'red';
      status.textContent = 'Please enter a valid email address.';
      return;
    }

    const endpoint = form.dataset.endpoint || '';
    if (!endpoint) {
      status.style.color = 'red';
      status.textContent = 'Form endpoint not configured. Update data-endpoint on the form.';
      return;
    }

    const payload = { name: name, email: email, subject: subject, message: message };

    status.style.color = '';
    status.textContent = 'Sending...';

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        if (res.ok) {
          status.style.color = 'green';
          status.textContent = 'Message sent — thank you!';
          form.reset();
        } else {
          return res.json().then(function (data) {
            status.style.color = 'red';
            status.textContent = data && data.error ? ('Error: ' + data.error) : 'Error sending message.';
          }).catch(function () {
            status.style.color = 'red';
            status.textContent = 'Error sending message.';
          });
        }
      })
      .catch(function (err) {
        console.error(err);
        status.style.color = 'red';
        status.textContent = 'Network error. Please try again later.';
      });
  });
})();
