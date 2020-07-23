export default (req, res) => {
    const {
      query: { slug },
    } = req
  
    res.end(`Post: ${slug.join(', ')}`)
  }