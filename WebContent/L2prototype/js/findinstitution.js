window.MyFindInstitutionComponent = zoid.create({

    // The html tag used to render my component
    tag: 'my-findinstitution-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page
    // using http://127.0.0.1... to simulate a different domain to http://localhost...
    // url: 'http://www.my-site.com/my-findinstitution-component'
    // you can also call it from the following (not recommended in production environments)
    // url: zoid.getCurrentScriptDir() + '/../js/findinstitution.html'
    url: 'http://127.0.0.1:8080/ra21/L2prototype/js/findinstitution.html'
    	
    
});