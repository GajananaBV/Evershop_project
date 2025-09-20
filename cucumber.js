module.exports={
 default: {
   require:
   ["tests/steps/**/*.ts"],
   
   requireModule: ["ts-node/register"],
   format: [
        "progress",
      "allure-cucumberjs/reporter"
   ],
     formatoptions:{
      "allure-cucumberjs":{
        resultsDir:"allure-results"
      }
     },
   paths: ["tests/features/**/*.feature"],
 },
 
};