import './scroll-timeline.js';
import './gallery.js';
import './bg.js';
import './track.js';

const track = document.querySelector('.rocket-scroll-timeline');
const rocket = document.querySelector('.rocket-path');

// scroll-animation
rocket.animate(
    [
        { offsetDistance:'0%',offset:0 },
        { offsetDistance: '43%', offset: 0.4 },
		{ offsetDistance: '43%', offset: 0.58 },
        { offsetDistance:'100%',offset:1 }
    ],
    {
        fill:'both',
        timeline: new ScrollTimeline({
            scrollOffsets : [
                {target:track, edge:'start', threshold:1},
                {target:track, edge:'end', threshold:1}
            ]
        })
    }
)

let prevScrollY = -1;
let scrollFlag = false;
window.addEventListener('scroll', function(){
    if(scrollFlag) return;
    scrollFlag = true;
    this.setTimeout(() => {
        scrollFlag = false;
        if(prevScrollY < window.scrollY){
            console.log('down');
            rocket.dataset.location = 'down';
        } else {
            console.log('up');
            rocket.dataset.location = 'up';
        }
        prevScrollY = window.scrollY;
    }, 100);
});


// animation (자동 애니메이션)
// const keyframes = [
//     {offsetDistance:'0%'},
//     {offsetDistance:'100%'}
// ];
// const options = {
//     duration:3000,
//     fill:'both',
// }
// rocket.animate(keyframes, options)