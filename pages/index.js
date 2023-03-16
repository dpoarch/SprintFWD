import Layout from '../components/Layout/Layout'


 const Home = () => {
  return (
    <Layout title="SprintFWD - Home">
      <div className="mt-5 p-5 mb-5 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Home</h1>
          <p className="fs-4">Demo page for a different type of persons. <br></br> <small style={{fontSize: '14px'}}>Click the button below to see all person.</small></p>
          <button className="btn btn-outline-primary btn-md" type="button">See All Persons</button>
        </div>
      </div>
    </Layout>
  )
}

export default Home;