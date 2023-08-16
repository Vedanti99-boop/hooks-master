//same as your useeffect hook , it is used to optimize/increase performance of your application 
// const var_name = useMemo(callback,[array dependency]) syntax is same as useeffect just here we can save it in variable and can 
//return value through callback , in useeffect it also has callback but we cant return the value 
//eg we have 2 sections 1st section  is of counter(incrementing num) and 2nd section consiste of toggle button it could be anything 
//so without using usememo whats happening now if i am trying to increase the count its working giving some output and now if i am trying 
//to click toggle button its also working properly but at the same time its calling 1st section as well we dont want 1st section to get called coz its 
//different from 2nd so there we use this usememo to call only section which is needed 