function mobaileMarkup(data) {
  return data[0].map(({list_name,})
    `<ul class="card-list">
            <li class="card-item">
              <h2 class="card_title-section">${}</h2>
              <div class="card">
                <img
                  class="card_photo"
                  src=${}
                  alt=${}
                />
                <h3 class="card_book-title">${}</h3>
                <h4 class="card_author-title">${}</h4>
              </div>
              <div class="card_link">
                <a class="card_link-more" href="">See more</a>
              </div>
            </li>
          </ul> `).join('');
}
