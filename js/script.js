// This file contains the JavaScript code that handles the audio playback functionality.

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const stopButton = document.getElementById('stop-button');

    const text = "My memories faded away so long ago \nI've been trying to let them go \nBut they come back to and fro \n\n To teach me the lessons of the flames and fire \nOn why I should be tired \nOtherwise I'll die retired \n\n To let them know that I tried \nMy feelings so confined \nSealing that I tried to lie \nHeld back the tears that I cried \n\n So I sought that I should fly \nMy heart was compromised \nStopped by the limits of \nNervousness and a lack of time \n\n So I went to my friend \nHe told to let go \nThat the time That I lent \nHappened so I could grow \nI said things in a flow \nIt don't matter anymore \nBut the thing that matters more \nIs the strength that I show \n\n I moved on, and it took a lot of time \nThen he came up to me again \nTelling what he had in mind \nThere was someone who was a friend \nBut she looked hella fine \nHe wanted my help \nSo he could get her on time \n\n So here Ima tell you a story \nOn how the people with lust \nGet left in the dust \nWhile others live in glory \n\n And that's how it goes \nWith your foes \nAnd no hoes \n\n [2nd Beat] \n\n The things that have bothered me \nLinks that have sobered me \nWhat is the hell you keep \nHow much to really sleep \n\n Mind all my prophecies \nTruth is that you will see \nRuthless and power to know all my enemies \n\n Hopeless days are hopefully killing me \nRays to cope is a symptom of tyranny \nTried to get rid of my conspiracies \nThen one day I had an epiphany \n\n My mind is gone but I've tried \n\n Greatness to achieve and strive \n\n I think I should let go \n\n Pain stays overtime \n\n Maybe that's how life is \n\n Its all not all eternal bliss \n\n Sometimes you can just miss \n\n So here's how it is \n\n [FAST FAST FAST] \n\n 1:48 \n\n I've been tryna get it, eliminating \nThings are sour assimilatin \nPower all the real and fakin \nMoney is the heal and making \nI can feel all of it breaking \nLove and lows that I'm raking \nSome friends are to be taken \nRest of them do be hating \nI'm getting small ratings \nBut its not all mating \nI've been meditating \nAll of you really faking \nSome things I all take in \nRest I fully bake in \nI'm just seeming sinning \n\n Yea, that's how it goes \nHow all my feeling flows \nSow all the fleeting woes \nWater and let them grow \n\n That is life \nBe surprised \nWait and get a nice prize \nOtherwise \nBe demised \nNothings ever so precise \n\n I walk with my fleet \nAll I had to keep \nWas promise and sleep \nWith malice and greed \n\n That's not how to do it \nWell then what do you see \n\n Is it me? \n... \nOr is it the greens and trees \nThe parrots and bees \nOr all the people freed \nThat's just how you fully lead \nI leave \n... \nI sow \nI let the hatred grow \nLet all the anger flow \nThen land all my blows \nDown low \n... \nTo the people that ever wronged me \nThinking that I wouldn't try \nI helped these mortals in \nChanging up all of their minds \n\n Well then what do you see \n\n \n Is it me alone on the street \n\n \n I'm sorry that's not how it be \n\n \n That's something not in my creed \n\n \n Will I be alone when in a summer breeze \n\n \n I have to be strong even if I barely freeze \n\n \n When I set to sail to the 7 seas \n\n \n To find the one that's the one for me \n\n";
    const formattedText = text.replace(/\n/g, "<br>");
    
    const textContainer = document.createElement("div");
    textContainer.className = "text-container";
    textContainer.innerHTML = formattedText;
    document.querySelector(".container").appendChild(textContainer);
    
    playButton.addEventListener('click', function() {
        audio.play();
    });

    pauseButton.addEventListener('click', function() {
        audio.pause();
    });

    stopButton.addEventListener('click', function() {
        audio.pause();
        audio.currentTime = 0;
    });
});