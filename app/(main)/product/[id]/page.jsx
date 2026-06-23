

const productPage = async ({params}) => {
        const {id} = await params
  return (
    <div>
      <h1>your id is {id}</h1>
    </div>
  )
}

export default productPage
