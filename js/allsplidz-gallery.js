var gallery = document.getElementById('allsplidz-gallery')
var gallerymorebutton = document.getElementById('allsplidzmorebutton')

var images= [];

total_splids = 1221

initial_load_count = 4*7
load_more_count = 4*5
load_more_offset = initial_load_count+1

policyID = '16f53611522affbc8dd0bb82f8488b529b7ae504412c334172e728ad'
name_prefix = 'SPLID'

for (var i = 1; i < initial_load_count+1 ; i++) {
  images.push({
    title: "Splid #" + (i),
    poolpm: 'https://pool.pm/'+policyID+'.'+name_prefix+(("000" + i).slice(-4)),
    source: "splids/images/SPLID"+(("000" + i).slice(-4))+"_thumbnail.jpg"
  });
} 

// Load images
function initialImageLoader() {
    
    while(gallery.firstChild) gallery.removeChild(gallery.firstChild)

    for (var i = 0; i < initial_load_count ; i++) {
        if ( images[i] ) {
          var template = document.createElement('div');
          var title = document.createElement('p');
          var titleText = document.createTextNode(images[i].title);
          var img = document.createElement('img');

            var linkEl = document.createElement('a')
            linkEl.setAttribute('href', images[i].poolpm);
            linkEl.setAttribute('target', "_blank");

            var contentOverlayEl = document.createElement('div');
            contentOverlayEl.classList.add('content-overlay')

            var contentEl = document.createElement('div');
            contentEl.classList.add('content')

          var templateDetails = document.createElement('div');
          templateDetails.classList.add('content-details')
          templateDetails.classList.add('fadeIn-top')

          var detailsTitle = document.createElement('h3');
          var detailsTitleText = document.createTextNode('Click to view on pool.pm');
          detailsTitle.appendChild(detailsTitleText);
          templateDetails.appendChild(detailsTitle);

          template.classList.add('template')

          img.setAttribute("src", images[i].source);
          img.setAttribute('alt', images[i].title);
            img.classList.add('content-image')

          title.appendChild(titleText);

            contentEl.appendChild(contentOverlayEl);
          contentEl.appendChild(img);

            contentEl.appendChild(templateDetails);
            contentEl.appendChild(linkEl);

            template.appendChild(contentEl)
          template.appendChild(title);


          gallery.appendChild(template);      
        }
      }
  
      // Animate images
      var galleryItems = document.querySelectorAll('.template')
      for (var i = 0; i < galleryItems.length; i++) {
        var onAnimateItemIn = animateItemIn(i);
        setTimeout(onAnimateItemIn, i * 100);
      }

      function animateItemIn(i) {
        var item = galleryItems[i];
        return function() {
          item.classList.add('animate');
        }
      }
  
}// end of initialImageLoader

initialImageLoader();

function loadMoreImages(){
    
    var more_images= [];

    //load_more_offset

    for (var i = load_more_offset; i < load_more_count+load_more_offset+1 ; i++) {
      more_images.push({
        title: "Splid #" + (i),
        poolpm: 'https://pool.pm/'+policyID+'.'+name_prefix+(i),
        source: "splids/images/SPLID"+(("000" + i).slice(-4))+"_thumbnail.jpg"
      });
    } 
    //console.log(more_images)
    
    for (var i = 0; i < load_more_count ; i++) {
        if ( more_images[i] ) {
          var template = document.createElement('div');
          var title = document.createElement('p');
          var titleText = document.createTextNode(more_images[i].title);
          var img = document.createElement('img');

            var linkEl = document.createElement('a')
            linkEl.setAttribute('href', more_images[i].poolpm);
            linkEl.setAttribute('target', "_blank");

            var contentOverlayEl = document.createElement('div');
            contentOverlayEl.classList.add('content-overlay')

            var contentEl = document.createElement('div');
            contentEl.classList.add('content')

          var templateDetails = document.createElement('div');
          templateDetails.classList.add('content-details')
          templateDetails.classList.add('fadeIn-top')

          var detailsTitle = document.createElement('h3');
          var detailsTitleText = document.createTextNode('Click to view on pool.pm');
          detailsTitle.appendChild(detailsTitleText);
          templateDetails.appendChild(detailsTitle);

          template.classList.add('template')

          img.setAttribute("src", more_images[i].source);
          img.setAttribute('alt', more_images[i].title);
            img.classList.add('content-image')

          title.appendChild(titleText);

            contentEl.appendChild(contentOverlayEl);
          contentEl.appendChild(img);

            contentEl.appendChild(templateDetails);
            contentEl.appendChild(linkEl);

            template.appendChild(contentEl)
          template.appendChild(title);


          gallery.appendChild(template);      
        }
      }
    
    
    // Animate more_images
      var galleryItems = document.querySelectorAll('.template')
      
      for (var i = load_more_offset-1; i < load_more_count+load_more_offset-1 ; i++){ 
        var onAnimateItemIn = animateItemIn(i);
        setTimeout(onAnimateItemIn, (i-load_more_offset) * 100);
      }

      function animateItemIn(i) {
        var item = galleryItems[i];
        return function() {
          item.classList.add('animate');
        }
      }
    
    
} // end of loadMoreImages()

gallerymorebutton.addEventListener('click', function() {
    loadMoreImages();
    load_more_offset+=load_more_count
})

