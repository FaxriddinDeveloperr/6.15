import { Cards } from '../Static'

const Project = () => {
  return (
    <section className="py-10">
      <div className="container px-4">
        <h4 className="text-3xl font-bold mb-8 text-center">Projects</h4>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
          {
            Cards?.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden  "
              >
                <div className="w-full h-[470px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-lg font-medium text-gray-800">{item.title}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Project
