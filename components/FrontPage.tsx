import Header from './Header'
import Stories from './Stories'

const FrontPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="lg:max-w-[821px] lg:mx-auto mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <Stories />
            </div>
            <div>Suggestions</div>
          </div>
        </section>
      </main>
    </>
  )
}

export default FrontPage
