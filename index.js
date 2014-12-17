var stackTrack = require('stack-track'),
    tracker = new stackTrack(),
    topHandler;

if(typeof document !== 'undefined') {
    document.addEventListener('backbutton', function(event){
        if(topHandler) {
            topHandler(event);
        }
    });
}

tracker.on('top', function(handler){
    topHandler = handler;
});
tracker.on('empty', function(){
    topHandler = null;
});

module.exports = function(handler){
    return tracker.push(handler);
};
