const customFetch = (url, type, data) => {
    if(type === 'GET') {
         return fetch(url).then((res) => res.json())
    } 
    if(type === 'PUT' || type === 'POST') {
       return fetch(url, {
            method:type,
            body:JSON.stringify(data),
            headers:{ 'Content-Type': 'application/json' }
        }).then((res) => res.json())
        
    }
    
    if(type === 'DELETE') fetch(url, { method: type })
}