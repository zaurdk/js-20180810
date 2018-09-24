// http://localhost:3000/phones/phones.json

const PhoneService = {
  getPhones() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/phones/phones.json', false);
    xhr.send();

    if (xhr.status != 200) {
      alert( xhr.status + ': ' + xhr.statusText );
    } else {
     let responseData = JSON.parse( xhr.responseText );
      return responseData;
    }
  },

  getPhone(phoneId) { }
}



export default PhoneService
