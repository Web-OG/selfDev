import type {Meta, StoryObj} from '@storybook/react';
import {http, HttpResponse} from 'msw';
import PostsPage from './PostsPage';
import {LayoutDecorator} from '@/shared/config/storybook/decorators/LayoutDecorator';
import {mockUserSlice} from '@/shared/lib/mocks/slices';

const meta: Meta<typeof PostsPage> = {
  title: 'pages/PostsPage',
  component: PostsPage,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof PostsPage>;

const TestData = {
  'count': 2,
  'pagination': {
    'totalPages': 1,
    'currentPage': 1,
    'next': null,
    'prev': null
  },
  'hasMore': false,
  'data': [
    {
      '_id': '660a560007aba081ef222149',
      'author': '65cdbc30d564a4a2ef039ba9',
      'title': 'Очень интересная статья PHP',
      'subtitle': 'Подзаголовок подзаголовок подзаголовок',
      'views': '6789',
      'img': 'https://i.pinimg.com/originals/63/58/6a/63586af6c1d71b6e85ca1cacf35cfcae.png',
      'createdAt': '25.03.2024',
      'type': [
        'it'
      ],
      'blocks': [
        {
          'type': 'text',
          'title': 'Подзаголовок',
          'paragraphs': [
            'Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац',
            'Второй абзац второй абзац второй абзац второй абзац второй абзац второй абзац'
          ],
          '_id': '660a560007aba081ef22214a'
        },
        {
          'code': 'export interface PostCodeBlock extends PostBlockBase {  type:\'code\';  code: string;}',
          'type': 'code',
          'paragraphs': [],
          '_id': '660a560007aba081ef22214b'
        },
        {
          'type': 'text',
          'title': 'Подзаголовок',
          'paragraphs': [
            'Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац',
            'Второй абзац второй абзац второй абзац второй абзац второй абзац второй абзац'
          ],
          '_id': '660a560007aba081ef22214c'
        },
        {
          'paragraphs': [],
          'type': 'image',
          'src': 'https://www.phpconference.com.ar/wp-content/uploads/2021/02/editores-php-1-1568x882.jpg',
          'title': 'Очень красивое изображение',
          '_id': '660a560007aba081ef22214d'
        },
        {
          'type': 'text',
          'title': 'Подзаголовок',
          'paragraphs': [
            'Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац',
            'Второй абзац второй абзац второй абзац второй абзац второй абзац второй абзац'
          ],
          '_id': '660a560007aba081ef22214e'
        }
      ],
      '__v': 0,
      'comments': [
        '661f6c682b4a707db5897a48'
      ]
    },
    {
      '_id': '660a5a980b99286c6a7b7bad',
      'author': '65cdbc30d564a4a2ef039ba9',
      'title': 'Очень интересная статья PHP',
      'subtitle': 'Подзаголовок подзаголовок подзаголовок',
      'views': '342',
      'img': 'https://i.pinimg.com/originals/63/58/6a/63586af6c1d71b6e85ca1cacf35cfcae.png',
      'createdAt': '25.03.2024',
      'type': [
        'it'
      ],
      'blocks': [
        {
          'type': 'text',
          'title': 'Подзаголовок',
          'paragraphs': [
            'Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац',
            'Второй абзац второй абзац второй абзац второй абзац второй абзац второй абзац'
          ],
          '_id': '660a5a980b99286c6a7b7bae'
        },
        {
          'code': 'export interface PostCodeBlock extends PostBlockBase {  type:\'code\';  code: string;}',
          'type': 'code',
          'paragraphs': [],
          '_id': '660a5a980b99286c6a7b7baf'
        },
        {
          'type': 'text',
          'title': 'Подзаголовок',
          'paragraphs': [
            'Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац',
            'Второй абзац второй абзац второй абзац второй абзац второй абзац второй абзац'
          ],
          '_id': '660a5a980b99286c6a7b7bb0'
        },
        {
          'paragraphs': [],
          'type': 'image',
          'src': 'https://luxe-host.ru/wp-content/uploads/0/5/1/0512d2ab5e6db5f08e671b4470cc5b1c.png',
          'title': 'Очень красивое изображение',
          '_id': '660a5a980b99286c6a7b7bb1'
        },
        {
          'type': 'text',
          'title': 'Подзаголовок',
          'paragraphs': [
            'Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац Первый абзац',
            'Второй абзац второй абзац второй абзац второй абзац второй абзац второй абзац'
          ],
          '_id': '660a5a980b99286c6a7b7bb2'
        }
      ],
      '__v': 0,
      'comments': [
        {
          '_id': '661f68502b4a707db5897a46',
          'postId': '660a560007aba081ef222149',
          'authorId': '65ceed68ff0be4aab6ce78a8',
          'content': 'awesome post.'
        },
        {
          '_id': '661f68732b4a707db5897a47',
          'postId': '660a560007aba081ef222149',
          'authorId': '65cdbc30d564a4a2ef039ba9',
          'content': 'super good post.'
        }
      ]
    }
  ]
};

const successRequestMock = {
  msw: {
    handlers: [
      http.get('/api/posts?limit=4&page=1', () => {
        return HttpResponse.json(TestData);
      }),
    ],
  },
};

export const Separate: Story = {
  parameters: {
    state: {...mockUserSlice},
    ...successRequestMock
  }
};

export const AuthorizedLayout: Story = {
  parameters: {
    pageLayout: 'authorized',
    state: {...mockUserSlice},
    ...successRequestMock
  },
  decorators: [LayoutDecorator]
};

export const AuthorizedLayoutDark: Story = {
  parameters: {
    theme: 'dark',
    pageLayout: 'authorized',
    state: {...mockUserSlice},
    ...successRequestMock
  },
  decorators: [LayoutDecorator]
};