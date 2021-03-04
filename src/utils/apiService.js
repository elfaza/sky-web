import Prismic from '@prismicio/client';

const apiEndpoint = 'https://yukngaji-sky.cdn.prismic.io/api/v2'
const apiService = Prismic.client(apiEndpoint)

export default apiService;