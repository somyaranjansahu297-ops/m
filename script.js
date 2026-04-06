const membershipOptions = document.querySelectorAll('input[name="membership"]');
const paymentOptions = document.querySelectorAll('input[name="payment"]');
const selectedPlan = document.getElementById('selected-plan');
const selectedPayment = document.getElementById('selected-payment');
const selectedPrice = document.getElementById('selected-price');
const statusMessage = document.getElementById('status');
const form = document.getElementById('checkout-form');

function updateSummary() {
  const activePlan = document.querySelector('input[name="membership"]:checked');
  const activePayment = document.querySelector('input[name="payment"]:checked');

  selectedPlan.textContent = activePlan.dataset.name;
  selectedPayment.textContent = activePayment.value;
  selectedPrice.textContent = `₹${activePlan.value}`;
}

membershipOptions.forEach((option) => option.addEventListener('change', updateSummary));
paymentOptions.forEach((option) => option.addEventListener('change', updateSummary));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');

  statusMessage.textContent = `Thanks, ${name}! Redirecting you to HDFC Bank secure payment gateway...`;
});

updateSummary();
