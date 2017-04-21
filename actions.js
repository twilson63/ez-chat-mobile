export const addMessage = (author, message) => {
  return fetch('https://twilson63.cloudant.com/demo2', {
    method: 'POST',
    body: JSON.stringify({ author, message }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' +
        'aGF0aW52ZXllcmZ1bGRlbnRyaWVzaGVyOmZmN2NlOTEyYWRlMGUyOTg3ZmViMmVkYTA2MWQ0NTBkNWZmMGUxMWU='
    }
  }).then(res => res.json())
}
