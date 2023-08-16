//same as useeffect but uselayouteffect, runs synchronously after a render but before the screen is updated 
//suppose we have 4+ uselayouteffect in which we have some conditions to run it will go 1 by 1 if 1st is running only then it will go 
//on 2nd to run but if 1st is not running it will not go further (thats disadvantage )

//useeffect runs asynchronously and after a render is paintedto the screen