import { Card } from "@/components/ui/card";
import image2 from "../../images/logo.png"

const PastWork = ({

  posts = [
    
  ]
}) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16">

        <div
          className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last bg-gray-50 rounded-2xl sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2 p-6">

              <div
                className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div
                      className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <a href={post.url} target="_blank">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-muted-foreground md:mt-5">
                    {post.summary}
                  </p>
                  <div className="mt-4 flex items-center space-x-4 text-sm md:mt-4">
                    <span className="text-muted-foreground">{post.author}</span>
                    <span className="text-muted-foreground">
                      {post.published}
                    </span>
                  </div>
                  <div className="mt-1 md:mt-1">
                    <span className="text-xl font-bold text-[#930000] underline underline-offset-[6px]">
                      {post.highlight}
                    </span>
                  </div>

                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={post.url} target="_blank" className="block">
                    <div className="h-72 sm:h-80 md:h-96 overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-contain rounded-lg transition-opacity duration-200 fade-in" />
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PastWork };
