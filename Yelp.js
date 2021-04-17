const apiKey = 'jfKaZJ7aAYaPKPrzuWIdT-RXDG-X8wllO61jVGwB_eyyf4H7EysVSX4LJLLYRUvukQBcr1fFjfdlN5i_z42-PQ19529djGhZYp-9v1MseBxl7c3mT3rUR2BpqDNbYHYx'

const Yelp = {
    search (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((resp) => {
            return resp.json()
        }).then((respJson) => {
            if (respJson.businesses){
              return respJson.businesses.map((business) => {
                  console.log(business);
                    return {
                        url: business.url,
                        id: business.id,
                        imageSrc:business.image_url,
                        name: business.name,
                        address:business.location.address1,
                        city:business.location.city,
                        state:business.location.state,
                        zipCode:business.location.zipCode,
                        category:business.categories[0].title,
                        rating:business.rating,
                        reviewCount:business.review_count,
                    };
                })
            } else{
                alert('No such thing exists Master Brian :\'(');
                window.location.href = 'http://localhost:3000/';
    
            } 
        })
    }
}

export default Yelp;