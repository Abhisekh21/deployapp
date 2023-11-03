const xhr= new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
xhr.onload=function(){
    const listofpost=JSON.parse(xhr.response)
    console.log(listofpost)
}
xhr.send()