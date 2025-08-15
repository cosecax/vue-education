const SelectName = {
  TEXT: 'text',
  IMAGE: 'image',
  HEADER: 'header',
  SUBHEADER: 'subheader'
}

const mainUrl = 'https://vue-http-6f3dc-default-rtdb.firebaseio.com'
const ApiUrl = {
  COMMENTS: `${mainUrl}/comments.json`,
  COMMENTS_BY_ID: (id) => `${mainUrl}/comments/${id}.json`
}

export {
  SelectName,
  ApiUrl
}
