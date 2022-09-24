const got = require('got')
const { schedule } = require('@netlify/functions')

const { BUILD_HOOK } = process.env

if (!BUILD_HOOK) {
  console.log('No build hook.')
  console.log(process.env)
  return
}

const handler = schedule('* * * * *', async () => {
  const { data } = await got.post(BUILD_HOOK)

  console.log(data)

  return {
    statusCode: 200,
  }
})

module.exports = { handler }
