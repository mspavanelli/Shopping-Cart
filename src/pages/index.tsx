import Layout from 'components/layout'
import Search from 'components/Search'
import CartResume from 'components/CartResume'
import ProductCard from 'components/ProductCard'

const Home = () => (
  <Layout>
    <Search
      searchProduct={(term: string) => {
        return term
      }}
    />
    <CartResume />
    <ProductCard
      product={{ name: 'Produto', price: '2000' }}
      addToCart={() => {}}
    />
  </Layout>
)

export default Home
