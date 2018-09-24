const API_URL = 'https://stasgavrylov.github.io/js-20180809/phones';

const HttpService = {
  sendRequest(url, {
    errorCallback,
    successCallback
  }) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL + url, true);
    xhr.send();

    xhr.onload = () => {
      let responseData = JSON.parse( xhr.responseText );
      successCallback(responseData);
    }

    xhr.onerror = errorCallback;
  }
}

export default HttpService;
