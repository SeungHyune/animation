const gallery = document.querySelector('.gallery');
const galleryTimeline = document.querySelector('.gallery-timeline');

gallery.animate(
    [
        { opacity: 0, offset: 0 },
		{ opacity: 1, offset: 0.1 },
		{ transform: 'translateX(0)', offset: 0.1 },
		{ transform: 'translateX(calc(-100% + 100vw)', offset: 0.9 },
		{ opacity: 1, offset: 0.96 },
		{ opacity: 0, transform: 'translateX(calc(-100% + 100vw)', offset: 1 }
    ],
    {
        fill:'both',
        timeline : new ScrollTimeline({
            scrollOffsets : [
                {target:galleryTimeline, edge:'start', threshold:1},
                {target:galleryTimeline, edge:'end', threshold:1}
            ]
        })
    }
)