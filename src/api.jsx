import axios from 'axios';

const searchImages = async (term) => {
   try {
       const response = await axios.get('https://api.unsplash.com/search/photos',
        {
            headers: {
                Authorization:'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y'
            },
            params: {
                query: term,
            }
        });

        return response.data.results;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}

export default searchImages;