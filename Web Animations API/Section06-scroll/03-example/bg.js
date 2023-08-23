document.body.animate(
    [
        { backgroundColor: 'midnightblue' },
		{ backgroundColor: 'skyblue' },
		{ backgroundColor: 'orange' }
    ],
    {
        fill:'both',
        timeline : new ScrollTimeline({
            scrollOffsets : [
                { target:document.body, edge:'start', threshold:1 },
                { target:document.body, edge:'end', threshold:1 }
            ]
        })
    }
)