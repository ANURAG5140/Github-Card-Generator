function getData(){
    let userLink=document.getElementById('input');
    let username=userLink.value;
    if (!username) {
        alert("Please enter a valid GitHub username!");
        return;
    }
    userLink.value=""
    fetch(`https://api.github.com/users/${username}`)
    .then(response=>response.json())
    .then(data=>showData(data))

}

function showData(data){

    const card=document.getElementById('show_card')
    
    let img=document.createElement('img')
    img.src=data.avatar_url
    card.append(img)
    let p1=document.createElement('p')
    p1.innerHTML=`<b>Username</b> : ${data.name}`
    card.append(p1)
    let p2=document.createElement('p')
    p2.innerHTML=`<b>Email</b> : ${data.email}`
    card.append(p2)
    let p3=document.createElement('p')
    p3.innerHTML=`<b>Followers</b> : ${data.followers}`
    card.append(p3)
    let p4=document.createElement('p')
    p4.innerHTML=`<b>Following</b> : ${data.following}`
    card.append(p4)
    let p5=document.createElement('p')
    p5.innerHTML=`<b>Location</b> : ${data.location}`
    card.append(p5)
    let p6=document.createElement('p')
    p6.innerHTML=`<b>Repositories</b> : ${data.public_repos}`
    card.append(p6)
    let p7=document.createElement('p')
    p7.innerHTML=`<b>Visit Profile</b> : <a href= ${data.html_url} >${data.html_url}</a>`
    card.append(p7)
}