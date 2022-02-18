function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var gallery = document.getElementById('auction-gallery')
var gallerymorebutton = document.getElementById('gallerymorebutton')


policyID = '16f53611522affbc8dd0bb82f8488b529b7ae504412c334172e728ad'
name_prefix = 'SPLID'

gallery_size = 8

// Load images
function populateGallery() {

    while(gallery.firstChild) gallery.removeChild(gallery.firstChild)

    var images= [];
    var indizes = []

    for (var i = 1; i < gallery_size+1 ; i++) {

      rand_img_idx = getRandomInt(1,1221)
        
      while( indizes.indexOf(rand_img_idx) !== -1 ){
          rand_img_idx = getRandomInt(1,1221)
      }
      indizes.push(rand_img_idx)

      images.push({
        title: "Splid #" + (rand_img_idx),
        poolpm: 'https://pool.pm/'+policyID+'.'+name_prefix+(("000" + rand_img_idx).slice(-4)),
        source: "splids/images/SPLID"+(("000" + rand_img_idx).slice(-4))+"_thumbnail.jpg"
      });

    } 
    //console.log(images)

    for (var i = 0; i < gallery_size ; i++) {
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
  
} // End of showImages 

populateGallery();

num_gallery_pics = gallery.children.length;
//console.log('Pics: '+num_gallery_pics)

gallerymorebutton.addEventListener('click', function() {
    populateGallery();
})