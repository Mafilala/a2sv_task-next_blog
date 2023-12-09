import {readFile} from 'fs/promises'

export const getPosts = async () => {
  const data = await readFile('./content/data.json', 'utf8')
  return JSON.parse(data)
}

export const getPost = async (index) => {
  const posts = await getPosts()
  return posts[index]
}

export const getPostCount = async () => {
  const data = await getPosts()
  return  data.length
}

