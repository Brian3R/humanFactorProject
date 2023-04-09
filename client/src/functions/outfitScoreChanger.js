import individualScoreChanger from './individualScoreChanger';

function outfitScoreChanger (index1, index2, index3, isLiked){
    individualScoreChanger (index1, 0, isLiked);
    individualScoreChanger (index2, 1, isLiked);
    individualScoreChanger (index3, 2, isLiked);
}

export default outfitScoreChanger;