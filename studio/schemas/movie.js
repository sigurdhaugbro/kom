import {MdLocalMovies as icon} from 'react-icons/md'

export default {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
    },
    {
      name: 'todayStart',
      title: 'Today Start',
      type: 'string'
    },
    {
      name: 'tomorrowStart',
      title: 'Tomorrow Start',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
  ],
}
