/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    // Load the navbar dynamically via jQuery and Ajax
    var header = $('#mainHeader').load("partials/nav.html", function() {
        var bodyid = $('body').attr('id');
        switch (bodyid.toString()) {
            case "index":
                $('#indexLink').attr("class", "active");
                break;
            case "projects":
                $('#projectsLink').attr("class", "active");
                break;
            case "contact":
                $('#contactLink').attr("class", "active");
                break;
        }
    });

    //CreateJS Section ++++++++++++++++++++++++++++++++++++

    //global variables
    var screenWidth = window.innerWidth * 0.8;

    // reference to canvas element
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth);
    canvas.setAttribute("height", "480");

    // create a stage container object
    var stage = new createjs.Stage(canvas);

    var helloLabel = null;
    var helloLabelMove = 5;

    var button = null;
    var buttonMove = 5;

    function init() {
        console.log("Initialization");
        // enable mouseover effects for all buttons
        stage.enableMouseOver(20);
        
        // set frame rate to 60 fps
        createjs.Ticker.setFPS(60);
        // listen for frame changes and call the animationLoop function
        createjs.Ticker.addEventListener("tick", animationLoop);

        // call the main function
        main();
    }

    // runs every frame
    function animationLoop() {

        helloLabel.rotation += 5;
        button.rotation += 5;
        helloLabel.x += helloLabelMove;
        button.x += buttonMove;
        if ((helloLabel.x >= screenWidth) || (helloLabel.x <= 0)) {
            helloLabelMove *= -1;
            buttonMove *= -1;
        }

        // refresh the stage object
        stage.update();
    }

    // this is where all the magic happens
    function main() {
        button = new createjs.Bitmap('../Assets/images/button.jpg');
        button.regX = button.getBounds().width * 0.5;
        button.regY = button.getBounds().height * 0.5;
        button.scaleX = 0.5;
        button.scaleY = 0.5;
        button.x = screenWidth * 0.5;
        button.y = 240;
        stage.addChild(button);

        helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = screenWidth * 0.5;
        helloLabel.y = 240;
        stage.addChild(helloLabel);

        button.on("click", function() {
            helloLabel.text = "Clicked!";
            helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
            helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        });
        
        button.on('mouseover', function() {
            button.alpha = 0.5;
        })
        
        button.on('mouseout', function() {
            button.alpha = 1;
        })
    }

    window.onload = init;


})();

