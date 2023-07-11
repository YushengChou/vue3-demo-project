// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),
  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    // const isAuthenticated = sessionStorage.getItem('is-authenticated')

    // if (!isAuthenticated) {
    //   // If not authenticated, respond with a 403 error
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       errorMessage: 'Not authorized',
    //     }),
    //   )
    // }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        name: 'Terry',
        age: 37,
      }),
    )
  }),
  rest.get('/menu', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: '好喝黑糖',
          id: '64f',
          children: [
            {
              name: '黑糖鮮奶',
              id: '445',
              children: [
                {
                  name: '黑糖珍珠鮮奶',
                  id: '37a',
                },
                {
                  name: '黑糖芋圓鮮奶',
                  id: 'feb',
                },
                {
                  name: '黑糖蒟蒻鮮奶',
                  id: '59c',
                },
              ],
            },
            {
              name: '黑糖冬瓜',
              id: '29e',
              children: [
                {
                  name: '黑糖冬瓜牛奶',
                  id: 'ac3',
                },
                {
                  name: '黑糖冬瓜珍珠',
                  id: 'ca0',
                },
              ],
            },
          ],
        },
        {
          name: '茶',
          id: '6c3',
          children: [
            {
              name: '烏龍綠',
              id: '5dc',
            },
            {
              name: '綠茶',
              id: 'b5f',
            },
            {
              name: '紅茶',
              id: 'b09',
            },
            {
              name: '青茶',
              id: '887',
            },
          ],
        },
        {
          name: '咖啡',
          id: 'c81',
          children: [
            {
              name: '黑咖啡',
              id: 'e02',
              children: [
                {
                  name: '濃縮咖啡',
                  id: 'd20',
                },
                {
                  name: '美式咖啡',
                  id: '1f8',
                },
              ],
            },
            {
              name: '牛奶咖啡',
              id: 'd7a',
              children: [
                {
                  name: '拿鐵',
                  id: 'c09',
                  children: [
                    {
                      name: '黑糖拿鐵',
                      id: 'db2',
                    },
                    {
                      name: '榛果拿鐵',
                      id: '9f6',
                    },
                    {
                      name: '香草拿鐵',
                      id: 'b61',
                    },
                  ],
                },
                {
                  name: '卡布奇諾',
                  id: '9ac',
                },
                {
                  name: '摩卡',
                  id: 'ce8',
                },
              ],
            },
          ],
        },
      ]),
    )
  }),
]
