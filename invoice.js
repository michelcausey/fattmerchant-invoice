var request = new XMLHttpRequest();

request.open('GET', 'https://apiprod.fattlabs.com/item');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Authorization', 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZXJjaGFudCI6IjZkMzI5Nzk3LWI2NGQtNDdkMS1hNDU3LTQ3OThlMmIzNjFiNSIsImdvZFVzZXIiOmZhbHNlLCJzdWIiOiI0ODI3ODAzNi1jYzE5LTQ3YWItYTgyOC03MzRiOWUxYWNlMDIiLCJpc3MiOiJodHRwOi8vYXBpZGVtby5mYXR0bGFicy5jb20vdGVhbS9hcGlrZXkiLCJpYXQiOjE1NTU0Mjg2MzMsImV4cCI6NDcwOTAyODYzMywibmJmIjoxNTU1NDI4NjMzLCJqdGkiOiJxZTNueklKdWlDOFhKN1dhIiwiYXNzdW1pbmciOmZhbHNlfQ.TEmlwmgVBLwt5x0FO4c-mbY3JgO_tgxcFRfznlOGSrM');
request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

request.send();