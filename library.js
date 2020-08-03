const {Builder, By, Key, until} = require("selenium-webdriver");
async function findingElement(){
    
    var driver = await new Builder().forBrowser("chrome").build();
    await driver.get('https://library-app.firebaseapp.com');
    // await driver.findElement(By.css('input')).then(function(el){
    //     console.log("success "+ el);
    // });
    // await driver.findElement(By.css('.btn-lg')).then(function(el){
    //     console.log("Found the Button "+ el)
    // });
    // await driver.findElements(By.css('nav li')).then(function(array){
    //     console.log("Found the elements you wanted "+ array)
    // });

    await driver.findElement(By.css('input'));
    await driver.findElement(By.css('.btn')).getText().then(function(txt){
        console.log("El texto del botón es "+ txt);
    });

    //use findElements
    (async function() {
        
       
        try{
            console.log("El texto de los links de la navbar son: ");
            var links = await driver.findElements({css:'nav li'});
            for(let link of links) {
                var text = await link.getText();
                console.log(text);
            }
        }catch(err){
            console.log("Something went wrong ", err.message);
        }finally{
            driver.quit();
        }
        
    })();
    
}

findingElement();





