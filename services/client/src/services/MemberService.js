const baseURL = 'http://localhost:3000/api/members/'

export default {
  getMembers(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  updateMember(payload){
    return fetch(baseURL, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteMember(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}
