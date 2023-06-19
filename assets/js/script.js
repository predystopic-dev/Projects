// // let initialHue = 0;
// // let isHovered = false;
// var root = document.querySelector(':root');
// // let currentHue = 0
// // let previousHue = 0

// // function onMouseOverImage() {
// //     isHovered = true;
// //     setTimeout(function() {
// //        calculateCurrentHue();
// //         // root.style.setProperty('--currentHue', calculateCurrentHue());
// //         // console.log("onMouseOver " + currentHue);
// //       }, 100);
// // }

// // function onMouseOutImage() {
// //     isHovered = false;
// //     setTimeout(function() {
// //         calculateCurrentHue();
// //     }, 100);
// //     // root.style.setProperty('--currentHue', previousHue);
// // }

// // function calculateCurrentHue() {
// //     const imageElement = document.getElementById("brighten-image");
// //     const computedStyle = getComputedStyle(imageElement);
// //     const currentFilter = computedStyle.getPropertyValue("filter");
// //     console.log(currentFilter);
// //     // const match = currentFilter.match(/hue-rotate\(([-\d.]+)deg\)|hue-rotate\(([-\d.]+)\)/);
// //     // console.log("match: " + match);
// //     // const cHue = match ? parseInt(match[1] || match[2])  : 0;
// //     const match = currentFilter.match(/hue-rotate\(([-\d.]+)deg\)/);
// //     const hueValue = match ? parseFloat(match[1]) : 0;
// //     const cHue = (hueValue % 360 + 360) % 360;
// //     console.log((cHue + 360) % 360);
// //     console.log(cHue);
// //     root.style.setProperty('--currentHue', cHue);
// // }

// var root = document.querySelector(':root');
// let currentHue = 0;

// function onMouseOverImage() {
//     isHovered = true;
//     setTimeout(function() {
//         console.log("over: " + calculateCurrentHue());
//     }, 100);
// }

// function onMouseOutImage() {
//     isHovered = false;
//     setTimeout(function() {
//         console.log(calculateCurrentHue());
//     }, 100);
// }

// document.getElementById("brighten-image").addEventListener("animationiteration", (event) => {
//     calculateCurrentHue(event);
// });

// function calculateCurrentHue(event) {
//     const imageElement = document.getElementById("brighten-image");
//     const computedStyle = getComputedStyle(imageElement);
//     const match = computedStyle.animationName.match(/hueRotation (\d+)s/);
//     const animationDuration = match ? parseInt(match[1]) : 2; // Default duration if not found
//     const elapsedTime = event.elapsedTime % animationDuration;
//     const elapsedPercentage = (elapsedTime / animationDuration) * 100;
//     currentHue = elapsedPercentage * 3.6; // Convert percentage to degrees (1% = 3.6 degrees)
//     root.style.setProperty('--currentHue', currentHue);
//     return currentHue;
// }


// This one works fine but reverseAnimation doesn't run
// var root = document.querySelector(':root');
// let currentHue = 0;
// let animationStartTime = null;

// function onMouseOverImage() {
//     isHovered = true;
//     animationStartTime = Date.now();
// }

// function onMouseOutImage() {
//     isHovered = false;
//     setTimeout(function() {
//         console.log(calculateCurrentHue());
//     }, 80);
//     setTimeout(function() {
//         addReverseHueRotationAnimation();
//     }, 100);
// }

// document.getElementById("brighten-image").addEventListener("animationiteration", function(event) {
//     animationStartTime = Date.now();
//     calculateCurrentHue();
// });

// function calculateCurrentHue() {
//     const imageElement = document.getElementById("brighten-image");
//     const computedStyle = getComputedStyle(imageElement);
//     const match = computedStyle.animationName.match(/hueRotation (\d+)s/);
//     const animationDuration = match ? parseInt(match[1]) : 2; // Default duration if not found
//     const elapsedTime = Date.now() - animationStartTime;
//     const elapsedPercentage = (elapsedTime / (animationDuration * 1000)) * 100;
//     currentHue = elapsedPercentage * 3.6; // Convert percentage to degrees (1% = 3.6 degrees)
//     root.style.setProperty('--currentHue', currentHue);

//     return currentHue;
// }

// function addReverseHueRotationAnimation() {
//     const styleSheet = document.styleSheets[0];
//     styleSheet.insertRule(`
//         .brighten:not(:hover) {
//             animation: reverseHueRotation 2s linear;
//             -webkit-animation: reverseHueRotation 2s linear;
//         }
//     `, styleSheet.cssRules.length);

//     styleSheet.insertRule(`
//         @keyframes reverseHueRotation {
//             0% {
//                 filter: hue-rotate(var(--currentHue)deg);
//             }
//             100% {
//                 filter: hue-rotate(0deg);
//             }
//         }
//     `, styleSheet.cssRules.length);
//     currentHue = 0;
//     console.log(currentHue);
// }
// addReverseHueRotationAnimation(); // Add initial reverseHueRotation animation

var root = document.querySelector(':root');
let currentHue = 0;
let animationStartTime = null;

function onMouseOverImage() {
    isHovered = true;
    animationStartTime = Date.now();
    setTimeout(function() {
        console.log("over: " + calculateCurrentHue());
    }, 100);
}

function onMouseOutImage() {
    isHovered = false;
    setTimeout(function() {
        console.log(calculateCurrentHue());
        removeReverseHueRotationAnimation();
    }, 100);
}

document.getElementById("brighten-image").addEventListener("animationiteration", function(event) {
    animationStartTime = Date.now();
    calculateCurrentHue();
});

function calculateCurrentHue() {
    const imageElement = document.getElementById("brighten-image");
    const computedStyle = getComputedStyle(imageElement);
    const match = computedStyle.animationName.match(/hueRotation (\d+)s/);
    const animationDuration = match ? parseInt(match[1]) : 2; // Default duration if not found
    const elapsedTime = Date.now() - animationStartTime;
    const elapsedPercentage = (elapsedTime / (animationDuration * 1000)) * 100;
    currentHue = elapsedPercentage * 3.6; // Convert percentage to degrees (1% = 3.6 degrees)
    currentHue = currentHue % 360;
    root.style.setProperty('--currentHue', currentHue);
    return currentHue;
}

function addReverseHueRotationAnimation() {
    const imageElement = document.getElementById("brighten-image");
    imageElement.classList.add("reverse-hue-rotation");
}

function removeReverseHueRotation() {
    const imageElement = document.getElementById("brighten-image");
    imageElement.style.animation = "";
}

removeReverseHueRotation(); // Remove reverseHueRotation animation initially