

async function individualScoreChanger (index, bodyRegion, isLiked){
    const response = await fetch('http://localhost:8080/api/test/642dc9ec198dd112318461c1');
    const user = await response.json();

    score = user.inventory[bodyRegion][index].favorability

    if (isLiked == true){
        if (score < 10)
            score += 1
    }
    else if (isLiked == false){
        if (score > 0)
            score += -1
    }

    user.inventory[bodyRegion][index].favorability = score

    const updateResponse = await fetch('http://localhost:8080/api/test/642dc9ec198dd112318461c1', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const updatedUser = await updateResponse.json();
            console.log(updatedUser);
}

export default individualScoreChanger;