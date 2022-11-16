const email = document.getElementById('email')
const emailError = document.getElementById('email-error')
const country = document.getElementById('country')
const countryError = document.getElementById('country-error')
const zip = document.getElementById('zip-code')
const zipError = document.getElementById('zip-error')
const password = document.getElementById('password')
const passwordError = document.getElementById('password-error')
const confirm = document.getElementById('confirm')
const confirmError = document.getElementById('confirm-error')

email.addEventListener('input', () => {
  if(email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email (ex: JohnSmith@gmail.com)"
  }
  else
    emailError.textContent = ""
}
)

country.addEventListener('input', () => {
  if(country.validity.patternMismatch) {
    countryError.textContent = "Please enter a valid country"
  }
  else 
    countryError.textContent = ""
})

zip.addEventListener('input', () => {
  if(zip.validity.typeMismatch) {
    zipError.textContent = "Please enter a valid zip code"
  }
  else
    zipError.textContent = ""
})

password.addEventListener('input', () => {
  if(password.validity.patternMismatch) {
    passwordError.textContent = "Password should be at least 8 letters and contain at least one digit, one lowercase, and one uppercase letter"
  }
  else 
    passwordError.textContent = ""
})

confirm.addEventListener('input', () => {
  if(confirm.value === password.value) {
    confirmError.textContent = ""
  }
  else
    confirmError.textContent = "Passwords do not match!"
})







