

async function individualScoreChanger (index, bodyRegion, isLiked){
    const response = await fetch('http://localhost:8080/api/test/' + localStorage.getItem('userid'));
    const user = await response.json();
    console.log(user);
    console.log(user.inventory[bodyRegion][index].favorability);
    if (isLiked == true){
        if (user.inventory[bodyRegion][index].favorability < 10) { 
            user.inventory[bodyRegion][index].favorability++;
        }
    }
    else if (isLiked == false){
        if (user.inventory[bodyRegion][index].favorability > 0) {
            user.inventory[bodyRegion][index].favorability--;
        }
    }
    console.log(user);
    console.log(user.inventory[bodyRegion][index].favorability);

    


    const updateResponse = await fetch('http://localhost:8080/api/test/' + localStorage.getItem('userid'), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
    console.log(response.status);
    const updatedUser = await updateResponse.json();
    console.log(updatedUser);
}

export default individualScoreChanger;